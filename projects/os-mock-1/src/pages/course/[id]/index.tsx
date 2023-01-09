import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import AutoTable from "@components/table";
import useBreadcrumb from "@hooks/useBreadcrumb";
import useCourseFromRoute from "@hooks/useCourseFromRoute";
import type { Assignment } from "@prisma/client";
import {
    createColumnHelper,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { useVirtual, VirtualItem } from "@tanstack/react-virtual";
import { trpc } from "@utils/trpc";

const columnHelper = createColumnHelper<Assignment>();

const columns = [
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => <span>Name</span>,
    }),
    columnHelper.accessor("dueDate", {
        cell: (info) => info.getValue().toDateString(),
        header: () => <span>Due</span>,
    }),
];

const Course = () => {
    useBreadcrumb({ href: "/courses", name: "Courses" });
    const { data: courseData, isLoading: isCourseLoading } = useCourseFromRoute();
    const {
        data: assignmentData,
        isFetching,
        fetchNextPage,
    } = trpc.courses.assignments.useInfiniteQuery(
        { courseId: courseData?.id ?? "" },
        {
            enabled: !!courseData?.id,
            getNextPageParam: (_lastGroup, groups) => groups.length,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );
    const [sorting, setSorting] = useState<SortingState>([]);

    const tableContainerRef = useRef<HTMLDivElement>(null);

    //we must flatten the array of arrays from the useInfiniteQuery hook
    const flatData = useMemo(() => assignmentData?.pages?.flatMap((page) => page.items) ?? [], [assignmentData]);
    const totalDBRowCount = assignmentData?.pages?.[0]?.meta?.totalDBRows ?? 0;
    const totalFetched = flatData.length;

    //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
    const fetchMoreOnBottomReached = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
            if (containerRefElement) {
                const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
                //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
                if (scrollHeight - scrollTop - clientHeight < 300 && !isFetching && totalFetched < totalDBRowCount) {
                    fetchNextPage();
                }
            }
        },
        [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
    );

    //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
    useEffect(() => {
        fetchMoreOnBottomReached(tableContainerRef.current);
    }, [fetchMoreOnBottomReached]);

    const table = useReactTable({
        data: flatData,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: true,
    });

    if (isCourseLoading) {
        return <Spinner fullScreen />;
    }

    if (!courseData) {
        return (
            <Layout>
                <Box>Course not found</Box>
            </Layout>
        );
    }

    return (
        <Layout>
            <Box>{courseData.name}</Box>
            <Divider />
            <Heading>Assignments</Heading>
            <AutoTable table={table} />
        </Layout>
    );
};

export default Course;

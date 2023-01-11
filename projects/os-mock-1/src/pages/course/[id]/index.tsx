import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";
import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import AutoTable from "@components/autoTable";
import useBreadcrumb from "@hooks/useBreadcrumb";
import useCourseFromRoute from "@hooks/useCourseFromRoute";
import type { Assignment } from "@prisma/client";
import { trpc } from "@utils/trpc";
import type { SortingState } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { useReactTable, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<Assignment>();

const columns = [
    columnHelper.accessor("name", {
        cell: (info) => (
            <Link href={`/course/${info.row.original.courseId}/assignment/${info.row.original.id}`}>
                {info.getValue()}
            </Link>
        ),
        header: () => <span>Name</span>,
    }),
    columnHelper.accessor("dueDate", {
        cell: (info) => info.getValue().toDateString(),
        header: () => <span>Due</span>,
    }),
];

const Course = () => {
    useBreadcrumb({ href: "/courses", name: "Courses" });
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const [sorting, setSorting] = useState<SortingState>([]);

    const { data: courseData, isLoading: isCourseLoading } = useCourseFromRoute();
    const { data, isFetching, fetchNextPage } = trpc.courses.assignments.useInfiniteQuery(
        { courseId: courseData?.id ?? "" },
        {
            enabled: !!courseData?.id,
            getNextPageParam: (_lastGroup, groups) => _lastGroup.nextCursor,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );

    const flatData = useMemo(() => data?.pages?.flatMap((page) => page.items) ?? [], [data]);
    const totalDBRows = data?.pages?.[0]?.meta?.totalDBRows ?? 0;
    const totalFetched = flatData.length;

    //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
    const fetchMoreOnBottomReached = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
            console.log("scrolled");
            if (containerRefElement) {
                const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
                //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
                if (scrollHeight - scrollTop - clientHeight < 300 && !isFetching && totalFetched < totalDBRows) {
                    void fetchNextPage();
                }
            }
        },
        [fetchNextPage, isFetching, totalFetched, totalDBRows]
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
            <div
                onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
                ref={tableContainerRef}
                id="cuck"
                className="h-[500px] max-w-[900px] overflow-auto"
            >
                <AutoTable refReq={tableContainerRef} table={table} isFetching={isFetching} />
            </div>
        </Layout>
    );
};

export default Course;

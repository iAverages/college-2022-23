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

// @tanstack/table builder
const columnHelper = createColumnHelper<Assignment>();

// Columns for course table
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
    // Add breadcrumb item
    useBreadcrumb({ href: "/courses", name: "Courses" });
    // Create ref to access later for getting scroll distance
    const tableContainerRef = useRef<HTMLDivElement>(null);
    // Sorting state of table
    const [sorting, setSorting] = useState<SortingState>([]);

    // Get course data based on current route
    const { data: courseData, isLoading: isCourseLoading } = useCourseFromRoute();
    // Get assignments for the course the user is accessing.
    // Disable this query until we have an ID
    const { data, isFetching, fetchNextPage } = trpc.courses.assignments.useInfiniteQuery(
        { courseId: courseData?.id ?? "" },
        {
            enabled: !!courseData?.id,
            getNextPageParam: (_lastGroup) => _lastGroup.nextCursor,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );

    // Data is an array with the data we want inside of another array
    // we use flatMap to merge these into one big array
    // we use useMemo here to only run this if the data has changed
    // this helps with some performance on biggest data sets
    const flatData = useMemo(() => data?.pages?.flatMap((page) => page.items) ?? [], [data]);

    const totalDBRows = data?.pages?.[0]?.meta?.totalDBRows ?? 0;
    const totalFetched = flatData.length;

    //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
    const fetchMoreOnBottomReached = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
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

    // Create @tanstack/table
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

    // If we are loading, show loading spinner
    if (isCourseLoading) {
        return <Spinner fullScreen />;
    }

    // Handle invalid course IDs
    if (!courseData) {
        return (
            <Layout>
                <Box>Course not found</Box>
            </Layout>
        );
    }

    // Display course inforation + assignments to user
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

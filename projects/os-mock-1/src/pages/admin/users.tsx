import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { User } from "@prisma/client";
import useGetUsers from "@hooks/useGetUser";
import Table from "@components/table";

const columnHelper = createColumnHelper<User>();

const columns = [
    columnHelper.accessor("name", {
        header: () => <span>Name</span>,
        cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("email", {
        header: () => <span>Email</span>,
        cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("emailVerified", {
        header: () => <span>Verified</span>,
        cell: (info) => <i>{info.getValue()?.toLocaleTimeString()}</i>,
    }),
];

const Users = () => {
    const { data, isLoading } = useGetUsers();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Layout>
            <h1>Users</h1>
            {isLoading && <Spinner className="flex w-full justify-center" />}
            <Table table={table} />
        </Layout>
    );
};

export default Users;

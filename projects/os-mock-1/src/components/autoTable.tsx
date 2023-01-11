import type { RefObject } from "react";
import { flexRender, type Row, type Table as TableType } from "@tanstack/react-table";
import { useVirtual } from "@tanstack/react-virtual";
import { Table, Thead, Tbody, Tr, Th, Td, Tfoot } from "@chakra-ui/react";
import Spinner from "./spinner/spinner";

type TableProps<T> = {
    table: TableType<T>;
    refReq: RefObject<HTMLDivElement>;
    isFetching?: boolean;
};

const AutoTable = <T,>({ table, refReq, isFetching }: TableProps<T>) => {
    const { rows } = table.getRowModel();

    const rowVirtualizer = useVirtual({
        parentRef: refReq,
        size: rows.length,
        overscan: 10,
    });

    const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

    return (
        <>
            <Table>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: header.column.getCanSort()
                                                        ? "cursor-pointer select-none"
                                                        : "",
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {{
                                                    asc: " 🔼",
                                                    desc: " 🔽",
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        )}
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {paddingTop > 0 && (
                        <Tr>
                            <Td style={{ height: `${paddingTop}px` }} />
                        </Tr>
                    )}
                    {virtualRows.map((virtualRow) => {
                        const row = rows[virtualRow.index] as Row<T>;
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                    {paddingBottom > 0 && (
                        <Tr>
                            <Td style={{ height: `${paddingBottom}px` }} />
                        </Tr>
                    )}
                </Tbody>
            </Table>
            {isFetching && (
                <div className="flex w-full justify-center ">
                    <Spinner />
                </div>
            )}
        </>
    );
};

export default AutoTable;

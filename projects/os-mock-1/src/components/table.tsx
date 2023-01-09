import { useRef } from "react";
import { flexRender, type Row, type Table } from "@tanstack/react-table";
import { Table as ChakraTable, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import { useVirtual } from "@tanstack/react-virtual";

type TableProps = { table: Table<unknown> };

const AutoTable: React.FC<TableProps> = ({ table }) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    const { rows } = table.getRowModel();

    //Virtualizing is optional, but might be necessary if we are going to potentially have hundreds or thousands of rows
    const rowVirtualizer = useVirtual({
        parentRef: tableContainerRef,
        size: rows.length,
        overscan: 10,
    });
    const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

    return (
        <ChakraTable>
            <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {paddingTop > 0 && (
                    <tr>
                        <td style={{ height: `${paddingTop}px` }} />
                    </tr>
                )}
                {virtualRows.map((virtualRow) => {
                    const row = rows[virtualRow.index] as Row<unknown>;
                    return (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                );
                            })}
                        </tr>
                    );
                })}
                {paddingBottom > 0 && (
                    <tr>
                        <td style={{ height: `${paddingBottom}px` }} />
                    </tr>
                )}
            </Tbody>
            <Tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                    <Tr key={footerGroup.id}>
                        {footerGroup.headers.map((header) => (
                            <Th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.footer, header.getContext())}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Tfoot>
        </ChakraTable>
    );
};

export default AutoTable;

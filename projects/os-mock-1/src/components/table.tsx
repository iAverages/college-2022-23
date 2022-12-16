import { flexRender, Table } from "@tanstack/react-table";
import { Table as ChakraTable, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";

type TableProps = { table: Table<any> };

const Table: React.FC<TableProps> = ({ table }) => {
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
                {table.getRowModel().rows.map((row) => (
                    <Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                        ))}
                    </Tr>
                ))}
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

export default Table;

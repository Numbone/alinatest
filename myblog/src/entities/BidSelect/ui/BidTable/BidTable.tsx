import {
    ColumnDef,
    ColumnFiltersState,
    FilterFn,
    flexRender,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingFn,
    sortingFns,
    useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import {
    compareItems,
    RankingInfo,
    rankItem,
} from '@tanstack/match-sorter-utils';

import { DebouncedInput } from '../../model/lib/DebouncedInput';
import { makeData, Person } from './makeData';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<Person> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
        itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
};

const fuzzySort: SortingFn<Person> = (rowA, rowB, columnId) => {
    let dir = 0;

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!,
        );
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

export function BidTable() {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        [],
    );
    const [globalFilter, setGlobalFilter] = React.useState('');

    const columns = React.useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                header: 'Name',
                footer: (props) => props?.column?.id,
                columns: [
                    {
                        accessorKey: 'firstName',
                        cell: (info) => info.getValue(),
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorFn: (row) => row.lastName,
                        id: 'lastName',
                        cell: (info) => info.getValue(),
                        header: () => <span>Last Name</span>,
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
                        id: 'fullName',
                        header: 'Full Name',
                        cell: (info) => info.getValue(),
                        footer: (props) => props.column.id,
                        filterFn: 'fuzzy',
                        sortingFn: fuzzySort,
                    },
                ],
            },
            {
                header: 'Info',
                footer: (props) => props.column.id,
                columns: [
                    {
                        accessorKey: 'age',
                        header: () => 'Age',
                        footer: (props) => props.column.id,
                    },
                    {
                        header: 'More Info',
                        columns: [
                            {
                                accessorKey: 'visits',
                                header: () => <span>Visits</span>,
                                footer: (props) => props.column.id,
                            },
                            {
                                accessorKey: 'status',
                                header: 'Status',
                                footer: (props) => props.column.id,
                            },
                            {
                                accessorKey: 'progress',
                                header: 'Profile Progress',
                                footer: (props) => props.column.id,
                            },
                        ],
                    },
                ],
            },
        ],
        [],
    );

    const [data, setData] = React.useState<Person[]>(() => makeData(50000));

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    });

    React.useEffect(() => {
        if (table.getState().columnFilters[0]?.id === 'fullName') {
            if (table.getState().sorting[0]?.id !== 'fullName') {
                table.setSorting([{ id: 'fullName', desc: false }]);
            }
        }
    }, [table.getState().columnFilters[0]?.id]);

    return (
        <div className="p-2">
            <div>
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={(value) => setGlobalFilter(String(value))}
                    className="p-2 font-lg shadow border border-block"
                    placeholder="Search all columns..."
                />
            </div>
            <div className="h-2" />
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext(),
                                                    )}
                                                    {{
                                                        asc: ' 🔼',
                                                        desc: ' 🔽',
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                                {/* {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table} />
                                                    </div>
                                                ) : null} */}
                                            </>
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>

                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1}
                        {' '}
                        of
                        {' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span className="flex items-center gap-1">
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                        className="border p-1 rounded w-16"
                    />
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show
                            {' '}
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            {/* <div>
                {table.getPrePaginationRowModel().rows.length}
                {' '}
                Rows
            </div>
            <div>
                <button onClick={() => rerender()}>Force Rerender</button>
            </div>
            <div>
                <button onClick={() => refreshData()}>Refresh Data</button>
            </div>
            <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
        </div>
    );
}

// A debounced input react component


"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TimetableEntry } from "@/app/dashboard/timetable/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<TimetableEntry>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "day",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Day" />
    ),
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Start Time" />
    ),
  },
    {
    accessorKey: "endTime",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="End Time" />
    ),
  },
  {
    accessorKey: "class",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Class" />
    ),
  },
  {
    accessorKey: "subject",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Subject" />
    ),
  },
  {
    accessorKey: "teacher",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Teacher" />
    ),
  },
    {
    accessorKey: "room",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Room" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const entry = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(entry.id)}
            >
              Copy schedule ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit schedule</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


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
import { Attendance } from "@/app/dashboard/attendance/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"


export const columns: ColumnDef<Attendance>[] = [
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
    accessorKey: "studentId",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Student ID" />
    ),
  },
  {
    accessorKey: "studentName",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Student Name" />
    ),
  },
  {
    accessorKey: "class",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Class" />
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variant: "default" | "secondary" | "destructive" | "outline" =
        status === "Present" ? "default" : status === "Absent" ? "destructive" : status === "Late" ? "secondary" : "outline";
      return <Badge variant={variant}>{status}</Badge>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const attendance = row.original

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
              onClick={() => navigator.clipboard.writeText(attendance.id)}
            >
              Copy record ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit record</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

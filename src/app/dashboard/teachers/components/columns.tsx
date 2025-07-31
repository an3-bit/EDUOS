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
import { Teacher } from "@/app/dashboard/teachers/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"


export const columns: ColumnDef<Teacher>[] = [
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
    accessorKey: "id",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Teacher ID" />
    ),
  },
  {
    accessorKey: "name",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
    ),
  },
    {
    accessorKey: "subject",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Subject" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "status",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const teacher = row.original

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
              onClick={() => navigator.clipboard.writeText(teacher.id)}
            >
              Copy teacher ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View teacher details</DropdownMenuItem>
            <DropdownMenuItem>Edit teacher</DropdownMenuItem>
             <DropdownMenuItem className="text-red-600">Delete teacher</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

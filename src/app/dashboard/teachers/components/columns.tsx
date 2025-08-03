"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

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
import { Badge } from "@/components/ui/badge"


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
    accessorKey: "staff_id",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Staff ID" />
    ),
  },
  {
    accessorFn: row => `${row.first_name} ${row.last_name}`,
    id: "name",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
    ),
  },
    {
    accessorKey: "job_title",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Job Title" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "phone_number",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
    ),
  },
   {
    accessorKey: "status",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
    ),
     cell: ({ row }) => {
      const status = row.original.is_active
      const variant: "default" | "secondary" = status ? "default" : "secondary"
      return <Badge variant={variant}>{status ? 'Active' : 'Inactive'}</Badge>
    },
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
            <DropdownMenuItem>
              <Link href={`/dashboard/teachers/${teacher.id}`}>View teacher details</Link>
            </DropdownMenuItem>
             <DropdownMenuItem>
                <Link href={`/dashboard/teachers/edit/${teacher.id}`}>Edit teacher</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
             <DropdownMenuItem className="text-red-600">Delete teacher</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

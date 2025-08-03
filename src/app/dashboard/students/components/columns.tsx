
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
import { Student } from "@/app/dashboard/students/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"


export const columns: ColumnDef<Student>[] = [
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
    accessorKey: "admission_number",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Admission #" />
    ),
  },
  {
    accessorFn: row => `${row.first_name} ${row.last_name}`,
    id: 'name',
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
    ),
  },
    {
    accessorKey: "class_level",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Class" />
    ),
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Gender" />
    ),
  },
  {
    accessorKey: "enrollment_status",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
    ),
     cell: ({ row }) => {
      const status = row.getValue("enrollment_status") as string
       const variant: "default" | "secondary" | "outline" | "destructive" =
        status === "Active" ? "default" : status === "Graduated" ? "secondary" : "outline";
      return <Badge variant={variant}>{status}</Badge>
    },
      filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const student = row.original

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
                <Link href={`/dashboard/students/${student.id}`}>View student details</Link>
            </DropdownMenuItem>
             <DropdownMenuItem>
                <Link href={`/dashboard/students/edit/${student.id}`}>Edit student</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Promote Student</DropdownMenuItem>
            <DropdownMenuItem>Assign to Stream</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Suspend Student</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

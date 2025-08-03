
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
import { Invoice } from "@/app/dashboard/fee/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Invoice>[] = [
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
    accessorKey: "invoice_number",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Invoice #" />
    ),
  },
  {
    accessorKey: "student",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Student" />
    ),
  },
  {
    accessorKey: "total_amount",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    },
  },
   {
    accessorKey: "balance",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(amount)

      return <div className="font-medium text-destructive">{formatted}</div>
    },
  },
  {
    accessorKey: "due_date",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Due Date" />
    ),
  },
  {
    accessorKey: "status",
     header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
    ),
     cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant: "default" | "secondary" | "destructive" | "outline" =
        status === "Paid" ? "default" : status === "Pending" ? "secondary" : status === "Overdue" ? "destructive" : "outline";
      return <Badge variant={variant}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invoice = row.original

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
            <DropdownMenuItem>View Invoice</DropdownMenuItem>
            <DropdownMenuItem>Record Payment</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Cancel Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


"use client";

import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/fee/components/columns';
import { DataTable } from '@/app/dashboard/fee/components/data-table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { InvoiceForm } from './components/invoice-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useData } from '@/context/DataContext';

export default function FeeManagementPage() {
  const { invoices } = useData();
  const formattedInvoices = invoices.map((invoice: any) => ({
      ...invoice,
      issued_on: new Date(invoice.issued_on).toLocaleDateString(),
      due_date: new Date(invoice.due_date).toLocaleDateString(),
    }));

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Fee Management</h2>
          <p className="text-muted-foreground">
            Manage fee structures, invoices, payments, and more.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Create Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new invoice for a student.
                </DialogDescription>
              </DialogHeader>
              <InvoiceForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="invoices">
            <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="structures">Fee Structures</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="bursaries">Bursaries</TabsTrigger>
                <TabsTrigger value="refunds">Refunds</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
                <Card>
                    <CardHeader>
                        <CardTitle>Fee Dashboard</CardTitle>
                        <CardDescription>Overview of fee collections and outstanding balances.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Charts and KPIs for fees will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="structures">
                <Card>
                    <CardHeader>
                        <CardTitle>Fee Structures</CardTitle>
                        <CardDescription>Manage termly fee structures for different class levels.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Fee structure management will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="invoices">
                 <DataTable data={formattedInvoices} columns={columns} />
            </TabsContent>
            <TabsContent value="payments">
                <Card>
                    <CardHeader>
                        <CardTitle>Payments</CardTitle>
                        <CardDescription>Record and view all student payments.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Payment records will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="bursaries">
                 <Card>
                    <CardHeader>
                        <CardTitle>Bursary Allocations</CardTitle>
                        <CardDescription>Manage bursaries and scholarships for students.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Bursary management will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="refunds">
                <Card>
                    <CardHeader>
                        <CardTitle>Refund Requests</CardTitle>
                        <CardDescription>Manage and approve refund requests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Refund requests will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

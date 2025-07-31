
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/finance/components/columns';
import { DataTable } from '@/app/dashboard/finance/components/data-table';
import { transactionSchema } from '@/app/dashboard/finance/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TransactionForm } from './components/transaction-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simulate a database read for transactions.
async function getTransactions() {
  // In a real app, you'd fetch this from a database.
  // For now, we'll return an empty array since we don't have a backend.
  return z.array(transactionSchema).parse([]);
}

export default async function FinanceManagementPage() {
  const transactions = await getTransactions();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Finance Management</h2>
          <p className="text-muted-foreground">
            Manage budgets, invoices, payments, and the wallet system.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new transaction.
                </DialogDescription>
              </DialogHeader>
              <TransactionForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="overview">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="budgets">Budgets</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                 <DataTable data={transactions} columns={columns} />
            </TabsContent>
            <TabsContent value="invoices">
                <p className="text-muted-foreground p-4">Invoices will be displayed here.</p>
            </TabsContent>
            <TabsContent value="payments">
                 <p className="text-muted-foreground p-4">Payments will be displayed here.</p>
            </TabsContent>
            <TabsContent value="budgets">
                 <p className="text-muted-foreground p-4">Budgets will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

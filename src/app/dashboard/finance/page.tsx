
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBudgets, getInvoices, getPaymentRecords } from '@/api'; // Import API functions
import BudgetManagement from '@/app/dashboard/finance/components/BudgetManagement'; // Import BudgetManagement
import StudentInvoices from '@/app/dashboard/finance/components/StudentInvoices'; // Import StudentInvoices
import PaymentProcessing from '@/app/dashboard/finance/components/PaymentProcessing'; // Import PaymentProcessing

// Simulate a database read for transactions.
// async function getTransactions() {
//   // In a real app, you&#39;d fetch this from a database.
//   // For now, we&#39;ll return an empty array since we don&#39;t have a backend.
//   return z.array(transactionSchema).parse([]);
// }

export default async function FinanceManagementPage() {
  // Fetch data using API functions
  let budgets = [];
  try {
    const budgetsResponse = await getBudgets();
    budgets = budgetsResponse.data; // Access data from axios response
  } catch (error) {
    console.error("Failed to fetch budgets:", error);
  }

  let invoices = [];
  try {
    const invoicesResponse = await getInvoices();
    invoices = invoicesResponse.data; // Access data from axios response
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
  }

  let payments = [];
  try {
    const paymentsResponse = await getPaymentRecords();
    payments = paymentsResponse.data; // Access data from axios response
  } catch (error) {
    console.error("Failed to fetch payments:", error);
  }

  // You might still need to fetch transactions if your backend has a specific endpoint for them
  // const transactionsResponse = await getTransactions();
  // const transactions = transactionsResponse.data;

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
                 {/* You can decide what to display in the overview tab */}
                 {/* Maybe a summary or recent transactions */}
                 {/* For now, we'll keep the transactions DataTable if you have a relevant API */}
                 {/* <DataTable data={transactions} columns={columns} /> */}
                 <p className="text-muted-foreground p-4">Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="invoices">
                <StudentInvoices invoices={invoices} /> {/* Include StudentInvoices */}
            </TabsContent>
            <TabsContent value="payments">
                 <PaymentProcessing payments={payments} /> {/* Include PaymentProcessing */}
            </TabsContent>
            <TabsContent value="budgets">
                 <BudgetManagement budgets={budgets} /> {/* Include BudgetManagement */}
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

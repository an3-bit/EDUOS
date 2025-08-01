
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

async function getTransactions() {
  try {
    const response = await getPaymentRecords();
    return z.array(transactionSchema).parse(response.data);
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    return [];
  }
}

export default async function FinanceManagementPage() {
  let budgets: any[] = [];
  let invoices: any[] = [];
  let payments: any[] = [];
  try {
    const budgetsResponse = await getBudgets();
    budgets = budgetsResponse.data;

    const invoicesResponse = await getInvoices();
    invoices = invoicesResponse.data; 

    const paymentsResponse = await getPaymentRecords();
    payments = paymentsResponse.data; 
  } catch (error) {
    console.error("Failed to fetch finance data:", error);
  }

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
                <StudentInvoices invoices={invoices} />
            </TabsContent>
            <TabsContent value="payments">
                 <PaymentProcessing payments={payments} />
            </TabsContent>
            <TabsContent value="budgets">
                 <BudgetManagement budgets={budgets} />
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

    
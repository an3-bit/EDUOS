
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
import { getBudgets, getInvoices, getPaymentRecords } from '@/api';
import BudgetManagement from '@/app/dashboard/finance/components/BudgetManagement';
import StudentInvoices from '@/app/dashboard/finance/components/StudentInvoices';
import PaymentProcessing from '@/app/dashboard/finance/components/PaymentProcessing';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

async function getTransactions() {
  const response = await getPaymentRecords();
   if (response && response.data && Array.isArray(response.data.results)) {
    // Manually map to the expected schema, since mock data is simple
    const transactions = response.data.results.map((t: any) => ({
      id: t.id,
      invoiceNumber: t.invoiceNumber,
      studentName: t.studentName,
      amount: t.amount,
      date: new Date(t.date).toLocaleDateString(),
      status: t.status,
    }));
    return z.array(transactionSchema).parse(transactions);
  }
  return [];
}

async function getFinanceData() {
    const budgetsResponse = await getBudgets();
    const invoicesResponse = await getInvoices();
    const paymentsResponse = await getPaymentRecords();

    const budgets = (budgetsResponse && budgetsResponse.data && Array.isArray(budgetsResponse.data.results)) ? budgetsResponse.data.results : [];
    const invoices = (invoicesResponse && invoicesResponse.data && Array.isArray(invoicesResponse.data.results)) ? invoicesResponse.data.results : [];
    const payments = (paymentsResponse && paymentsResponse.data && Array.isArray(paymentsResponse.data.results)) ? paymentsResponse.data.results : [];

    return {
        budgets,
        invoices,
        payments,
    }
}

export default async function FinanceManagementPage() {
  const transactions = await getTransactions();
  const { budgets, invoices, payments } = await getFinanceData();

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
            <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="budgets">Budgets</TabsTrigger>
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
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
            <TabsContent value="approvals">
                 <Card>
                    <CardHeader>
                        <CardTitle>Approval Requests</CardTitle>
                        <CardDescription>Pending refund and waiver approvals.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Approval requests will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="reports">
                 <Card>
                    <CardHeader>
                        <CardTitle>Financial Reports</CardTitle>
                        <CardDescription>Generated financial reports and analytics.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Reports will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

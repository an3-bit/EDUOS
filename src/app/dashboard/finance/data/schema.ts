
import { z } from "zod"

export const transactionSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  invoiceNumber: z.string(),
  amount: z.number(),
  date: z.string(),
  status: z.enum(["Paid", "Pending", "Overdue"]),
});

export type Transaction = z.infer<typeof transactionSchema>

export const budgetSchema = z.object({
    id: z.string(),
    title: z.string(),
    total_allocation: z.number(),
    total_spent: z.number(),
    academic_year: z.string(),
    term: z.string(),
});

export type Budget = z.infer<typeof budgetSchema>;


export const studentInvoiceSchema = z.object({
    id: z.string(),
    student: z.string(),
    invoice_number: z.string(),
    issued_on: z.date(),
    due_date: z.date(),
    total_amount: z.number(),
    amount_paid: z.number(),
    balance: z.number(),
    status: z.enum(["Paid", "Pending", "Overdue", "Cancelled"]),
});

export type StudentInvoice = z.infer<typeof studentInvoiceSchema>;

export const walletTransactionSchema = z.object({
    id: z.string(),
    student: z.string(),
    transaction_type: z.enum(["Credit", "Debit"]),
    amount: z.number(),
    description: z.string(),
    timestamp: z.date(),
});

export type WalletTransaction = z.infer<typeof walletTransactionSchema>;

export const approvalRequestSchema = z.object({
    id: z.string(),
    request_type: z.enum(["Refund", "Waiver"]),
    student: z.string(),
    amount: z.number(),
    status: z.enum(["Pending", "Approved", "Rejected"]),
    requested_by: z.string(),
    date_requested: z.date(),
});

export type ApprovalRequest = z.infer<typeof approvalRequestSchema>;

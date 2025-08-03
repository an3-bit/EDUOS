
import { z } from "zod";

export const feeItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    amount: z.number(),
    class_level: z.string().optional(),
    stream: z.string().optional(),
    term: z.string(),
    institution: z.string(),
});
export type FeeItem = z.infer<typeof feeItemSchema>;

export const feeStructureSchema = z.object({
    id: z.string(),
    term: z.string(),
    year: z.number(),
    institution: z.string(),
    class_level: z.string(),
    stream: z.string().optional(),
    total_amount: z.number(),
    fee_items: z.array(feeItemSchema),
});
export type FeeStructure = z.infer<typeof feeStructureSchema>;

export const invoiceSchema = z.object({
  id: z.string(),
  student: z.string(),
  invoice_number: z.string(),
  issued_on: z.string(),
  due_date: z.string(),
  total_amount: z.number(),
  amount_paid: z.number(),
  balance: z.number(),
  status: z.enum(["Paid", "Pending", "Overdue", "Draft", "Cancelled"]),
});
export type Invoice = z.infer<typeof invoiceSchema>;

export const paymentSchema = z.object({
    id: z.string(),
    student: z.string(),
    invoice: z.string(),
    amount: z.number(),
    mode: z.enum(["M-Pesa", "Cash", "Bank", "Cheque", "Bursary"]),
    paid_at: z.date(),
    status: z.enum(["Completed", "Pending", "Failed"]),
    received_by: z.string(),
});
export type Payment = z.infer<typeof paymentSchema>;


import { z } from "zod"

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  isbn: z.string(),
  category: z.string().optional(),
  description: z.string().optional(),
  language: z.string().optional(),
  published_year: z.number().optional(),
  status: z.enum(["Available", "Borrowed", "Damaged", "Lost"]),
})

export type Book = z.infer<typeof bookSchema>

export const borrowTransactionSchema = z.object({
    id: z.string(),
    user: z.string(),
    book_copy: z.string(),
    borrowed_on: z.date(),
    due_date: z.date(),
    returned_on: z.date().nullable(),
    fine: z.number().optional(),
});

export type BorrowTransaction = z.infer<typeof borrowTransactionSchema>;

export const fineSchema = z.object({
    id: z.string(),
    transaction: z.string(),
    amount: z.number(),
    paid: z.boolean(),
    waived: z.boolean(),
});

export type Fine = z.infer<typeof fineSchema>;


import { z } from "zod"

export const transactionSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  invoiceNumber: z.string(),
  amount: z.number(),
  date: z.string(),
  status: z.string(),
})

export type Transaction = z.infer<typeof transactionSchema>

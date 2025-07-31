
import { z } from "zod"

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  isbn: z.string(),
  status: z.enum(["Available", "Borrowed"]),
})

export type Book = z.infer<typeof bookSchema>

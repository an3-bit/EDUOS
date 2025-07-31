
import { z } from "zod"

export const guardianSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  studentName: z.string(),
  status: z.enum(["Active", "Inactive"]),
})

export type Guardian = z.infer<typeof guardianSchema>

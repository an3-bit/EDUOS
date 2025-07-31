import { z } from "zod"

export const teacherSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  status: z.string(),
})

export type Teacher = z.infer<typeof teacherSchema>


import { z } from "zod"

export const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  teacher: z.string(),
  status: z.string(),
  studentCount: z.number(),
})

export type Course = z.infer<typeof courseSchema>

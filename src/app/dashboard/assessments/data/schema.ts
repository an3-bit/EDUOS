
import { z } from "zod"

export const assessmentSchema = z.object({
  id: z.string(),
  title: z.string(),
  class: z.string(),
  subject: z.string(),
  date: z.string(),
  maxMarks: z.number(),
  status: z.enum(["Scheduled", "Completed", "Graded"]),
})

export type Assessment = z.infer<typeof assessmentSchema>

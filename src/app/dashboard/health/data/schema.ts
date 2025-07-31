
import { z } from "zod"

export const healthRecordSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  date: z.string(),
  condition: z.string(),
  notes: z.string(),
})

export type HealthRecord = z.infer<typeof healthRecordSchema>

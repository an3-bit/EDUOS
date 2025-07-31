
import { z } from "zod"

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  type: z.enum(["Event", "Holiday", "Exam"]),
  description: z.string().optional(),
})

export type Event = z.infer<typeof eventSchema>

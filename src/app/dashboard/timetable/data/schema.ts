
import { z } from "zod"

export const timetableSchema = z.object({
  id: z.string(),
  class: z.string(),
  subject: z.string(),
  teacher: z.string(),
  day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
  startTime: z.string(),
  endTime: z.string(),
  room: z.string(),
})

export type TimetableEntry = z.infer<typeof timetableSchema>

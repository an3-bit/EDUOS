
import { z } from "zod"

export const classSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.string(),
  stream: z.string(),
  teacher: z.string(),
  studentCount: z.number(),
})

export type Class = z.infer<typeof classSchema>

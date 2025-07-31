
import { z } from "zod"

export const attendanceSchema = z.object({
  id: z.string(),
  studentId: z.string(),
  studentName: z.string(),
  class: z.string(),
  date: z.string(),
  status: z.enum(["Present", "Absent", "Late", "Excused"]),
})

export type Attendance = z.infer<typeof attendanceSchema>

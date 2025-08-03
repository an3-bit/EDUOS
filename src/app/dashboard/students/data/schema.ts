
import { z } from "zod"

export const studentSchema = z.object({
  id: z.string(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  middle_name: z.string().optional(),
  admission_number: z.string().min(1, "Admission number is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  date_of_birth: z.date({ required_error: "Date of birth is required" }),
  class_level: z.string().min(1, "Class level is required"),
  stream: z.string().optional(),
  enrollment_status: z.enum(["Active", "Suspended", "Graduated", "Transferred", "Inactive", "Expelled"]),
});

export type Student = z.infer<typeof studentSchema>

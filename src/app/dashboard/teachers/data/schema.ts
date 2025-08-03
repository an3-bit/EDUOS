import { z } from "zod"

export const teacherSchema = z.object({
  id: z.string(),
  user: z.string().optional(),
  staff_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string().optional(),
  email: z.string().email(),
  phone_number: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  employment_type: z.enum(["Full-time", "Part-time", "Contract"]),
  job_title: z.string(),
  is_active: z.boolean(),
  // For table display
  name: z.string().optional(), 
  status: z.string().optional(),
  subjects_taught: z.array(z.string()).optional(),
})

export type Teacher = z.infer<typeof teacherSchema>

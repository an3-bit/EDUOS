import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a relational schema with another table for classes.
export const studentSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  class: z.string(),
  status: z.string(),
})

export type Student = z.infer<typeof studentSchema>

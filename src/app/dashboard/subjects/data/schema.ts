
import { z } from "zod";

export const subjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  is_core: z.boolean(),
  is_elective: z.boolean(),
  institution: z.string(),
  is_active: z.boolean(),
});

export type Subject = z.infer<typeof subjectSchema>;

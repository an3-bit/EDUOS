import { z } from "zod"

export const examSchema = z.object({
  id: z.string(),
  name: z.string(),
  term: z.string(),
  year: z.number(),
  classLevel: z.string(),
  stream: z.string().optional(),
  status: z.enum(["Draft", "Published", "Graded", "Archived"]),
});

export type Exam = z.infer<typeof examSchema>;

export const studentScoreSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  subject: z.string(),
  score: z.number(),
});

export type StudentScore = z.infer<typeof studentScoreSchema>;

export const examResultSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  averageScore: z.number(),
  finalGrade: z.string(),
  rank: z.number(),
});

export type ExamResult = z.infer<typeof examResultSchema>;

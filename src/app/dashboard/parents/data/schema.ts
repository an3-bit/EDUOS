
import { z } from "zod"

export const notificationPreferencesSchema = z.object({
  exam_update: z.enum(['email', 'push', 'sms']).optional(),
  chat: z.enum(['email', 'push', 'sms']).optional(),
  fee_balance: z.enum(['email', 'push', 'sms']).optional(),
});

export const guardianSchema = z.object({
  id: z.string(),
  user: z.string(), // Assuming user ID
  institution: z.string(), // Assuming institution ID
  phone_number: z.string(),
  email: z.string().email(),
  id_number: z.string().optional(),
  occupation: z.string().optional(),
  address: z.string().optional(),
  profile_photo: z.string().url().optional(),
  preferred_language: z.string().default('en'),
  notification_preferences: notificationPreferencesSchema.optional(),
  is_active: z.boolean(),
  name: z.string(), // For display
  studentName: z.string(), // For display in table, will be derived from links
  status: z.enum(["Active", "Inactive"]), // For display
});

export type Guardian = z.infer<typeof guardianSchema>

export const guardianStudentLinkSchema = z.object({
  id: z.string(),
  guardian: z.string(),
  student: z.string(),
  relationship: z.enum(["Father", "Mother", "Sponsor", "Guardian", "Other"]),
  is_primary: z.boolean(),
  verified_by_school: z.boolean(),
  notes: z.string().optional(),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
});

export type GuardianStudentLink = z.infer<typeof guardianStudentLinkSchema>;


export const guardianNotificationSchema = z.object({
    id: z.string(),
    guardian: z.string(),
    institution: z.string(),
    title: z.string(),
    message: z.string(),
    type: z.enum(['exam_update', 'chat', 'fee_balance', 'general']),
    content_type: z.string().optional(),
    object_id: z.string().optional(),
    priority: z.enum(['low', 'normal', 'high', 'urgent']),
    delivered_via: z.enum(['system', 'sms', 'email', 'push']),
    scheduled_for: z.date().optional(),
    is_read: z.boolean(),
    read_at: z.date().optional(),
    timestamp: z.string(),
});

export type GuardianNotification = z.infer<typeof guardianNotificationSchema>;

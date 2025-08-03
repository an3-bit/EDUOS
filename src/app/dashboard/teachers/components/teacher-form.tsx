
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const teacherFormSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().min(1, "Last name is required."),
  middle_name: z.string().optional(),
  staff_id: z.string().min(1, "Staff ID is required."),
  email: z.string().email(),
  phone_number: z.string().min(1, "Phone number is required."),
  gender: z.enum(["Male", "Female", "Other"]),
  job_title: z.string().min(1, "Job title is required."),
  employment_type: z.enum(["Full-time", "Part-time", "Contract"]),
  bio: z.string().optional(),
})

type TeacherFormValues = z.infer<typeof teacherFormSchema>

const defaultValues: Partial<TeacherFormValues> = {
    employment_type: "Full-time"
}

export function TeacherForm() {
  const form = useForm<TeacherFormValues>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: TeacherFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="middle_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Quincy" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="staff_id"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Staff ID</FormLabel>
                    <FormControl>
                        <Input placeholder="TCH-001" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
            )}
            />
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="teacher@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input placeholder="+1 234 567 890" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g. Mathematics Teacher" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="employment_type"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Employment Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select employment type" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
            )}
            />
        </div>

        <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                    <Textarea placeholder="A short bio about the teacher..." {...field} />
                </FormControl>
                <FormDescription>
                    This will be displayed on the teacher's public profile.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        <Button type="submit">Add Teacher</Button>
      </form>
    </Form>
  )
}

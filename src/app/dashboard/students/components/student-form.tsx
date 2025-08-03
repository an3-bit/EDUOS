
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

const studentFormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }),
  last_name: z.string().min(1, { message: "Last name is required." }),
  middle_name: z.string().optional(),
  admission_number: z.string().min(1, { message: "Admission number is required." }),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Gender is required."}),
  date_of_birth: z.date({ required_error: "Date of birth is required." }),
  class_level: z.string().min(1, { message: "Class level is required." }),
  stream: z.string().optional(),
  enrollment_status: z.enum(["Active", "Suspended", "Graduated", "Transferred", "Inactive", "Expelled"], { required_error: "Enrollment status is required."}),
})

type StudentFormValues = z.infer<typeof studentFormSchema>

const defaultValues: Partial<StudentFormValues> = {}

export function StudentForm() {
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: StudentFormValues) {
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
                    <Input placeholder="Adams" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <FormField
            control={form.control}
            name="admission_number"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Admission Number</FormLabel>
                <FormControl>
                    <Input placeholder="STU-00123" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
                <FormItem className="flex flex-col pt-2">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
             <FormField
                control={form.control}
                name="enrollment_status"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Enrollment Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           <SelectItem value="Active">Active</SelectItem>
                           <SelectItem value="Suspended">Suspended</SelectItem>
                           <SelectItem value="Graduated">Graduated</SelectItem>
                           <SelectItem value="Transferred">Transferred</SelectItem>
                           <SelectItem value="Inactive">Inactive</SelectItem>
                           <SelectItem value="Expelled">Expelled</SelectItem>
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
                name="class_level"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Class Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select class level" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Grade 1">Grade 1</SelectItem>
                            <SelectItem value="Grade 2">Grade 2</SelectItem>
                            <SelectItem value="Grade 3">Grade 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
            )}
            />
             <FormField
                control={form.control}
                name="stream"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Stream</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select stream (optional)" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           <SelectItem value="A">A</SelectItem>
                           <SelectItem value="B">B</SelectItem>
                           <SelectItem value="C">C</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
            )}
            />
         </div>
       
        <Button type="submit">Add Student</Button>
      </form>
    </Form>
  )
}

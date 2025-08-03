
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


const guardianFormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }),
  last_name: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  phone_number: z.string().min(1, { message: "Phone number is required." }),
  occupation: z.string().optional(),
  address: z.string().optional(),
  studentId: z.string().min(1, { message: "A student must be linked."}),
  relationship: z.enum(["Father", "Mother", "Sponsor", "Guardian", "Other"]),
})

type GuardianFormValues = z.infer<typeof guardianFormSchema>

const defaultValues: Partial<GuardianFormValues> = {}

export function GuardianForm() {
  const form = useForm<GuardianFormValues>({
    resolver: zodResolver(guardianFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: GuardianFormValues) {
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
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                    <Input placeholder="e.g. John" {...field} />
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
                    <Input placeholder="e.g. Doe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="guardian@example.com" {...field} />
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
         <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Occupation</FormLabel>
                <FormControl>
                    <Input placeholder="e.g. Engineer" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                    <Textarea placeholder="123 Main St, Anytown, USA" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
         <div className="grid grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Link to Student</FormLabel>
                        <FormControl>
                        {/* In a real app, this would be a searchable dropdown */}
                        <Input placeholder="Enter Student ID" {...field} />
                        </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="relationship"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Relationship</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a relationship" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Father">Father</SelectItem>
                            <SelectItem value="Mother">Mother</SelectItem>
                            <SelectItem value="Sponsor">Sponsor</SelectItem>
                            <SelectItem value="Guardian">Guardian</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
        </div>
        <Button type="submit">Add Guardian</Button>
      </form>
    </Form>
  )
}

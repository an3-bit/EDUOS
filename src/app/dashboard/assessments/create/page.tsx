
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { X, PlusCircle } from "lucide-react"

const subjectSchema = z.object({
    subject: z.string().min(1, "Subject name is required."),
    teacher: z.string().min(1, "Teacher is required."),
    maxScore: z.coerce.number().positive("Max score must be positive."),
});

const examFormSchema = z.object({
  name: z.string().min(1, { message: "Exam name is required." }),
  term: z.string().min(1, { message: "Term is required." }),
  year: z.coerce.number().min(2000, "Year must be valid."),
  classLevel: z.string().min(1, { message: "Class Level is required." }),
  stream: z.string().optional(),
  subjects: z.array(subjectSchema).min(1, "At least one subject is required."),
})

type ExamFormValues = z.infer<typeof examFormSchema>

export default function CreateExamPage() {
    const router = useRouter();
  const form = useForm<ExamFormValues>({
    resolver: zodResolver(examFormSchema),
    defaultValues: {
        name: "",
        term: "",
        year: new Date().getFullYear(),
        classLevel: "",
        subjects: [{ subject: "", teacher: "", maxScore: 100 }]
    },
    mode: "onChange",
  })

   const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "subjects"
  });

  function onSubmit(data: ExamFormValues) {
    toast({
      title: "Exam Created Successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    router.push("/dashboard/assessments");
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Create New Exam</CardTitle>
            <CardDescription>Fill in the details to create a new exam for your institution.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-3 gap-4">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Exam Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. End of Term 1 Exams" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="term"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Term</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a term" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Term 1">Term 1</SelectItem>
                                <SelectItem value="Term 2">Term 2</SelectItem>
                                <SelectItem value="Term 3">Term 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Year</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="e.g. 2024" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                 <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="classLevel"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Class Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a class level" />
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
                            <FormControl>
                                <Input placeholder="e.g. A, B, C (Optional)" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                 </div>

                <div>
                    <h3 className="text-lg font-medium mb-4">Subject Assignments</h3>
                     {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 p-4 border rounded-md relative">
                             <FormField
                                control={form.control}
                                name={`subjects.${index}.subject`}
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Mathematics" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                             <FormField
                                control={form.control}
                                name={`subjects.${index}.teacher`}
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Teacher</FormLabel>
                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Assign a teacher" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        <SelectItem value="Mr. Smith">Mr. Smith</SelectItem>
                                        <SelectItem value="Ms. Jones">Ms. Jones</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            <FormField
                                control={form.control}
                                name={`subjects.${index}.maxScore`}
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Max Score</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="e.g. 100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Button type="button" variant="destructive" size="icon" className="absolute top-2 right-2" onClick={() => remove(index)}>
                                    <X className="h-4 w-4" />
                                </Button>
                        </div>
                     ))}
                     <Button type="button" variant="outline" size="sm" onClick={() => append({ subject: "", teacher: "", maxScore: 100 })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Subject
                    </Button>
                </div>
                <CardFooter className="px-0">
                    <Button type="submit">Save Exam</Button>
                    <Button variant="ghost" onClick={() => router.back()}>Cancel</Button>
                </CardFooter>
            </form>
            </Form>
        </CardContent>
    </Card>
  )
}

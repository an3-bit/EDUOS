
"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Lightbulb, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useData } from "@/context/DataContext";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SubjectForm } from "./components/subject-form";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function SubjectsDashboardPage() {
    const { subjectAnalytics } = useData();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Subjects Dashboard</h2>
                    <p className="text-muted-foreground">
                        Manage subjects, assignments, and curriculum analytics.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" /> Add Subject
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[480px]">
                            <DialogHeader>
                                <DialogTitle>Add New Subject</DialogTitle>
                                <DialogDescription>
                                    Fill in the details below to add a new subject.
                                </DialogDescription>
                            </DialogHeader>
                            <SubjectForm />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="lg:col-span-1 rounded-2xl bg-white dark:bg-primary/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Lightbulb /> AI Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-sm mb-1">Difficult Subjects</h4>
                            <ul className="list-disc list-inside text-muted-foreground text-sm">
                                {subjectAnalytics.difficult_subjects?.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-1 text-destructive flex items-center gap-1"><AlertTriangle size={16}/> Subjects With No Teachers</h4>
                            <ul className="list-disc list-inside text-muted-foreground text-sm">
                                {subjectAnalytics.subjects_with_no_teachers?.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 rounded-2xl bg-white dark:bg-primary/10">
                    <CardHeader>
                        <CardTitle>Popular Subjects</CardTitle>
                        <CardDescription>Enrollment distribution across different subjects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={subjectAnalytics.popular_subjects} dataKey="enrollment" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                                    {subjectAnalytics.popular_subjects?.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="lg:col-span-2 rounded-2xl bg-white dark:bg-primary/10">
                    <CardHeader>
                        <CardTitle>Teacher Subject Loads</CardTitle>
                        <CardDescription>Number of subjects assigned to each teacher.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={subjectAnalytics.teacher_subject_loads} layout="vertical" margin={{ left: 20 }}>
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" width={100} />
                                <Tooltip />
                                <Bar dataKey="subjects" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-1 rounded-2xl bg-white dark:bg-primary/10">
                    <CardHeader>
                        <CardTitle>Subject Coverage</CardTitle>
                        <CardDescription>Syllabus completion rate per subject.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {subjectAnalytics.coverage_percentages?.map((subject, index) => (
                             <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">{subject.name}</span>
                                    <span className="text-sm text-muted-foreground">{subject.coverage}%</span>
                                </div>
                                <Progress value={subject.coverage} />
                             </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


"use client"

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getExamDetails, getStreamStudents, getExamSubjects, submitStudentScore } from '@/api';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BrainCircuit, Calculator } from 'lucide-react';
import { studentScoreSchema } from '@/app/dashboard/assessments/data/schema';

type ScoreFormValues = {
    scores: z.infer<typeof studentScoreSchema>[];
}

interface ScoreEntryPageProps {
  params: {
    examId: string;
  };
}

export default function ScoreEntryPage({ params }: ScoreEntryPageProps) {
    const { examId } = params;
    const { toast } = useToast();
    const [exam, setExam] = useState<any>(null);
    const [students, setStudents] = useState<any[]>([]);
    const [subjects, setSubjects] = useState<any[]>([]);

    const form = useForm<ScoreFormValues>();

    useEffect(() => {
        async function fetchData() {
            const examDetailsResponse = await getExamDetails(examId);
            if (examDetailsResponse.data) {
                setExam(examDetailsResponse.data);
                // Assuming stream id is available in exam details
                const studentsResponse = await getStreamStudents(examDetailsResponse.data.streamId);
                setStudents(studentsResponse.data.results || []);

                const subjectsResponse = await getExamSubjects(/* filter by exam id if possible */);
                setSubjects(subjectsResponse.data.results || []);
            }
        }
        fetchData();
    }, [examId]);

    const onSubmit = async (data: ScoreFormValues) => {
        try {
            // This is a simplified submission. In a real app, you'd likely submit score by score or in a more structured batch.
            await Promise.all(data.scores.map(score => submitStudentScore(score)));
            toast({ title: 'Scores submitted successfully!' });
        } catch (error) {
            toast({ title: 'Error submitting scores', variant: 'destructive' });
        }
    };

    if (!exam) return <div>Loading exam details...</div>;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Score Entry for: {exam.name}</CardTitle>
                <CardDescription>Enter scores for each student in the subjects below.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student Name</TableHead>
                                {subjects.map(subject => (
                                    <TableHead key={subject.id}>{subject.name}</TableHead>
                                ))}
                                <TableHead>Grade</TableHead>
                                <TableHead>Remarks</TableHead>
                                <TableHead>Position</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map((student, studentIndex) => (
                                <TableRow key={student.id}>
                                    <TableCell>{student.name}</TableCell>
                                    {subjects.map((subject, subjectIndex) => (
                                        <TableCell key={subject.id}>
                                            <Input
                                                type="number"
                                                {...form.register(`scores.${studentIndex * subjects.length + subjectIndex}.score`)}
                                            />
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Input readOnly placeholder="auto" />
                                    </TableCell>
                                    <TableCell>
                                        <Input readOnly placeholder="auto" />
                                    </TableCell>
                                    <TableCell>
                                         <Input readOnly placeholder="auto" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">
                    <BrainCircuit className="mr-2 h-4 w-4" /> Auto Grade
                </Button>
                <Button variant="outline">
                    <Calculator className="mr-2 h-4 w-4" /> Recalculate Rankings
                </Button>
                <Button onClick={form.handleSubmit(onSubmit)}>💾 Submit Scores</Button>
            </CardFooter>
        </Card>
    );
}

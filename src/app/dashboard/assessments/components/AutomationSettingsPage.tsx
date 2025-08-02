
"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const recurringTasks = [
    { id: 1, name: 'Weekly Math Quiz', status: 'Completed', lastRun: '2 days ago', nextRun: '5 days from now' },
    { id: 2, name: 'Monthly Science Test', status: 'Pending', lastRun: 'N/A', nextRun: '15 days from now' },
];

const missingScores = [
    { id: 1, teacher: 'Mr. Smith', subject: 'Physics', exam: 'Mid-Term' },
    { id: 2, teacher: 'Ms. Jones', subject: 'History', exam: 'Mid-Term' },
];

const AutomationSettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recurring Exam Rules</CardTitle>
          <CardDescription>Set up automated, recurring exams and quizzes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>+ Add New Rule</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
          <CardDescription>Monitor the status of your automated tasks.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Task Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Run</TableHead>
                        <TableHead>Next Run</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recurringTasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>{task.lastRun}</TableCell>
                            <TableCell>{task.nextRun}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Teacher Score Monitoring</CardTitle>
          <CardDescription>View which teachers have outstanding score entries.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Exam</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {missingScores.map((entry) => (
                        <TableRow key={entry.id}>
                            <TableCell>{entry.teacher}</TableCell>
                            <TableCell>{entry.subject}</TableCell>
                            <TableCell>{entry.exam}</TableCell>
                            <TableCell>
                                <Button variant="secondary" size="sm">Remind Teacher</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomationSettingsPage;

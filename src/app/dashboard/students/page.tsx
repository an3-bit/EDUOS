import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/students/components/columns';
import { DataTable } from '@/app/dashboard/students/components/data-table';
import { studentSchema } from '@/app/dashboard/students/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { StudentForm } from './components/student-form';
import { getStudents } from '@/api'; // Import getStudents from the API service

// Simulate a database read for tasks.
// async function getStudents() {
//   // In a real app, you'd fetch this from a database.
//   // For now, we'll return an empty array since we don't have a backend.
//   return z.array(studentSchema).parse([]);
// }

export default async function StudentManagementPage() {
  const students = await getStudents(); // Use the API service function

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all the students in your institution.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new student.
                </DialogDescription>
              </DialogHeader>
              <StudentForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={students.data} columns={columns} /> {/* Access data from the axios response */}
      </div>
    </>
  );
}

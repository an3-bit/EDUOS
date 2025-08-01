
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/teachers/components/columns';
import { DataTable } from '@/app/dashboard/teachers/components/data-table';
import { teacherSchema } from '@/app/dashboard/teachers/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TeacherForm } from './components/teacher-form';
import { getTeachers } from '@/api'; // Import getTeachers from the API service

// Simulate a database read for tasks.
// async function getTeachers() {
//   // In a real app, you'd fetch this from a database.
//   // For now, we'll return an empty array since we don't have a backend.
//   return z.array(teacherSchema).parse([]);
// }

export default async function TeacherManagementPage() {
  let teachers = [];
  try {
    const teachersResponse = await getTeachers(); // Use the API service function
    teachers = teachersResponse.data; // Access the data from the axios response
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
  }

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Teacher Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all the teachers in your institution.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Teacher
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Teacher</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new teacher.
                </DialogDescription>
              </DialogHeader>
              <TeacherForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={teachers} columns={columns} />
      </div>
    </>
  );
}

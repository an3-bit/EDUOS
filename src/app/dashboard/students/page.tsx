
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
import { getStudents } from '@/api';

async function getStudentsData() {
  const studentsResponse = await getStudents();
  if (studentsResponse && studentsResponse.data && Array.isArray(studentsResponse.data.results)) {
    return z.array(studentSchema).parse(studentsResponse.data.results);
  }
  return [];
}

export default async function StudentManagementPage() {
  const students = await getStudentsData();

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
        <DataTable data={students} columns={columns} />
      </div>
    </>
  );
}


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
import { getTeachers } from '@/api';

async function getTeachersData() {
    const teachersResponse = await getTeachers();
    if (teachersResponse && teachersResponse.data) {
        return z.array(teacherSchema).parse(teachersResponse.data);
    }
    return [];
}

export default async function TeacherManagementPage() {
  const teachers = await getTeachersData();

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

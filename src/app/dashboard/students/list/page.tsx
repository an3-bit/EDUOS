
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { columns } from '@/app/dashboard/students/components/columns';
import { DataTable } from '@/app/dashboard/students/components/data-table';
import { studentSchema } from '@/app/dashboard/students/data/schema';
import { Button } from '@/components/ui/button';

function getMockStudents() {
  return [
    { id: '1', admission_number: 'STU-001', first_name: 'John', last_name: 'Doe', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Active', date_of_birth: new Date() },
    { id: '2', admission_number: 'STU-002', first_name: 'Jane', last_name: 'Smith', gender: 'Female', class_level: 'Grade 4', enrollment_status: 'Active', date_of_birth: new Date() },
    { id: '3', admission_number: 'STU-003', first_name: 'Peter', last_name: 'Jones', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Suspended', date_of_birth: new Date() },
  ];
}


export default async function StudentManagementPage() {
  const students = z.array(studentSchema).parse(getMockStudents());

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
            <Link href="/dashboard/students/create">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Student
              </Button>
            </Link>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={students} columns={columns} />
      </div>
    </>
  );
}

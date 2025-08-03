
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { columns } from '@/app/dashboard/teachers/components/columns';
import { DataTable } from '@/app/dashboard/teachers/components/data-table';
import { teacherSchema } from '@/app/dashboard/teachers/data/schema';
import { Button } from '@/components/ui/button';

// Mock function to get teacher data
function getMockTeachers() {
  return [
    { id: '1', staff_id: 'TCH-001', first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone_number: '123-456-7890', job_title: 'Lead Math Teacher', is_active: true, gender: 'Male', employment_type: 'Full-time' },
    { id: '2', staff_id: 'TCH-002', first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', phone_number: '098-765-4321', job_title: 'History Teacher', is_active: false, gender: 'Female', employment_type: 'Full-time' },
  ];
}

export default async function TeacherListPage() {
  const teachers = z.array(teacherSchema).parse(getMockTeachers());

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
            <Link href="/dashboard/teachers/create">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Teacher
              </Button>
            </Link>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={teachers} columns={columns} />
      </div>
    </>
  );
}

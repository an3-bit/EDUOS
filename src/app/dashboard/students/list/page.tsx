
"use client";

import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { columns } from '@/app/dashboard/students/components/columns';
import { DataTable } from '@/app/dashboard/students/components/data-table';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';

export default function StudentManagementPage() {
  const { students } = useData();

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


"use client";

import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { columns } from '@/app/dashboard/teachers/components/columns';
import { DataTable } from '@/app/dashboard/teachers/components/data-table';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';

export default function TeacherListPage() {
  const { teachers } = useData();

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

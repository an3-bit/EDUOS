
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/timetable/components/columns';
import { DataTable } from '@/app/dashboard/timetable/components/data-table';
import { timetableSchema } from '@/app/dashboard/timetable/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TimetableForm } from './components/timetable-form';
import { getTimetable } from '@/api';

async function getTimetableEntries() {
  const response = await getTimetable();
  if (response && response.data && Array.isArray(response.data.results)) {
    return z.array(timetableSchema).parse(response.data.results);
  }
  return [];
}

export default async function TimetableManagementPage() {
  const timetableEntries = await getTimetableEntries();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Timetable Management</h2>
          <p className="text-muted-foreground">
            Create, view, and manage class and exam timetables.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Schedule</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new schedule to the timetable.
                </DialogDescription>
              </DialogHeader>
              <TimetableForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={timetableEntries} columns={columns} />
      </div>
    </>
  );
}

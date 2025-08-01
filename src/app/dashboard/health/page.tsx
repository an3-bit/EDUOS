
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/health/components/columns';
import { DataTable } from '@/app/dashboard/health/components/data-table';
import { healthRecordSchema } from '@/app/dashboard/health/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HealthRecordForm } from './components/health-record-form';
import { getMedicalRecords } from '@/api';

async function getHealthRecords() {
  const response = await getMedicalRecords();
  if (response && response.data) {
    return z.array(healthRecordSchema).parse(response.data);
  }
  return [];
}

export default async function HealthManagementPage() {
  const healthRecords = await getHealthRecords();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Medical & Health</h2>
          <p className="text-muted-foreground">
            Manage student health records and medical incidents.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Record
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Health Record</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new health record.
                </DialogDescription>
              </DialogHeader>
              <HealthRecordForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={healthRecords} columns={columns} />
      </div>
    </>
  );
}

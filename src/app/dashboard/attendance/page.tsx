
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/attendance/components/columns';
import { DataTable } from '@/app/dashboard/attendance/components/data-table';
import { attendanceSchema } from '@/app/dashboard/attendance/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AttendanceForm } from './components/attendance-form';
import { getSchoolAttendanceRecords } from '@/api';
import AttendanceDashboard from '@/app/dashboard/attendance/components/AttendanceDashboard';

async function getAttendanceRecords() {
    const attendanceRecordsResponse = await getSchoolAttendanceRecords();
    if (attendanceRecordsResponse && attendanceRecordsResponse.data) {
        return z.array(attendanceSchema).parse(attendanceRecordsResponse.data);
    }
    return [];
}

export default async function AttendanceManagementPage() {
  const attendanceRecords = await getAttendanceRecords();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Attendance Management</h2>
          <p className="text-muted-foreground">
            Track and manage student attendance.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Mark Attendance
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Mark Attendance</DialogTitle>
                <DialogDescription>
                  Fill in the details below to mark attendance.
                </DialogDescription>
              </DialogHeader>
              <AttendanceForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <AttendanceDashboard />
        <DataTable data={attendanceRecords} columns={columns} />
      </div>
    </>
  );
}

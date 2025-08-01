
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/events/components/columns';
import { DataTable } from '@/app/dashboard/events/components/data-table';
import { eventSchema } from '@/app/dashboard/events/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EventForm } from './components/event-form';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { getEvents } from '@/api';

async function getEventsData() {
  const response = await getEvents();
  if (response && response.data) {
    return z.array(eventSchema).parse(response.data);
  }
  return [];
}

export default async function EventsManagementPage() {
  const events = await getEventsData();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Events & Calendar</h2>
          <p className="text-muted-foreground">
            Manage school events, holidays, and important dates.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new event.
                </DialogDescription>
              </DialogHeader>
              <EventForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2">
            <CardContent className="p-4">
                <DataTable data={events} columns={columns} />
            </CardContent>
        </Card>
        <Card>
             <CardContent className="p-0">
                <Calendar
                    mode="single"
                    className="p-0"
                    classNames={{
                        head_cell: 'w-full',
                        cell: 'w-full',
                        row: 'w-full flex',
                    }}
                />
            </CardContent>
        </Card>
      </div>
    </>
  );
}

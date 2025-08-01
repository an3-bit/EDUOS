
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/hostel/components/columns';
import { DataTable } from '@/app/dashboard/hostel/components/data-table';
import { roomSchema } from '@/app/dashboard/hostel/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RoomForm } from './components/room-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getHostelRooms } from '@/api';

async function getRooms() {
  const response = await getHostelRooms();
  if (response && response.data && Array.isArray(response.data.results)) {
    return z.array(roomSchema).parse(response.data.results);
  }
  return [];
}

export default async function HostelManagementPage() {
  const rooms = await getRooms();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Hostel Management</h2>
          <p className="text-muted-foreground">
            Manage hostel rooms, allocation, and related activities.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Room
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Room</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new room.
                </DialogDescription>
              </DialogHeader>
              <RoomForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="rooms">
            <TabsList>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="allocation">Allocation</TabsTrigger>
                <TabsTrigger value="violations">Violations</TabsTrigger>
            </TabsList>
            <TabsContent value="rooms">
                 <DataTable data={rooms} columns={columns} />
            </TabsContent>
            <TabsContent value="allocation">
                <p className="text-muted-foreground p-4">Room allocations will be displayed here.</p>
            </TabsContent>
            <TabsContent value="violations">
                 <p className="text-muted-foreground p-4">Violations will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}


import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/transport/components/columns';
import { DataTable } from '@/app/dashboard/transport/components/data-table';
import { vehicleSchema } from '@/app/dashboard/transport/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VehicleForm } from './components/vehicle-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


// Simulate a database read for vehicles.
async function getVehicles() {
  // In a real app, you'd fetch this from a database.
  return z.array(vehicleSchema).parse([]);
}

export default async function TransportManagementPage() {
  const vehicles = await getVehicles();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Transport Management</h2>
          <p className="text-muted-foreground">
            Manage transport routes, vehicles, and student transport details.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Vehicle</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new vehicle.
                </DialogDescription>
              </DialogHeader>
              <VehicleForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="vehicles">
            <TabsList>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="routes">Routes</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
            </TabsList>
            <TabsContent value="vehicles">
                 <DataTable data={vehicles} columns={columns} />
            </TabsContent>
            <TabsContent value="routes">
                <p className="text-muted-foreground p-4">Transport routes will be displayed here.</p>
            </TabsContent>
            <TabsContent value="bookings">
                 <p className="text-muted-foreground p-4">Student bookings will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

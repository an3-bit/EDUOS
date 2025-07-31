
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/academics/components/columns';
import { DataTable } from '@/app/dashboard/academics/components/data-table';
import { classSchema } from '@/app/dashboard/academics/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ClassForm } from './components/class-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getClassLevels, getStreams } from '@/api'; // Import API functions
import ClassLevelManagement from '@/app/dashboard/academics/components/ClassLevelManagement'; // Import ClassLevelManagement
import StreamManagement from '@/app/dashboard/academics/components/StreamManagement'; // Import StreamManagement

// Simulate a database read for classes.
// async function getClasses() {
//   // In a real app, you'd fetch this from a database.
//   return z.array(classSchema).parse([]);
// }

export default async function AcademicsManagementPage() {
  // Fetch data using API functions
  const classLevelsResponse = await getClassLevels();
  const classLevels = classLevelsResponse.data; // Access data from axios response

  const streamsResponse = await getStreams();
  const streams = streamsResponse.data; // Access data from axios response

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Classes & Academics</h2>
          <p className="text-muted-foreground">
            Manage class levels, streams, and the promotion system.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Class
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Class</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new class.
                </DialogDescription>
              </DialogHeader>
              <ClassForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="class-levels">
            <TabsList>
                <TabsTrigger value="class-levels">Class Levels</TabsTrigger>
                <TabsTrigger value="streams">Streams</TabsTrigger>
                {/* Add triggers for other functionalities like promotions, analytics */}
            </TabsList>
            <TabsContent value="class-levels">
                <ClassLevelManagement classLevels={classLevels} /> {/* Include ClassLevelManagement */}
            </TabsContent>
            <TabsContent value="streams">
                 <StreamManagement streams={streams} /> {/* Include StreamManagement */}
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}


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
import ClassLevelManagement from '@/app/dashboard/academics/components/ClassLevelManagement';
import StreamManagement from '@/app/dashboard/academics/components/StreamManagement';

async function getClasses() {
  return z.array(classSchema).parse([]);
}

export default async function AcademicsManagementPage() {
  let classLevels: any[] = [];
  let streams: any[] = [];
  try {
    // const classLevelsResponse = await getClassLevels();
    // classLevels = classLevelsResponse.data; 

    // const streamsResponse = await getStreams();
    // streams = streamsResponse.data;
  } catch (error) {
    console.error("Failed to fetch academics data:", error);
  }
  
  const classes = await getClasses();


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
        <Tabs defaultValue="classes">
            <TabsList>
                <TabsTrigger value="classes">Classes</TabsTrigger>
                <TabsTrigger value="class-levels">Class Levels</TabsTrigger>
                <TabsTrigger value="streams">Streams</TabsTrigger>
            </TabsList>
            <TabsContent value="classes">
                 <DataTable data={classes} columns={columns} />
            </TabsContent>
            <TabsContent value="class-levels">
                <ClassLevelManagement classLevels={classLevels} />
            </TabsContent>
            <TabsContent value="streams">
                 <StreamManagement streams={streams} />
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

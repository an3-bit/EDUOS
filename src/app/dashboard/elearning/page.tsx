
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/elearning/components/columns';
import { DataTable } from '@/app/dashboard/elearning/components/data-table';
import { courseSchema } from '@/app/dashboard/elearning/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CourseForm } from './components/course-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCourses, getAssignments, getLiveClassSessions } from '@/api'; // Import API functions
import CourseCatalog from '@/app/dashboard/elearning/components/CourseCatalog'; // Import CourseCatalog

// Simulate a database read for courses.
// async function getCourses() {
//   // In a real app, you'd fetch this from a database.
//   return z.array(courseSchema).parse([]);
// }

export default async function ElearningManagementPage() {
  // Fetch data using API functions
  const coursesResponse = await getCourses();
  const courses = coursesResponse.data; // Access data from axios response

  const assignmentsResponse = await getAssignments();
  const assignments = assignmentsResponse.data; // Access data from axios response

  const liveClassesResponse = await getLiveClassSessions();
  const liveClasses = liveClassesResponse.data; // Access data from axios response

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">E-Learning Management</h2>
          <p className="text-muted-foreground">
            Manage courses, lessons, assignments, and live classes.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new course.
                </DialogDescription>
              </DialogHeader>
              <CourseForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="courses">
            <TabsList>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="live-classes">Live Classes</TabsTrigger>
            </TabsList>
            <TabsContent value="courses">
                 <CourseCatalog courses={courses} /> {/* Include CourseCatalog */}
            </TabsContent>
            <TabsContent value="lessons">
                {/* TODO: Integrate CoursePlayer or a lessons list component */}
                <p className="text-muted-foreground p-4">Lessons will be displayed here.</p>
            </TabsContent>
            <TabsContent value="assignments">
                 {/* TODO: Integrate AssignmentManager or display assignments directly */}
                 <DataTable data={assignments} columns={columns} /> {/* Using existing DataTable for now */}
            </TabsContent>
            <TabsContent value="live-classes">
                 {/* TODO: Integrate LiveClasses component or display live sessions */}
                 <DataTable data={liveClasses} columns={columns} /> {/* Using existing DataTable for now */}
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

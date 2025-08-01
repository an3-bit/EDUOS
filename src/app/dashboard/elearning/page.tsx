
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
import { getCourses, getAssignments, getLiveClassSessions } from '@/api';
import CourseCatalog from '@/app/dashboard/elearning/components/CourseCatalog';
import AssignmentManager from './components/AssignmentManager';
import LiveClasses from './components/LiveClasses';

async function getCoursesData() {
  try {
    const response = await getCourses();
    return z.array(courseSchema).parse(response.data);
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
}

export default async function ElearningManagementPage() {
  let assignments: any[] = [];
  let liveClasses: any[] = [];

  try {
    const assignmentsResponse = await getAssignments();
    assignments = assignmentsResponse.data;

    const liveClassesResponse = await getLiveClassSessions();
    liveClasses = liveClassesResponse.data;
  } catch (error) {
    console.error("Failed to fetch e-learning data:", error);
  }

  const courseData = await getCoursesData();

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
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="live-classes">Live Classes</TabsTrigger>
            </TabsList>
            <TabsContent value="courses">
                 <CourseCatalog courses={courseData} />
            </TabsContent>
            <TabsContent value="assignments">
                 <AssignmentManager assignments={assignments} />
            </TabsContent>
            <TabsContent value="live-classes">
                <LiveClasses liveClasses={liveClasses} />
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

    
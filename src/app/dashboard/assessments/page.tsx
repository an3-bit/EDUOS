
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/assessments/components/columns';
import { DataTable } from '@/app/dashboard/assessments/components/data-table';
import { assessmentSchema } from '@/app/dashboard/assessments/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AssessmentForm } from './components/assessment-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAssignments } from '@/api';

async function getAssessments() {
  try {
    const response = await getAssignments();
    return z.array(assessmentSchema).parse(response.data);
  } catch (error) {
    console.error("Failed to fetch assessments:", error);
    return [];
  }
}

export default async function AssessmentsManagementPage() {
  const assessments = await getAssessments();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Assessments & Exams</h2>
          <p className="text-muted-foreground">
            Manage exams, grades, and student assessments.
          </p>
        </div>
         <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Assessment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Assessment</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new assessment.
                </DialogDescription>
              </DialogHeader>
              <AssessmentForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
       <div className="mt-6">
        <Tabs defaultValue="assessments">
            <TabsList>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="grading">Grading</TabsTrigger>
                 <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="assessments">
                 <DataTable data={assessments} columns={columns} />
            </TabsContent>
            <TabsContent value="grading">
                <p className="text-muted-foreground p-4">Grading module will be displayed here.</p>
            </TabsContent>
             <TabsContent value="reports">
                <p className="text-muted-foreground p-4">Reports module will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}


import { z } from 'zod';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { columns } from '@/app/dashboard/assessments/components/columns';
import { DataTable } from '@/app/dashboard/assessments/components/data-table';
import { examSchema } from '@/app/dashboard/assessments/data/schema';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getExams } from '@/api';
import AnalyticsPage from '@/app/dashboard/assessments/components/AnalyticsPage';
import ArchivesPage from '@/app/dashboard/assessments/components/ArchivesPage';
import AIPredictionsPage from '@/app/dashboard/assessments/components/AIPredictionsPage';
import AutomationSettingsPage from '@/app/dashboard/assessments/components/AutomationSettingsPage';

async function getExamsData() {
  const response = await getExams();
  if (response && response.data && Array.isArray(response.data.results)) {
    return z.array(examSchema).parse(response.data.results);
  }
  return [];
}

export default async function ExamsManagementPage() {
  const exams = await getExamsData();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Exams & Assessments</h2>
          <p className="text-muted-foreground">
            Manage the full academic examination lifecycle.
          </p>
        </div>
         <div className="flex items-center space-x-2">
          <Link href="/dashboard/assessments/create">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Create Exam
            </Button>
          </Link>
        </div>
      </div>
       <div className="mt-6">
        <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics & Insights</TabsTrigger>
                <TabsTrigger value="archives">Archives</TabsTrigger>
                <TabsTrigger value="ai-predictions">AI Predictions</TabsTrigger>
                <TabsTrigger value="automation">Automations</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                 <DataTable data={exams} columns={columns} />
            </TabsContent>
            <TabsContent value="analytics">
                <AnalyticsPage />
            </TabsContent>
             <TabsContent value="archives">
                <ArchivesPage />
            </TabsContent>
            <TabsContent value="ai-predictions">
                <AIPredictionsPage />
            </TabsContent>
            <TabsContent value="automation">
                <AutomationSettingsPage />
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

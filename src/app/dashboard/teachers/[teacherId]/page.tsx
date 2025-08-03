
"use client";

import TeacherProfileDetails from '@/app/dashboard/teachers/components/TeacherProfileDetails';
import TeacherAssignments from '@/app/dashboard/teachers/components/TeacherAssignments';
import TeacherPerformance from '@/app/dashboard/teachers/components/TeacherPerformance';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useData } from '@/context/DataContext';
import { useParams } from 'next/navigation';
import { User, ClipboardCheck, Briefcase, Phone } from 'lucide-react';

export default function TeacherProfilePage() {
  const params = useParams();
  const { teacherId } = params;
  const { teachers } = useData();
  
  const teacher = teachers.find(t => t.id === teacherId);

  if (!teacher) {
    return <div>Teacher not found or failed to load.</div>;
  }

  return (
     <div className="space-y-6">
       <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24 border">
                <AvatarImage src={"https://placehold.co/100x100.png"} data-ai-hint="person professor" />
                <AvatarFallback>{teacher.first_name?.[0]}{teacher.last_name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-3xl font-bold">{teacher.first_name} {teacher.last_name}</h1>
                <p className="text-muted-foreground">{teacher.job_title} | {teacher.staff_id}</p>
                <div className="mt-2 flex gap-2">
                    <Button>Edit Profile</Button>
                    <Button variant="outline">View Timetable</Button>
                </div>
            </div>
        </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview"><User className="mr-2 h-4 w-4"/>Overview</TabsTrigger>
          <TabsTrigger value="assignments"><ClipboardCheck className="mr-2 h-4 w-4"/>Assignments</TabsTrigger>
          <TabsTrigger value="performance"><Briefcase className="mr-2 h-4 w-4"/>Performance</TabsTrigger>
          <TabsTrigger value="contact"><Phone className="mr-2 h-4 w-4"/>Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
            <TeacherProfileDetails teacher={teacher} />
        </TabsContent>
        <TabsContent value="assignments">
            <TeacherAssignments teacherId={teacher.id} />
        </TabsContent>
        <TabsContent value="performance">
            <TeacherPerformance teacherId={teacher.id} />
        </TabsContent>
         <TabsContent value="contact">
            <p>Contact details and emergency contacts will be shown here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

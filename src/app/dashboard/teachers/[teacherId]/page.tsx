
import { getTeacherProfile } from '@/api';
import TeacherProfileDetails from '@/app/dashboard/teachers/components/TeacherProfileDetails';
import TeacherAssignments from '@/app/dashboard/teachers/components/TeacherAssignments';
import TeacherSchedule from '@/app/dashboard/teachers/components/TeacherSchedule';
import TeacherPerformance from '@/app/dashboard/teachers/components/TeacherPerformance';
import TeacherDocuments from '@/app/dashboard/teachers/components/TeacherDocuments';
import TeacherLeave from '@/app/dashboard/teachers/components/TeacherLeave';
import { Teacher } from '@/app/dashboard/teachers/data/schema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, ClipboardCheck, Briefcase, Phone } from 'lucide-react';


interface TeacherProfilePageProps {
  params: {
    teacherId: string;
  };
}

// Mock function
async function getTeacher(id: string): Promise<Teacher | null> {
    const mockTeacher = { 
        id: '1', 
        staff_id: 'TCH-001', 
        first_name: 'John', 
        last_name: 'Doe', 
        email: 'john.doe@example.com', 
        phone_number: '123-456-7890', 
        job_title: 'Lead Math Teacher', 
        is_active: true, 
        gender: 'Male' as 'Male', 
        employment_type: 'Full-time' as 'Full-time',
        subjects_taught: ['Mathematics', 'Physics'],
        bio: 'An experienced mathematics teacher with a passion for helping students excel.'
    };
    if (id === mockTeacher.id) {
        return mockTeacher;
    }
    return null;
}


export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { teacherId } = params;
  
  const teacher = await getTeacher(teacherId);

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
            <TeacherAssignments teacherId={teacherId} />
        </TabsContent>
        <TabsContent value="performance">
            <TeacherPerformance teacherId={teacherId} />
        </TabsContent>
         <TabsContent value="contact">
            <p>Contact details and emergency contacts will be shown here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

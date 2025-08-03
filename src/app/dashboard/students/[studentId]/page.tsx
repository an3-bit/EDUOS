

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Student } from "@/types";
import { BrainCircuit, FileText, HeartPulse, History, Shield, User } from "lucide-react";
import AcademicSnapshot from "../components/AcademicSnapshot";
import GuardianRelationships from "../components/GuardianRelationships";
import MedicalFlags from "../components/MedicalFlags";
import StudentDocuments from "../components/StudentDocuments";
import StudentHistory from "../components/StudentHistory";
import StudentProfileDetails from "../components/StudentProfileDetails";
import AiInsights from "../components/AiInsights";

interface StudentProfilePageProps {
  params: {
    studentId: string;
  };
}

// Mock function to get student data
async function getStudent(id: string): Promise<Student | null> {
    console.log(`Fetching student with id: ${id}`);
    // In a real app, you would fetch this from your API
    const mockStudent = {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        middle_name: 'Quincy',
        admission_number: 'STU-001',
        date_of_birth: '2010-05-15',
        gender: 'Male',
        class_level: 'Grade 5',
        stream: 'A',
        enrollment_status: 'Active',
    };
    if (id === mockStudent.id) {
        return mockStudent as Student;
    }
    return null;
}


export default async function StudentProfilePage({ params }: StudentProfilePageProps) {
  const { studentId } = params;

  const student = await getStudent(studentId);

  if (!student) {
    return <div>Student not found or failed to load.</div>;
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24 border">
                <AvatarImage src={student.photo || "https://placehold.co/100x100.png"}  data-ai-hint="person student"/>
                <AvatarFallback>{student.first_name?.[0]}{student.last_name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-3xl font-bold">{student.first_name} {student.last_name}</h1>
                <p className="text-muted-foreground">{student.admission_number} | {student.class_level} - {student.stream}</p>
                <div className="mt-2 flex gap-2">
                    <Button>Edit Profile</Button>
                    <Button variant="outline">Promote</Button>
                </div>
            </div>
        </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview"><User className="mr-2 h-4 w-4"/>Overview</TabsTrigger>
          <TabsTrigger value="ai-insights"><BrainCircuit className="mr-2 h-4 w-4"/>AI Insights</TabsTrigger>
          <TabsTrigger value="history"><History className="mr-2 h-4 w-4"/>History</TabsTrigger>
          <TabsTrigger value="documents"><FileText className="mr-2 h-4 w-4"/>Documents</TabsTrigger>
          <TabsTrigger value="health"><HeartPulse className="mr-2 h-4 w-4"/>Health</TabsTrigger>
          <TabsTrigger value="guardians"><Shield className="mr-2 h-4 w-4"/>Guardians</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StudentProfileDetails student={student} />
                <AcademicSnapshot studentId={studentId} />
            </div>
        </TabsContent>
        <TabsContent value="ai-insights">
            <AiInsights studentId={studentId} />
        </TabsContent>
        <TabsContent value="history">
            <StudentHistory studentId={studentId} />
        </TabsContent>
        <TabsContent value="documents">
            <StudentDocuments studentId={studentId} />
        </TabsContent>
         <TabsContent value="health">
            <MedicalFlags studentId={studentId} />
        </TabsContent>
         <TabsContent value="guardians">
            <GuardianRelationships studentId={studentId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}


"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, FileText, HeartPulse, History, Shield, User } from "lucide-react";
import AcademicSnapshot from "../components/AcademicSnapshot";
import GuardianRelationships from "../components/GuardianRelationships";
import MedicalFlags from "../components/MedicalFlags";
import StudentDocuments from "../components/StudentDocuments";
import StudentHistory from "../components/StudentHistory";
import StudentProfileDetails from "../components/StudentProfileDetails";
import AiInsights from "../components/AiInsights";
import { useData } from "@/context/DataContext";
import { useParams } from "next/navigation";

export default function StudentProfilePage() {
  const params = useParams();
  const { studentId } = params;
  const { students } = useData();

  const student = students.find(s => s.id === studentId);

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
                <AcademicSnapshot studentId={student.id} />
            </div>
        </TabsContent>
        <TabsContent value="ai-insights">
            <AiInsights studentId={student.id} />
        </TabsContent>
        <TabsContent value="history">
            <StudentHistory studentId={student.id} />
        </TabsContent>
        <TabsContent value="documents">
            <StudentDocuments studentId={student.id} />
        </TabsContent>
         <TabsContent value="health">
            <MedicalFlags studentId={student.id} />
        </TabsContent>
         <TabsContent value="guardians">
            <GuardianRelationships studentId={student.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

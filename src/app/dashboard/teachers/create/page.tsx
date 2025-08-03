
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TeacherForm } from "../components/teacher-form";

export default function CreateTeacherPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Teacher</CardTitle>
        <CardDescription>Fill in the details below to add a new teacher.</CardDescription>
      </CardHeader>
      <CardContent>
        <TeacherForm />
      </CardContent>
    </Card>
  );
}

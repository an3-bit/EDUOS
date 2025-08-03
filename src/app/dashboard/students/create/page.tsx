
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentForm } from "../components/student-form";

export default function CreateStudentPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Admission</CardTitle>
        <CardDescription>Fill in the details below to add a new student.</CardDescription>
      </CardHeader>
      <CardContent>
        <StudentForm />
      </CardContent>
    </Card>
  );
}

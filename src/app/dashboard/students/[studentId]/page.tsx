
import { getStudentProfile } from '@/api';
import StudentProfileDetails from '@/app/dashboard/students/components/StudentProfileDetails';
import StudentDocuments from '@/app/dashboard/students/components/StudentDocuments';
import StudentHistory from '@/app/dashboard/students/components/StudentHistory';
import MedicalFlags from '@/app/dashboard/students/components/MedicalFlags';
import AcademicSnapshot from '@/app/dashboard/students/components/AcademicSnapshot';
import GuardianRelationships from '@/app/dashboard/students/components/GuardianRelationships';
import { Student } from '@/types';

interface StudentProfilePageProps {
  params: {
    studentId: string;
  };
}

export default async function StudentProfilePage({ params }: StudentProfilePageProps) {
  const { studentId } = params;

  let student: Student | null = null;
  const studentResponse = await getStudentProfile(studentId);
  if (studentResponse && studentResponse.data) {
    student = studentResponse.data as Student;
  }

  if (!student) {
    return <div>Student not found or failed to load.</div>;
  }

  return (
    <div>
      <h1>Student Profile</h1>
      <StudentProfileDetails student={student} />
      <StudentDocuments studentId={studentId} />
      <StudentHistory studentId={studentId} />
      <MedicalFlags studentId={studentId} />
      <AcademicSnapshot studentId={studentId} />
      <GuardianRelationships studentId={studentId} />
    </div>
  );
}

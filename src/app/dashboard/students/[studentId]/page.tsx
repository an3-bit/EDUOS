import { getStudentProfile } from '@/api'; // Import the API function
import StudentProfileDetails from '@/app/dashboard/students/components/StudentProfileDetails'; // Import the new component
import StudentDocuments from '@/app/dashboard/students/components/StudentDocuments'; // Import StudentDocuments
import StudentHistory from '@/app/dashboard/students/components/StudentHistory'; // Import StudentHistory
import MedicalFlags from '@/app/dashboard/students/components/MedicalFlags'; // Import MedicalFlags
import AcademicSnapshot from '@/app/dashboard/students/components/AcademicSnapshot'; // Import AcademicSnapshot
import GuardianRelationships from '@/app/dashboard/students/components/GuardianRelationships'; // Import GuardianRelationships
import { Student } from '@/types'; // Import the Student interface

interface StudentProfilePageProps {
  params: {
    studentId: string;
  };
}

export default async function StudentProfilePage({ params }: StudentProfilePageProps) {
  const { studentId } = params;

  // Fetch student data using the API function
  const studentResponse = await getStudentProfile(studentId); // Get the full axios response
  const student: Student = studentResponse.data; // Access the data from the response and cast to Student type

  return (
    <div>
      <h1>Student Profile</h1>
      {/* Display student data using the fetched 'student' object */}
      <StudentProfileDetails student={student} /> {/* Use the StudentProfileDetails component */}

      {/* Integrate other student profile components here */}
      <StudentDocuments studentId={studentId} /> {/* Include StudentDocuments */}
      <StudentHistory studentId={studentId} /> {/* Include StudentHistory */}
      <MedicalFlags studentId={studentId} /> {/* Include MedicalFlags */}
      <AcademicSnapshot studentId={studentId} /> {/* Include AcademicSnapshot */}
      <GuardianRelationships studentId={studentId} /> {/* Include GuardianRelationships */}
    </div>
  );
}

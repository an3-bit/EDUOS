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

  let student: Student | null = null;
  try {
    // Fetch student data using the API function
    const studentResponse = await getStudentProfile(studentId); // Get the full axios response
    student = studentResponse.data; // Access the data from the response and cast to Student type
  } catch (error) {
    console.error(`Failed to fetch student profile for ${studentId}:`, error);
  }

  if (!student) {
    return <div>Student not found or failed to load.</div>;
  }

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

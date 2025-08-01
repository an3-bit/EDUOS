
import { getTeacherProfile } from '@/api'; // Import the API function
import TeacherProfileDetails from '@/app/dashboard/teachers/components/TeacherProfileDetails'; // Import the new component
import TeacherAssignments from '@/app/dashboard/teachers/components/TeacherAssignments'; // Import TeacherAssignments
import TeacherSchedule from '@/app/dashboard/teachers/components/TeacherSchedule'; // Import TeacherSchedule
import TeacherPerformance from '@/app/dashboard/teachers/components/TeacherPerformance'; // Import TeacherPerformance
import TeacherDocuments from '@/app/dashboard/teachers/components/TeacherDocuments'; // Import TeacherDocuments
import TeacherLeave from '@/app/dashboard/teachers/components/TeacherLeave'; // Import TeacherLeave
// import { Teacher } from '@/types'; // Import the Teacher interface

interface TeacherProfilePageProps {
  params: {
    teacherId: string;
  };
}

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { teacherId } = params;
  
  let teacher: any = null; // TODO: Replace 'any' with Teacher interface
  try {
    // Fetch teacher data using the API function
    const teacherResponse = await getTeacherProfile(teacherId); // Get the full axios response
    teacher = teacherResponse.data; // Access the data from the response
  } catch (error) {
    console.error(`Failed to fetch teacher profile for ${teacherId}:`, error);
  }

  if (!teacher) {
    return <div>Teacher not found or failed to load.</div>;
  }

  return (
    <div>
      <h1>Teacher Profile</h1>
      {/* Display teacher data using the fetched 'teacher' object */}
      <TeacherProfileDetails teacher={teacher} /> {/* Use the TeacherProfileDetails component */}

      {/* Integrate other teacher profile components here */}
      <TeacherAssignments teacherId={teacherId} /> {/* Include TeacherAssignments */}
      <TeacherSchedule teacherId={teacherId} /> {/* Include TeacherSchedule */}
      <TeacherPerformance teacherId={teacherId} /> {/* Include TeacherPerformance */}
      <TeacherDocuments teacherId={teacherId} /> {/* Include TeacherDocuments */}
      <TeacherLeave teacherId={teacherId} /> {/* Include TeacherLeave */}
    </div>
  );
}

    
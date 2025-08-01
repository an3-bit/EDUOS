
import { getTeacherProfile } from '@/api';
import TeacherProfileDetails from '@/app/dashboard/teachers/components/TeacherProfileDetails';
import TeacherAssignments from '@/app/dashboard/teachers/components/TeacherAssignments';
import TeacherSchedule from '@/app/dashboard/teachers/components/TeacherSchedule';
import TeacherPerformance from '@/app/dashboard/teachers/components/TeacherPerformance';
import TeacherDocuments from '@/app/dashboard/teachers/components/TeacherDocuments';
import TeacherLeave from '@/app/dashboard/teachers/components/TeacherLeave';
// import { Teacher } from '@/types';

interface TeacherProfilePageProps {
  params: {
    teacherId: string;
  };
}

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { teacherId } = params;
  
  let teacher: any = null; // TODO: Replace 'any' with Teacher interface
  const teacherResponse = await getTeacherProfile(teacherId);
  if (teacherResponse && teacherResponse.data) {
      teacher = teacherResponse.data;
  }

  if (!teacher) {
    return <div>Teacher not found or failed to load.</div>;
  }

  return (
    <div>
      <h1>Teacher Profile</h1>
      <TeacherProfileDetails teacher={teacher} />
      <TeacherAssignments teacherId={teacherId} />
      <TeacherSchedule teacherId={teacherId} />
      <TeacherPerformance teacherId={teacherId} />
      <TeacherDocuments teacherId={teacherId} />
      <TeacherLeave teacherId={teacherId} />
    </div>
  );
}

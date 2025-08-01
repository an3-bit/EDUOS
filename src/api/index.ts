import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Student Management APIs
export const getStudents = () => api.get('/students/');
export const getStudentProfile = (studentId: string) => api.get(`/students/${studentId}/`);
export const updateStudentProfile = (studentId: string, data: any) => api.put(`/students/${studentId}/`, data);
export const getStudentDocuments = (studentId: string) => api.get(`/students/${studentId}/documents/`);
export const uploadStudentDocument = (studentId: string, data: FormData) => api.post(`/students/${studentId}/documents/`, data);
export const getStudentHistory = (studentId: string) => api.get(`/students/${studentId}/history/`);
export const getStudentAcademicSnapshots = (studentId: string) => api.get(`/students/${studentId}/academic-snapshots/`);
export const getStudentGuardians = (studentId: string) => api.get(`/students/${studentId}/guardians/`);

// Teacher Management APIs
export const getTeachers = () => api.get('/teachers/');
export const getTeacherProfile = (teacherId: string) => api.get(`/teachers/${teacherId}/`);
export const updateTeacherProfile = (teacherId: string, data: any) => api.put(`/teachers/${teacherId}/`, data);
export const getTeacherAssignments = (teacherId: string) => api.get(`/teachers/${teacherId}/assignments/`);
export const getTeacherSchedule = (teacherId: string) => api.get(`/teachers/${teacherId}/schedule/`);
export const getTeacherPerformance = (teacherId: string) => api.get(`/teachers/${teacherId}/performance/`);
export const getTeacherLeave = (teacherId: string) => api.get(`/teachers/${teacherId}/leave/`);
export const submitLeaveRequest = (teacherId: string, data: any) => api.post(`/teachers/${teacherId}/leave-request/`, data);

// Finance Management APIs
export const getBudgets = () => api.get('/finance/budgets/');
export const createBudget = (data: any) => api.post('/finance/budgets/', data);
export const getIncomeRecords = () => api.get('/finance/income/');
export const recordIncome = (data: any) => api.post('/finance/income/', data);
export const getExpenseRecords = () => api.get('/finance/expenses/');
export const recordExpense = (data: any) => api.post('/finance/expenses/', data);
export const getInvoices = () => api.get('/finance/invoices/');
export const generateInvoice = (data: any) => api.post('/finance/invoices/', data);
export const getPaymentRecords = () => api.get('/finance/payments/');
export const processPayment = (data: any) => api.post('/finance/payments/', data);
export const getStudentWallet = (studentId: string) => api.get(`/finance/wallet/${studentId}/`);
export const performWalletTransaction = (studentId: string, data: any) => api.post(`/finance/wallet/${studentId}/transaction/`, data);
export const getFinancialReports = () => api.get('/finance/reports/');

// Attendance Management APIs
export const getSchoolAttendanceRecords = () => api.get('/attendance/');
export const recordSchoolAttendance = (data: any) => api.post('/attendance/', data);
export const getClassAttendanceRecords = () => api.get('/attendance/class/');
export const recordClassAttendance = (data: any) => api.post('/attendance/class/', data);
export const getStudentAttendance = (studentId: string) => api.get(`/attendance/student/${studentId}/`);
export const getTeacherAttendance = (teacherId: string) => api.get(`/attendance/teacher/${teacherId}/`);
export const getAttendanceReports = () => api.get('/attendance/reports/');
export const getAttendanceSettings = () => api.get('/attendance/settings/');
export const updateAttendanceSettings = (data: any) => api.put('/attendance/settings/', data);

// Classes & Academics Management APIs
export const getClassLevels = () => api.get('/academics/levels/');
export const createClassLevel = (data: any) => api.post('/academics/levels/', data);
export const getStreams = () => api.get('/academics/streams/');
export const createStream = (data: any) => api.post('/academics/streams/', data);
export const getStreamStudents = (streamId: string) => api.get(`/classes/${streamId}/students/`);
export const addStudentToStream = (streamId: string, data: any) => api.post(`/classes/${streamId}/students/`, data);
export const getStreamAnalytics = (streamId: string) => api.get(`/classes/${streamId}/analytics/`);
export const processPromotions = (data: any) => api.post('/academics/promote/', data);

// E-Learning Management APIs
export const getCourses = () => api.get('/e-learning/courses/');
export const getCourseDetails = (id: string) => api.get(`/e-learning/courses/${id}/`);
export const getCourseLessons = (id: string) => api.get(`/e-learning/courses/${id}/lessons/`);
export const getLessonContent = (id: string) => api.get(`/e-learning/lessons/${id}/`);
export const getAssignments = () => api.get('/assessments/');
export const createAssignment = (data: any) => api.post('/assessments/', data);
export const getAssignmentSubmissions = (id: string) => api.get(`/assessments/${id}/submissions/`);
export const submitAssignment = (id: string, data: any) => api.post(`/assessments/${id}/submit/`, data);
export const getLearningProgress = (studentId: string) => api.get(`/e-learning/progress/${studentId}/`);
export const getLiveClassSessions = () => api.get('/e-learning/live-classes/');
export const createLiveClass = (data: any) => api.post('/e-learning/live-classes/', data);

// TODO: Add other module API functions here
```
    </content>
  </change>
  <change>
    <file>src/app/dashboard/students/page.tsx</file>
    <content><![CDATA[
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/students/components/columns';
import { DataTable } from '@/app/dashboard/students/components/data-table';
import { studentSchema } from '@/app/dashboard/students/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { StudentForm } from './components/student-form';
import { getStudents } from '@/api'; // Import getStudents from the API service

// Simulate a database read for tasks.
async function getStudentsData() {
  try {
    const studentsResponse = await getStudents(); // Use the API service function
    return z.array(studentSchema).parse(studentsResponse.data);
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return [];
  }
}

export default async function StudentManagementPage() {
  const students = await getStudentsData();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all the students in your institution.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new student.
                </DialogDescription>
              </DialogHeader>
              <StudentForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <DataTable data={students} columns={columns} />
      </div>
    </>
  );
}

    
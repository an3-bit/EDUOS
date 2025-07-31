import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api'; // Updated with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Student Management APIs
export const getStudents = () => api.get('/students/'); // Added function to get all students
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
export const getSchoolAttendanceRecords = () => api.get('/attendance/school/');
export const recordSchoolAttendance = (data: any) => api.post('/attendance/school/', data);
export const getClassAttendanceRecords = () => api.get('/attendance/class/');
export const recordClassAttendance = (data: any) => api.post('/attendance/class/', data);
export const getStudentAttendance = (studentId: string) => api.get(`/attendance/student/${studentId}/`);
export const getTeacherAttendance = (teacherId: string) => api.get(`/attendance/teacher/${teacherId}/`);
export const getAttendanceReports = () => api.get('/attendance/reports/');
export const getAttendanceSettings = () => api.get('/attendance/settings/');
export const updateAttendanceSettings = (data: any) => api.put('/attendance/settings/', data);

// Classes & Academics Management APIs
export const getClassLevels = () => api.get('/classes/levels/');
export const createClassLevel = (data: any) => api.post('/classes/levels/', data);
export const getStreams = () => api.get('/classes/streams/');
export const createStream = (data: any) => api.post('/classes/streams/', data);
export const getStreamStudents = (streamId: string) => api.get(`/classes/${streamId}/students/`);
export const addStudentToStream = (streamId: string, data: any) => api.post(`/classes/${streamId}/students/`, data);
export const getStreamAnalytics = (streamId: string) => api.get(`/classes/${streamId}/analytics/`);
export const processPromotions = (data: any) => api.post('/classes/promote/', data);

// E-Learning Management APIs
export const getCourses = () => api.get('/elearning/courses/');
export const getCourseDetails = (id: string) => api.get(`/elearning/courses/${id}/`);
export const getCourseLessons = (id: string) => api.get(`/elearning/courses/${id}/lessons/`);
export const getLessonContent = (id: string) => api.get(`/elearning/lessons/${id}/`);
export const getAssignments = () => api.get('/elearning/assignments/');
export const createAssignment = (data: any) => api.post('/elearning/assignments/', data);
export const getAssignmentSubmissions = (id: string) => api.get(`/elearning/assignments/${id}/submissions/`);
export const submitAssignment = (id: string, data: any) => api.post(`/elearning/assignments/${id}/submit/`, data);
export const getLearningProgress = (studentId: string) => api.get(`/elearning/progress/${studentId}/`);
export const getLiveClassSessions = () => api.get('/elearning/live-classes/');
export const createLiveClass = (data: any) => api.post('/elearning/live-classes/', data);

// TODO: Add other module API functions here
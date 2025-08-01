
import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to include the auth token
api.interceptors.request.use(
    (config) => {
        // In a real app, you'd get this token from localStorage or a state manager
        const token = 'your_auth_token_here'; // TODO: Replace with actual token retrieval
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Generic error handler
const handleApiError = (error: any, context: string) => {
    console.error(`API Error in ${context}:`, error);
    // You can add more robust error handling here, like logging to a service
    return { data: { results: [] } }; // Return a default value to prevent crashes
};

// Student Management APIs
export const getStudents = () => api.get('/students/').catch(e => handleApiError(e, 'getStudents'));
export const getStudentProfile = (studentId: string) => api.get(`/students/${studentId}/`).catch(e => handleApiError(e, `getStudentProfile(${studentId})`));
export const updateStudentProfile = (studentId: string, data: any) => api.put(`/students/${studentId}/`, data);
export const getStudentDocuments = (studentId: string) => api.get(`/students/${studentId}/documents/`).catch(e => handleApiError(e, `getStudentDocuments(${studentId})`));
export const uploadStudentDocument = (studentId: string, data: FormData) => api.post(`/students/${studentId}/documents/`, data);
export const getStudentHistory = (studentId: string) => api.get(`/students/${studentId}/history/`).catch(e => handleApiError(e, `getStudentHistory(${studentId})`));
export const getStudentAcademicSnapshots = (studentId: string) => api.get(`/students/${studentId}/academic-snapshots/`).catch(e => handleApiError(e, `getStudentAcademicSnapshots(${studentId})`));
export const getStudentGuardians = (studentId: string) => api.get(`/students/${studentId}/guardians/`).catch(e => handleApiError(e, `getStudentGuardians(${studentId})`));

// Teacher Management APIs
export const getTeachers = () => api.get('/teachers/').catch(e => handleApiError(e, 'getTeachers'));
export const getTeacherProfile = (teacherId: string) => api.get(`/teachers/${teacherId}/`).catch(e => handleApiError(e, `getTeacherProfile(${teacherId})`));
export const updateTeacherProfile = (teacherId: string, data: any) => api.put(`/teachers/${teacherId}/`, data);
export const getTeacherAssignments = (teacherId: string) => api.get(`/teachers/${teacherId}/assignments/`).catch(e => handleApiError(e, `getTeacherAssignments(${teacherId})`));
export const getTeacherSchedule = (teacherId: string) => api.get(`/teachers/${teacherId}/schedule/`).catch(e => handleApiError(e, `getTeacherSchedule(${teacherId})`));
export const getTeacherPerformance = (teacherId: string) => api.get(`/teachers/${teacherId}/performance/`).catch(e => handleApiError(e, `getTeacherPerformance(${teacherId})`));
export const getTeacherLeave = (teacherId: string) => api.get(`/teachers/${teacherId}/leave/`).catch(e => handleApiError(e, `getTeacherLeave(${teacherId})`));
export const submitLeaveRequest = (teacherId: string, data: any) => api.post(`/teachers/${teacherId}/leave-request/`, data);

// Finance Management APIs
export const getBudgets = () => api.get('/finance/budgets/').catch(e => handleApiError(e, 'getBudgets'));
export const createBudget = (data: any) => api.post('/finance/budgets/', data);
export const getIncomeRecords = () => api.get('/finance/income/').catch(e => handleApiError(e, 'getIncomeRecords'));
export const recordIncome = (data: any) => api.post('/finance/income/', data);
export const getExpenseRecords = () => api.get('/finance/expenses/').catch(e => handleApiError(e, 'getExpenseRecords'));
export const recordExpense = (data: any) => api.post('/finance/expenses/', data);
export const getInvoices = () => api.get('/finance/invoices/').catch(e => handleApiError(e, 'getInvoices'));
export const generateInvoice = (data: any) => api.post('/finance/invoices/', data);
export const getPaymentRecords = () => api.get('/finance/').catch(e => handleApiError(e, 'getPaymentRecords'));
export const processPayment = (data: any) => api.post('/finance/payments/', data);
export const getStudentWallet = (studentId: string) => api.get(`/finance/wallet/${studentId}/`).catch(e => handleApiError(e, `getStudentWallet(${studentId})`));
export const performWalletTransaction = (studentId: string, data: any) => api.post(`/finance/wallet/${studentId}/transaction/`, data);
export const getFinancialReports = () => api.get('/finance/reports/').catch(e => handleApiError(e, 'getFinancialReports'));

// Attendance Management APIs
export const getSchoolAttendanceRecords = () => api.get('/attendance/').catch(e => handleApiError(e, 'getSchoolAttendanceRecords'));
export const recordSchoolAttendance = (data: any) => api.post('/attendance/', data);
export const getClassAttendanceRecords = () => api.get('/attendance/class/').catch(e => handleApiError(e, 'getClassAttendanceRecords'));
export const recordClassAttendance = (data: any) => api.post('/attendance/class/', data);
export const getStudentAttendance = (studentId: string) => api.get(`/attendance/student/${studentId}/`).catch(e => handleApiError(e, `getStudentAttendance(${studentId})`));
export const getTeacherAttendance = (teacherId: string) => api.get(`/attendance/teacher/${teacherId}/`).catch(e => handleApiError(e, `getTeacherAttendance(${teacherId})`));
export const getAttendanceReports = () => api.get('/attendance/reports/').catch(e => handleApiError(e, 'getAttendanceReports'));
export const getAttendanceSettings = () => api.get('/attendance/settings/').catch(e => handleApiError(e, 'getAttendanceSettings'));
export const updateAttendanceSettings = (data: any) => api.put('/attendance/settings/', data);

// Classes & Academics Management APIs
export const getClasses = () => api.get('/classes/').catch(e => handleApiError(e, 'getClasses'));
export const getClassLevels = () => api.get('/academics/levels/').catch(e => handleApiError(e, 'getClassLevels'));
export const createClassLevel = (data: any) => api.post('/academics/levels/', data);
export const getStreams = () => api.get('/academics/streams/').catch(e => handleApiError(e, 'getStreams'));
export const createStream = (data: any) => api.post('/academics/streams/', data);
export const getStreamStudents = (streamId: string) => api.get(`/classes/${streamId}/students/`).catch(e => handleApiError(e, `getStreamStudents(${streamId})`));
export const addStudentToStream = (streamId: string, data: any) => api.post(`/classes/${streamId}/students/`, data);
export const getStreamAnalytics = (streamId: string) => api.get(`/classes/${streamId}/analytics/`).catch(e => handleApiError(e, `getStreamAnalytics(${streamId})`));
export const processPromotions = (data: any) => api.post('/academics/promote/', data);

// E-Learning Management APIs
export const getCourses = () => api.get('/e-learning/courses/').catch(e => handleApiError(e, 'getCourses'));
export const getCourseDetails = (id: string) => api.get(`/e-learning/courses/${id}/`).catch(e => handleApiError(e, `getCourseDetails(${id})`));
export const getCourseLessons = (id: string) => api.get(`/e-learning/courses/${id}/lessons/`).catch(e => handleApiError(e, `getCourseLessons(${id})`));
export const getLessonContent = (id: string) => api.get(`/e-learning/lessons/${id}/`).catch(e => handleApiError(e, `getLessonContent(${id})`));
export const getAssignments = () => api.get('/assessments/').catch(e => handleApiError(e, 'getAssignments'));
export const createAssignment = (data: any) => api.post('/assessments/', data);
export const getAssignmentSubmissions = (id: string) => api.get(`/assessments/${id}/submissions/`).catch(e => handleApiError(e, `getAssignmentSubmissions(${id})`));
export const submitAssignment = (id: string, data: any) => api.post(`/assessments/${id}/submit/`, data);
export const getLearningProgress = (studentId: string) => api.get(`/e-learning/progress/${studentId}/`).catch(e => handleApiError(e, `getLearningProgress(${studentId})`));
export const getLiveClassSessions = () => api.get('/e-learning/live-classes/').catch(e => handleApiError(e, 'getLiveClassSessions'));
export const createLiveClass = (data: any) => api.post('/e-learning/live-classes/', data);

// Events API
export const getEvents = () => api.get('/events/').catch(e => handleApiError(e, 'getEvents'));

// Medical API
export const getMedicalRecords = () => api.get('/medical/').catch(e => handleApiError(e, 'getMedicalRecords'));

// Hostel API
export const getHostelRooms = () => api.get('/hostel/').catch(e => handleApiError(e, 'getHostelRooms'));

// Transport API
export const getTransportVehicles = () => api.get('/transport/').catch(e => handleApiError(e, 'getTransportVehicles'));

// Library API
export const getLibraryBooks = () => api.get('/library/').catch(e => handleApiError(e, 'getLibraryBooks'));

// Timetable API
export const getTimetable = () => api.get('/timetable/').catch(e => handleApiError(e, 'getTimetable'));

// Guardian API
export const getGuardians = () => api.get('/guardians/').catch(e => handleApiError(e, 'getGuardians'));

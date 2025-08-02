import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const handleError = (error: any) => {
    console.error('API call failed:', error);
    return { data: { results: [] } };
};


// Auth APIs
export const loginUser = async (data: any) => Promise.resolve({ data: { access: 'mock-token' } });
export const registerUser = async (data: any) => Promise.resolve({ data: {} });

// Student Management APIs
export const getStudents = () => api.get('/students/').catch(handleError);
export const getStudentProfile = (studentId: string) => api.get(`/students/${studentId}/`).catch(handleError);
export const updateStudentProfile = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getStudentDocuments = (studentId: string) => api.get(`/students/${studentId}/documents/`).catch(handleError);
export const uploadStudentDocument = (studentId: string, data: FormData) => Promise.resolve({ data: {} });
export const getStudentHistory = (studentId: string) => api.get(`/students/${studentId}/history/`).catch(handleError);
export const getStudentAcademicSnapshots = (studentId: string) => api.get(`/students/${studentId}/academic-snapshots/`).catch(handleError);
export const getStudentGuardians = (studentId: string) => api.get(`/students/${studentId}/guardians/`).catch(handleError);

// Teacher Management APIs
export const getTeachers = () => api.get('/teachers/').catch(handleError);
export const getTeacherProfile = (teacherId: string) => api.get(`/teachers/${teacherId}/`).catch(handleError);
export const updateTeacherProfile = (teacherId: string, data: any) => Promise.resolve({ data: {} });
export const getTeacherAssignments = (teacherId: string) => api.get(`/teachers/${teacherId}/assignments/`).catch(handleError);
export const getTeacherSchedule = (teacherId: string) => api.get(`/teachers/${teacherId}/schedule/`).catch(handleError);
export const getTeacherPerformance = (teacherId: string) => api.get(`/teachers/${teacherId}/performance/`).catch(handleError);
export const getTeacherLeave = (teacherId: string) => api.get(`/teachers/${teacherId}/leave/`).catch(handleError);
export const submitLeaveRequest = (teacherId: string, data: any) => Promise.resolve({ data: {} });

// Finance Management APIs
export const getBudgets = () => api.get('/finance/budgets/').catch(handleError);
export const createBudget = (data: any) => Promise.resolve({ data: {} });
export const getIncomeRecords = () => api.get('/finance/income/').catch(handleError);
export const recordIncome = (data: any) => Promise.resolve({ data: {} });
export const getExpenseRecords = () => api.get('/finance/expenses/').catch(handleError);
export const recordExpense = (data: any) => Promise.resolve({ data: {} });
export const getInvoices = () => api.get('/finance/invoices/').catch(handleError);
export const generateInvoice = (data: any) => Promise.resolve({ data: {} });
export const getPaymentRecords = () => api.get('/finance/payments/').catch(handleError);
export const processPayment = (data: any) => Promise.resolve({ data: {} });
export const getStudentWallet = (studentId: string) => api.get(`/finance/wallet/${studentId}/`).catch(handleError);
export const performWalletTransaction = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getFinancialReports = () => api.get('/finance/reports/').catch(handleError);

// Attendance Management APIs
export const getSchoolAttendanceRecords = () => api.get('/attendance/school/').catch(handleError);
export const recordSchoolAttendance = (data: any) => Promise.resolve({ data: {} });
export const getClassAttendanceRecords = () => api.get('/attendance/class/').catch(handleError);
export const recordClassAttendance = (data: any) => Promise.resolve({ data: {} });
export const getStudentAttendance = (studentId: string) => api.get(`/attendance/student/${studentId}/`).catch(handleError);
export const getTeacherAttendance = (teacherId: string) => api.get(`/attendance/teacher/${teacherId}/`).catch(handleError);
export const getAttendanceReports = () => api.get('/attendance/reports/').catch(handleError);
export const getAttendanceSettings = () => api.get('/attendance/settings/').catch(handleError);
export const updateAttendanceSettings = (data: any) => Promise.resolve({ data: {} });

// Classes & Academics Management APIs
export const getClasses = () => api.get('/academics/classes/').catch(handleError);
export const getClassLevels = () => api.get('/academics/levels/').catch(handleError);
export const createClassLevel = (data: any) => Promise.resolve({ data: {} });
export const getStreams = () => api.get('/academics/streams/').catch(handleError);
export const createStream = (data: any) => Promise.resolve({ data: {} });
export const getStreamStudents = (streamId: string) => api.get(`/academics/streams/${streamId}/students/`).catch(handleError);
export const addStudentToStream = (streamId: string, data: any) => Promise.resolve({ data: {} });
export const getStreamAnalytics = (streamId: string) => api.get(`/academics/streams/${streamId}/analytics/`).catch(handleError);
export const processPromotions = (data: any) => Promise.resolve({ data: {} });

// E-Learning Management APIs
export const getCourses = () => api.get('/elearning/courses/').catch(handleError);
export const getCourseDetails = (id: string) => api.get(`/elearning/courses/${id}/`).catch(handleError);
export const getCourseLessons = (id: string) => api.get(`/elearning/courses/${id}/lessons/`).catch(handleError);
export const getLessonContent = (id: string) => api.get(`/elearning/lessons/${id}/`).catch(handleError);
export const getAssignments = () => api.get('/elearning/assignments/').catch(handleError);
export const createAssignment = (data: any) => Promise.resolve({ data: {} });
export const getAssignmentSubmissions = (id: string) => api.get(`/elearning/assignments/${id}/submissions/`).catch(handleError);
export const submitAssignment = (id: string, data: any) => Promise.resolve({ data: {} });
export const getLearningProgress = (studentId: string) => api.get(`/elearning/progress/${studentId}/`).catch(handleError);
export const getLiveClassSessions = () => api.get('/elearning/live-classes/').catch(handleError);
export const createLiveClass = (data: any) => Promise.resolve({ data: {} });

// Events API
export const getEvents = () => api.get('/events/').catch(handleError);

// Medical API
export const getMedicalRecords = () => api.get('/medical/').catch(handleError);

// Hostel API
export const getHostelRooms = () => api.get('/hostel/rooms/').catch(handleError);

// Transport API
export const getTransportVehicles = () => api.get('/transport/vehicles/').catch(handleError);

// Library API
export const getLibraryBooks = () => api.get('/library/books/').catch(handleError);

// Timetable API
export const getTimetable = () => api.get('/timetable/').catch(handleError);

// Guardian API
export const getGuardians = () => api.get('/guardians/').catch(handleError);

// Exams & Assessments APIs
export const getExams = () => api.get('/exams/').catch(handleError);
export const createExam = (data: any) => Promise.resolve({ data: {} });
export const getExamDetails = (id: string) => api.get(`/exams/${id}/`).catch(handleError);
export const updateExam = (id: string, data: any) => Promise.resolve({ data: {} });
export const deleteExam = (id: string) => Promise.resolve({ data: {} });
export const gradeExam = (id: string) => Promise.resolve({ data: {} });
export const getExamInsights = (id: string) => api.get(`/exams/${id}/insights/`).catch(handleError);
export const getExamSubjects = () => api.get('/exam-subjects/').catch(handleError);
export const assignSubjectToExam = (data: any) => Promise.resolve({ data: {} });
export const getStudentScores = () => api.get('/student-scores/').catch(handleError);
export const submitStudentScore = (data: any) => Promise.resolve({ data: {} });
export const getExamResults = () => api.get('/exam-results/').catch(handleError);
export const getStudentReport = (studentId: string) => api.get(`/exam-results/student_report/?student_id=${studentId}`).catch(handleError);
export const getExamStatistics = (examId: string) => api.get(`/analytics/statistics/${examId}/`).catch(handleError);
export const generateRankings = (examId: string) => Promise.resolve({ data: {} });
export const assignGrades = (examId: string) => Promise.resolve({ data: {} });
export const getStudentPerformance = (examId: string, studentId: string) => api.get(`/analytics/summary/${examId}/${studentId}/`).catch(handleError);
export const getAIPredictions = () => api.get('/predictions/').catch(handleError);
export const generateAIQuestions = (data: any) => Promise.resolve({ data: {} });
export const uploadExamForOCR = (data: FormData, type: 'image' | 'pdf') => Promise.resolve({ data: {} });
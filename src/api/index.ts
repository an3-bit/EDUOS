
import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const handleError = (error: any) => {
    console.error('API call failed:', error);
    // Return a structure that won't break the frontend
    return { data: { results: [] } };
};

// These functions are now just placeholders.
// The mock data has been moved to src/lib/assets.ts and is provided via DataContext.
export const getStudents = () => Promise.resolve({ data: { results: [] } });
export const getStudentProfile = (studentId: string) => Promise.resolve({ data: {} });
export const updateStudentProfile = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getStudentDocuments = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const uploadStudentDocument = (studentId: string, data: FormData) => Promise.resolve({ data: {} });
export const getStudentHistory = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentAcademicSnapshots = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentGuardians = (studentId: string) => Promise.resolve({ data: { results: [] } });

export const getTeachers = () => Promise.resolve({ data: { results: [] } });
export const getTeacherProfile = (teacherId: string) => Promise.resolve({ data: {} });
export const updateTeacherProfile = (teacherId: string, data: any) => Promise.resolve({ data: {} });
export const getTeacherAssignments = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherSchedule = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherPerformance = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherLeave = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const submitLeaveRequest = (teacherId: string, data: any) => Promise.resolve({ data: {} });

export const getBudgets = () => Promise.resolve({ data: { results: [] } });
export const createBudget = (data: any) => Promise.resolve({ data: {} });
export const getIncomeRecords = () => Promise.resolve({ data: { results: [] } });
export const recordIncome = (data: any) => Promise.resolve({ data: {} });
export const getExpenseRecords = () => Promise.resolve({ data: { results: [] } });
export const recordExpense = (data: any) => Promise.resolve({ data: {} });
export const getInvoices = () => Promise.resolve({ data: { results: [] } });
export const generateInvoice = (data: any) => Promise.resolve({ data: {} });
export const getPaymentRecords = () => Promise.resolve({ data: { results: [] } });
export const processPayment = (data: any) => Promise.resolve({ data: {} });
export const getStudentWallet = (studentId: string) => Promise.resolve({ data: {} });
export const performWalletTransaction = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getFinancialReports = () => Promise.resolve({ data: { results: [] } });

export const getSchoolAttendanceRecords = () => Promise.resolve({ data: { results: [] } });
export const recordSchoolAttendance = (data: any) => Promise.resolve({ data: {} });
export const getClassAttendanceRecords = () => Promise.resolve({ data: { results: [] } });
export const recordClassAttendance = (data: any) => Promise.resolve({ data: {} });
export const getStudentAttendance = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherAttendance = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getAttendanceReports = () => Promise.resolve({ data: { results: [] } });
export const getAttendanceSettings = () => Promise.resolve({ data: { results: [] } });
export const updateAttendanceSettings = (data: any) => Promise.resolve({ data: {} });

export const getClasses = () => Promise.resolve({ data: { results: [] } });
export const getClassLevels = () => Promise.resolve({ data: { results: [] } });
export const createClassLevel = (data: any) => Promise.resolve({ data: {} });
export const getStreams = () => Promise.resolve({ data: { results: [] } });
export const createStream = (data: any) => Promise.resolve({ data: {} });
export const getStreamStudents = (streamId: string) => Promise.resolve({ data: { results: [] } });
export const addStudentToStream = (streamId: string, data: any) => Promise.resolve({ data: {} });
export const getStreamAnalytics = (streamId: string) => Promise.resolve({ data: {} });
export const processPromotions = (data: any) => Promise.resolve({ data: {} });

export const getCourses = () => Promise.resolve({ data: { results: [] } });
export const getCourseDetails = (id: string) => Promise.resolve({ data: {} });
export const getCourseLessons = (id: string) => Promise.resolve({ data: { results: [] } });
export const getLessonContent = (id: string) => Promise.resolve({ data: {} });
export const getAssignments = () => Promise.resolve({ data: { results: [] } });
export const createAssignment = (data: any) => Promise.resolve({ data: {} });
export const getAssignmentSubmissions = (id: string) => Promise.resolve({ data: { results: [] } });
export const submitAssignment = (id: string, data: any) => Promise.resolve({ data: {} });
export const getLearningProgress = (studentId: string) => Promise.resolve({ data: {} });
export const getLiveClassSessions = () => Promise.resolve({ data: { results: [] } });
export const createLiveClass = (data: any) => Promise.resolve({ data: {} });

export const getEvents = () => Promise.resolve({ data: { results: [] } });
export const getMedicalRecords = () => Promise.resolve({ data: { results: [] } });
export const getHostelRooms = () => Promise.resolve({ data: { results: [] } });
export const getTransportVehicles = () => Promise.resolve({ data: { results: [] } });


// Library API Mocks
export const getLibraryBooks = () => Promise.resolve({ data: { results: [] }});
export const getBookCopies = () => Promise.resolve({ data: { results: [] } });
export const getBorrowTransactions = () => Promise.resolve({ data: { results: [] } });
export const getLibraryFines = () => Promise.resolve({ data: { results: [] } });


export const getTimetable = () => Promise.resolve({ data: { results: [] } });

export const getExams = () => Promise.resolve({ data: { results: [] }});
export const createExam = (data: any) => Promise.resolve({ data: {} });
export const getExamDetails = (id: string) => Promise.resolve({ data: {} });
export const updateExam = (id: string, data: any) => Promise.resolve({ data: {} });
export const deleteExam = (id: string) => Promise.resolve({ data: {} });
export const gradeExam = (id: string) => Promise.resolve({ data: {} });
export const getExamInsights = (id: string) => Promise.resolve({ data: {} });
export const getExamSubjects = () => Promise.resolve({ data: { results: [] } });
export const assignSubjectToExam = (data: any) => Promise.resolve({ data: {} });
export const getStudentScores = () => Promise.resolve({ data: { results: [] } });
export const submitStudentScore = (data: any) => Promise.resolve({ data: {} });
export const getExamResults = () => Promise.resolve({ data: { results: [] } });
export const getStudentReport = (studentId: string) => Promise.resolve({ data: {} });
export const getExamStatistics = (examId: string) => Promise.resolve({ data: {} });
export const generateRankings = (examId: string) => Promise.resolve({ data: {} });
export const assignGrades = (examId: string) => Promise.resolve({ data: {} });
export const getStudentPerformance = (examId: string, studentId: string) => Promise.resolve({ data: {} });
export const getAIPredictions = () => Promise.resolve({ data: { results: [] } });
export const generateAIQuestions = (data: any) => Promise.resolve({ data: {} });
export const uploadExamForOCR = (data: FormData, type: 'image' | 'pdf') => Promise.resolve({ data: {} });

// Guardian API mocks
export const getGuardians = () => Promise.resolve({ data: { results: [] } });
export const getGuardianNotifications = () => Promise.resolve({ data: { results: [] } });

// Subjects API Mocks
export const getSubjects = () => Promise.resolve({ data: { results: [] } });
export const getSubjectAnalytics = () => Promise.resolve({ data: {} });


// Auth is mocked directly in AuthContext for now
export const loginUser = (data: any) => Promise.resolve({ data: { access: 'mock-token' } });
export const registerUser = (data: any) => Promise.resolve({ data: {} });

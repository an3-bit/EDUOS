
import axios from 'axios';

const API_BASE_URL = 'https://eduos.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// The API calls are commented out to allow for frontend development without a live backend.
// They will return empty arrays to prevent the app from crashing.

// Auth APIs
export const loginUser = async (data: any) => {
    console.log('Mock login with:', data);
    // Simulate a successful login for frontend development
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU1VQRVJfQURNSU4iLCJlbWFpbCI6ImFkbWluQGVkdW9zLmNvbSIsImZpcnN0X25hbWUiOiJBZG1pbiIsImxhc3RfbmFtZSI6IlVzZXIiLCJleHAiOjE5MjQ5MDU2MDB9.6n3c2Y_3-J5jZz4Z9vY8c_8aR8j_7eA8sFpX9bJ4bHg';
    return Promise.resolve({ data: { access: mockToken } });
};
export const registerUser = async (data: any) => { 
    console.log('Mock register with:', data);
    return Promise.resolve({ data: {} });
};


// Student Management APIs
export const getStudents = () => Promise.resolve({ data: { results: [] } });
export const getStudentProfile = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const updateStudentProfile = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getStudentDocuments = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const uploadStudentDocument = (studentId: string, data: FormData) => Promise.resolve({ data: {} });
export const getStudentHistory = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentAcademicSnapshots = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentGuardians = (studentId: string) => Promise.resolve({ data: { results: [] } });

// Teacher Management APIs
export const getTeachers = () => Promise.resolve({ data: { results: [] } });
export const getTeacherProfile = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const updateTeacherProfile = (teacherId: string, data: any) => Promise.resolve({ data: {} });
export const getTeacherAssignments = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherSchedule = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherPerformance = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherLeave = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const submitLeaveRequest = (teacherId: string, data: any) => Promise.resolve({ data: {} });

// Finance Management APIs
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
export const getStudentWallet = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const performWalletTransaction = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getFinancialReports = () => Promise.resolve({ data: { results: [] } });

// Attendance Management APIs
export const getSchoolAttendanceRecords = () => Promise.resolve({ data: { results: [] } });
export const recordSchoolAttendance = (data: any) => Promise.resolve({ data: {} });
export const getClassAttendanceRecords = () => Promise.resolve({ data: { results: [] } });
export const recordClassAttendance = (data: any) => Promise.resolve({ data: {} });
export const getStudentAttendance = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getTeacherAttendance = (teacherId: string) => Promise.resolve({ data: { results: [] } });
export const getAttendanceReports = () => Promise.resolve({ data: { results: [] } });
export const getAttendanceSettings = () => Promise.resolve({ data: { results: [] } });
export const updateAttendanceSettings = (data: any) => Promise.resolve({ data: {} });

// Classes & Academics Management APIs
export const getClasses = () => Promise.resolve({ data: { results: [] } });
export const getClassLevels = () => Promise.resolve({ data: { results: [] } });
export const createClassLevel = (data: any) => Promise.resolve({ data: {} });
export const getStreams = () => Promise.resolve({ data: { results: [] } });
export const createStream = (data: any) => Promise.resolve({ data: {} });
export const getStreamStudents = (streamId: string) => Promise.resolve({ data: { results: [] } });
export const addStudentToStream = (streamId: string, data: any) => Promise.resolve({ data: {} });
export const getStreamAnalytics = (streamId: string) => Promise.resolve({ data: { results: [] } });
export const processPromotions = (data: any) => Promise.resolve({ data: {} });

// E-Learning Management APIs
export const getCourses = () => Promise.resolve({ data: { results: [] } });
export const getCourseDetails = (id: string) => Promise.resolve({ data: { results: [] } });
export const getCourseLessons = (id: string) => Promise.resolve({ data: { results: [] } });
export const getLessonContent = (id: string) => Promise.resolve({ data: { results: [] } });
export const getAssignments = () => Promise.resolve({ data: { results: [] } });
export const createAssignment = (data: any) => Promise.resolve({ data: {} });
export const getAssignmentSubmissions = (id: string) => Promise.resolve({ data: { results: [] } });
export const submitAssignment = (id: string, data: any) => Promise.resolve({ data: {} });
export const getLearningProgress = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getLiveClassSessions = () => Promise.resolve({ data: { results: [] } });
export const createLiveClass = (data: any) => Promise.resolve({ data: {} });

// Events API
export const getEvents = () => Promise.resolve({ data: { results: [] } });

// Medical API
export const getMedicalRecords = () => Promise.resolve({ data: { results: [] } });

// Hostel API
export const getHostelRooms = () => Promise.resolve({ data: { results: [] } });

// Transport API
export const getTransportVehicles = () => Promise.resolve({ data: { results: [] } });

// Library API
export const getLibraryBooks = () => Promise.resolve({ data: { results: [] } });

// Timetable API
export const getTimetable = () => Promise.resolve({ data: { results: [] } });

// Guardian API
export const getGuardians = () => Promise.resolve({ data: { results: [] } });

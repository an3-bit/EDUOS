
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

// Mock API calls
export const getStudents = () => Promise.resolve({ data: { results: [
    { id: '1', admission_number: 'STU-001', first_name: 'John', last_name: 'Doe', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Active', date_of_birth: new Date('2010-05-15') },
    { id: '2', admission_number: 'STU-002', first_name: 'Jane', last_name: 'Smith', gender: 'Female', class_level: 'Grade 4', enrollment_status: 'Active', date_of_birth: new Date('2011-08-20') },
    { id: '3', admission_number: 'STU-003', first_name: 'Peter', last_name: 'Jones', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Suspended', date_of_birth: new Date('2010-07-22') },
] } });
export const getStudentProfile = (studentId: string) => Promise.resolve({ data: { id: studentId, first_name: 'John', last_name: 'Doe' } });
export const updateStudentProfile = (studentId: string, data: any) => Promise.resolve({ data: {} });
export const getStudentDocuments = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const uploadStudentDocument = (studentId: string, data: FormData) => Promise.resolve({ data: {} });
export const getStudentHistory = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentAcademicSnapshots = (studentId: string) => Promise.resolve({ data: { results: [] } });
export const getStudentGuardians = (studentId: string) => Promise.resolve({ data: { results: [] } });

export const getTeachers = () => Promise.resolve({ data: { results: [] } });
export const getTeacherProfile = (teacherId: string) => Promise.resolve({ data: { id: teacherId, name: 'Mr. Smith' } });
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
export const getLibraryBooks = () => Promise.resolve({ data: { results: [] } });
export const getTimetable = () => Promise.resolve({ data: { results: [] } });

export const getExams = () => Promise.resolve({ data: { results: [
    { id: '1', name: 'Mid-Term Exams', classLevel: 'Grade 5', term: 'Term 2', year: 2024, status: 'Graded' },
    { id: '2', name: 'Final Exams', classLevel: 'Grade 5', term: 'Term 3', year: 2024, status: 'Published' },
]}});
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
export const getGuardians = () => Promise.resolve({ data: { results: [
    { id: '1', user: 'user1', institution: 'inst1', phone_number: '123-456-7890', email: 'jane.doe@example.com', is_active: true, user_details: { first_name: 'Jane', last_name: 'Doe' }, linked_students: [{name: 'John Doe', relationship: 'Mother'}] },
    { id: '2', user: 'user2', institution: 'inst1', phone_number: '098-765-4321', email: 'john.smith@example.com', is_active: false, user_details: { first_name: 'John', last_name: 'Smith' }, linked_students: [{name: 'Emily Smith', relationship: 'Father'}] },
] } });
export const getGuardianNotifications = () => Promise.resolve({ data: { results: [
    {id: '1', guardian: '1', guardian_name: 'Jane Doe', title: 'Fee Reminder', message: 'Please note that the school fees for Term 2 are due next week.', type: 'fee_balance', is_read: false, timestamp: new Date().toISOString()},
    {id: '2', guardian: '2', guardian_name: 'John Smith', title: 'Exam Results Published', message: 'The results for the mid-term exams are now available on the portal.', type: 'exam_update', is_read: true, timestamp: new Date(Date.now() - 86400000).toISOString()},
] } });

// Auth is mocked directly in AuthContext for now
export const loginUser = (data: any) => Promise.resolve({ data: { access: 'mock-token' } });
export const registerUser = (data: any) => Promise.resolve({ data: {} });

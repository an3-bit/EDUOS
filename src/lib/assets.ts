
// This file contains all the mock data for the application.
// In a real application, this data would be fetched from an API.

export const mockData = {
    students: [
        { id: '1', admission_number: 'STU-001', first_name: 'John', last_name: 'Doe', middle_name: 'Quincy', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Active', date_of_birth: new Date('2010-05-15'), stream: 'A', photo: 'https://placehold.co/100x100.png' },
        { id: '2', admission_number: 'STU-002', first_name: 'Jane', last_name: 'Smith', gender: 'Female', class_level: 'Grade 4', enrollment_status: 'Active', date_of_birth: new Date('2011-08-20'), stream: 'B' },
        { id: '3', admission_number: 'STU-003', first_name: 'Peter', last_name: 'Jones', gender: 'Male', class_level: 'Grade 5', enrollment_status: 'Suspended', date_of_birth: new Date('2010-07-22'), stream: 'A' },
    ],
    teachers: [
        { id: '1', staff_id: 'TCH-001', first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone_number: '123-456-7890', job_title: 'Lead Math Teacher', is_active: true, gender: 'Male', employment_type: 'Full-time', subjects_taught: ['Mathematics', 'Physics'], bio: 'An experienced mathematics teacher with a passion for helping students excel.' },
        { id: '2', staff_id: 'TCH-002', first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', phone_number: '098-765-4321', job_title: 'History Teacher', is_active: false, gender: 'Female', employment_type: 'Full-time', subjects_taught: ['History'], bio: 'A dedicated history teacher with a love for storytelling.' },
    ],
    classes: [
        { id: 'c1', name: 'Grade 5A', level: 'Grade 5', stream: 'A', teacher: 'John Doe', studentCount: 30 },
        { id: 'c2', name: 'Grade 4B', level: 'Grade 4', stream: 'B', teacher: 'Jane Smith', studentCount: 28 },
    ],
    classLevels: [
        { id: 'cl1', name: 'Grade 1' },
        { id: 'cl2', name: 'Grade 2' },
        { id: 'cl3', name: 'Grade 3' },
        { id: 'cl4', name: 'Grade 4' },
        { id: 'cl5', name: 'Grade 5' },
    ],
    streams: [
        { id: 's1', name: 'A' },
        { id: 's2', name: 'B' },
        { id: 's3', name: 'C' },
    ],
    exams: [
        { id: 'ex1', name: 'Mid-Term Exams', classLevel: 'Grade 5', term: 'Term 2', year: 2024, status: 'Graded' },
        { id: 'ex2', name: 'Final Exams', classLevel: 'Grade 5', term: 'Term 3', year: 2024, status: 'Published' },
        { id: 'ex3', name: 'Weekly Quiz 1', classLevel: 'Grade 4', term: 'Term 2', year: 2024, status: 'Draft' },
    ],
    examResults: [
        { id: 'er1', examId: 'ex1', studentName: 'John Doe', averageScore: 85.5, finalGrade: 'A', rank: 1 },
        { id: 'er2', examId: 'ex1', studentName: 'Peter Jones', averageScore: 75.0, finalGrade: 'B', rank: 2 },
    ],
    examStats: [
        {
            examId: 'ex1',
            mean_score: 80.25,
            top_grade: 'A',
            lowest_score: 65,
            std_dev: 7.4,
            subject_averages: [
                { subject: 'Math', average: 85 },
                { subject: 'Science', average: 78 },
                { subject: 'English', average: 82 },
            ],
            grade_distribution: [
                { grade: 'A', count: 1 },
                { grade: 'B', count: 1 },
            ],
        },
    ],
    invoices: [
        { id: 'inv1', student: 'John Doe', invoice_number: 'INV-001', issued_on: new Date(), due_date: new Date(), total_amount: 500, amount_paid: 500, balance: 0, status: 'Paid'},
        { id: 'inv2', student: 'Jane Smith', invoice_number: 'INV-002', issued_on: new Date(), due_date: new Date(), total_amount: 750, amount_paid: 0, balance: 750, status: 'Pending'},
    ],
    guardians: [
        { id: '1', user: 'user1', institution: 'inst1', phone_number: '123-456-7890', email: 'jane.doe@example.com', is_active: true, user_details: { first_name: 'Jane', last_name: 'Doe' }, linked_students: [{name: 'John Doe', relationship: 'Mother'}] },
        { id: '2', user: 'user2', institution: 'inst1', phone_number: '098-765-4321', email: 'john.smith@example.com', is_active: false, user_details: { first_name: 'John', last_name: 'Smith' }, linked_students: [{name: 'Emily Smith', relationship: 'Father'}] },
    ],
    guardianNotifications: [
        {id: '1', guardian: '1', guardian_name: 'Jane Doe', title: 'Fee Reminder', message: 'Please note that the school fees for Term 2 are due next week.', type: 'fee_balance', is_read: false, timestamp: new Date().toISOString()},
        {id: '2', guardian: '2', guardian_name: 'John Smith', title: 'Exam Results Published', message: 'The results for the mid-term exams are now available on the portal.', type: 'exam_update', is_read: true, timestamp: new Date(Date.now() - 86400000).toISOString()},
    ],
    linkedStudents: [
         { guardianName: 'Jane Doe', studentName: 'John Doe', relationship: 'Mother' },
         { guardianName: 'John Smith', studentName: 'Emily Smith', relationship: 'Father' }
    ],
    libraryBooks: [
        { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', status: 'Available' },
        { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', status: 'Borrowed' },
        { id: '3', title: '1984', author: 'George Orwell', isbn: '9780451524935', status: 'Available' },
    ]
};

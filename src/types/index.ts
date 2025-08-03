

export enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT",
    LIBRARIAN = "LIBRARIAN",
    STORE_KEEPER = "STORE_KEEPER",
    BURSAR = "BURSAR",
    HOSTEL_MANAGER = "HOSTEL_MANAGER",
    FINANCE = "FINANCE",
    SUPPORT_STAFF = "SUPPORT_STAFF",
    PUBLIC_LEARNER = "PUBLIC_LEARNER",
    PUBLIC_TEACHER = "PUBLIC_TEACHER",
    GOV_USER = "GOV_USER",
}


export interface User {
    token: string;
    role: UserRole;
    email: string;
    firstName: string;
    lastName: string;
}

export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  admission_number: string;
  date_of_birth: string;
  gender: 'Male' | 'Female' | 'Other';
  class_level: string;
  stream?: string;
  enrollment_status: 'Active' | 'Suspended' | 'Graduated' | 'Transferred' | 'Inactive' | 'Expelled';
  photo?: string;
}

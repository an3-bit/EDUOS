import React from 'react';
import { Student } from '@/types'; // Import the Student interface

interface StudentProfileDetailsProps {
  student: Student; // Use the Student interface
}

const StudentProfileDetails: React.FC<StudentProfileDetailsProps> = ({ student }) => {
  return (
    <div>
      <h2>Basic Information</h2>
      <p>Name: {student.first_name} {student.middle_name} {student.last_name}</p>
      <p>Admission Number: {student.admission_number}</p>
      <p>Date of Birth: {student.date_of_birth}</p>
      <p>Gender: {student.gender}</p>
      {/* Add other basic student details here */}
      {/* Example: <p>Enrollment Status: {student.enrollment_status}</p> */}
    </div>
  );
};

export default StudentProfileDetails;
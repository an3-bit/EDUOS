import React from 'react';
// import { Teacher } from '@/types'; // Import the Teacher interface

interface TeacherProfileDetailsProps {
  teacher: any; // TODO: Replace 'any' with the actual Teacher interface
}

const TeacherProfileDetails: React.FC<TeacherProfileDetailsProps> = ({ teacher }) => {
  // TODO: Implement the Teacher interface based on your backend model
  // interface Teacher {
  //   id: string;
  //   first_name: string;
  //   last_name: string;
  //   staff_id: string;
  //   ...
  // }

  return (
    <div>
      <h2>Basic Information</h2>
      <p>Name: {teacher.first_name} {teacher.middle_name} {teacher.last_name}</p>
      <p>Staff ID: {teacher.staff_id}</p>
      {/* Add other basic teacher details here */}
      {/* Example: <p>Job Title: {teacher.job_title}</p> */}
    </div>
  );
};

export default TeacherProfileDetails;
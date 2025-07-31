import React from 'react';

interface StudentHistoryProps {
  studentId: string;
}

const StudentHistory: React.FC<StudentHistoryProps> = ({ studentId }) => {
  // TODO: Fetch student history using the API function (getStudentHistory)
  // TODO: Display the student's academic progression

  return (
    <div>
      <h2>Student History</h2>
      <p>Loading history for student ID: {studentId}...</p>
      {/* Display history here */}
    </div>
  );
};

export default StudentHistory;
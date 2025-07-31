import React from 'react';

interface MedicalFlagsProps {
  studentId: string;
}

const MedicalFlags: React.FC<MedicalFlagsProps> = ({ studentId }) => {
  // TODO: Fetch medical flags/health alerts using the API function (you'll need to add this)
  // TODO: Display health condition alerts

  return (
    <div>
      <h2>Medical Flags</h2>
      <p>Loading medical flags for student ID: {studentId}...</p>
      {/* Display medical flags here */}
    </div>
  );
};

export default MedicalFlags;
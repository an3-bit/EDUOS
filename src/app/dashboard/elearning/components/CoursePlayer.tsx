import React from 'react';
// import { Lesson } from '@/types'; // Import the Lesson interface

interface CoursePlayerProps {
  lessonId: string;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ lessonId }) => {
  // TODO: Fetch lesson content using the API function (getLessonContent)
  // TODO: Display the lesson content (video, PDF, etc.)

  return (
    <div>
      <h2>Course Player</h2>
      <p>Loading lesson content for lesson ID: {lessonId}...</p>
      {/* Display lesson content here */}
    </div>
  );
};

export default CoursePlayer;
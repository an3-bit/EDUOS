import React from 'react';
// import { Course } from '@/types'; // Import the Course interface

interface CourseCatalogProps {
  courses: any[]; // TODO: Replace 'any[]' with the actual Course interface array
}

const CourseCatalog: React.FC<CourseCatalogProps> = ({ courses }) => {
  // TODO: Define the Course interface in src/types/index.ts
  // TODO: Display the list of courses and provide search/filter functionality

  return (
    <div>
      <h2>Course Catalog</h2>
      {/* Display courses here */}
      {courses.map((course: any) => (
        <div key={course.id}> {/* Use unique key */}
          <p>Course Title: {course.title}</p> {/* Assuming a 'title' field */}
          {/* Display other course details */}
        </div>
      ))}
      {/* Add search/filter options here */}
    </div>
  );
};

export default CourseCatalog;
import { CoursesList } from 'components/CoursesList/CoursesList';
import { useState, useEffect } from 'react';
import { fetchCourses } from 'services/api';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const responseData = await fetchCourses();
        if (responseData.length === 0) {
          console.log(
            'Sorry, there are no available courses now. Please try again later.'
          );
          return;
        }
        setCourses(responseData.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    loadCourses();
  }, []);

  console.log(courses);

  return (
    <>
      <h1>CoursesPage</h1>
      <CoursesList courses={courses} />
    </>
  );
};

export default CoursesPage;

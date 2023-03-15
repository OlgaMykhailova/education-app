import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationNav } from 'components/PaginationNav/PaginationNav';
import { useState, useEffect } from 'react';
import { fetchCourses } from 'services/api';
import { Spinner } from 'components/Spinner/Spinner.styled';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCourses = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    loadCourses();
  }, []);

  console.log(courses);

  const pagesQuantity = Math.ceil(courses.length / 10);

  return (
    <>
      <h1>CoursesPage</h1>
    
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CoursesList courses={courses} page={page} />
          <PaginationNav
            page={page}
            pagesQuantity={pagesQuantity}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default CoursesPage;

import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationNav } from 'components/PaginationNav/PaginationNav';
import { useState, useEffect } from 'react';
import { fetchCourses } from 'services/api';
import { Spinner, SpinnerContainer } from 'components/Spinner/Spinner.styled';
import { Container } from 'components/Container/Container.styled';

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
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

  const pagesQuantity = Math.ceil(courses?.length / 10);

  return (
    <Container>
      {isLoading || courses === null ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
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
    </Container>
  );
};

export default CoursesPage;

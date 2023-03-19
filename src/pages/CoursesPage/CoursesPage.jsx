import { CoursesList } from 'components/CoursesList/CoursesList';
import { PaginationNav } from 'components/PaginationNav/PaginationNav';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCourses } from 'services/api';
import { Spinner, SpinnerContainer } from 'components/Spinner/Spinner.styled';
import { Container } from 'components/Container/Container.styled';
import { Error } from 'components/Error/Error';

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadCourses = async () => {
      setIsLoading(true);
      try {
        const responseData = await fetchCourses();
        if (!responseData) {
          throw new Error(
            'Sorry, there are no available courses now. Please try again later.'
          );
        }
        setCourses(responseData.reverse());
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    };
    loadCourses();
  }, []);

  const pagesQuantity = Math.ceil(courses?.length / 10);

  return (
    <Container>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : courses ? (
        <>
          <CoursesList courses={courses} state={{ from: location }} page={page}/>
          <PaginationNav
            page={page}
            pagesQuantity={pagesQuantity}
            setPage={setPage}
          />
        </>
      ) : (
        <Error errorText={'There are no courses for display'} />
      )}
    </Container>
  );
};

export default CoursesPage;

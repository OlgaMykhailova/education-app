import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findCourseById } from 'services/api';
import { Container } from 'components/Container/Container.styled';
import { CourseDetails } from 'components/CourseDetails/CourseDetails';
import { Spinner, SpinnerContainer } from 'components/Spinner/Spinner.styled';
import { Error } from 'components/Error/Error';
import { Button, Link } from '../../components/CourseDetails/CourseDetails.styled';

const CoursePreviewPage = ({ state }) => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const goBackHref = state?.from ?? '/';

  useEffect(() => {
    const loadCourseDetails = async id => {
      setIsLoading(true);
      try {
        const responseData = await findCourseById(id);
        if (responseData.length === 0) {
          throw new Error(
            "Sorry, something went wrong. We can't find this course."
          );
        }
        setCourseDetails(responseData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        return error;
      }
    };
    loadCourseDetails(id);
  }, [id]);

  return (
    <Container>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : courseDetails ? (
        <CourseDetails courseDetails={courseDetails} state={state} />
      ) : (
        <>
          <Link to={goBackHref}>
            <Button type="button">Go Back</Button>
          </Link>
          <Error errorText={"Sorry, We can't find this course"} />
        </>
      )}
    </Container>
  );
};

export default CoursePreviewPage;

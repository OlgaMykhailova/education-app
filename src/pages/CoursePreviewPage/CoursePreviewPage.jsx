import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findCourseById } from 'services/api';
import { Container } from 'components/Container/Container.styled';
import { CourseDetails } from 'components/CourseDetails/CourseDetails';
import { Spinner, SpinnerContainer } from 'components/Spinner/Spinner.styled';

const CoursePreviewPage = ({ state }) => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCourseDetails = async id => {
      setIsLoading(true);
      try {
        const responseData = await findCourseById(id);
        if (responseData.length === 0) {
          console.log(
            'Sorry, something went wrong. We can not find this course.'
          );
          return;
        }
        setCourseDetails(responseData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    loadCourseDetails(id);
  }, [id]);

  console.log(courseDetails);

  return (
    <Container>
      {isLoading || courseDetails === null ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <CourseDetails courseDetails={courseDetails} state={state} />
      )}
    </Container>
  );
};

export default CoursePreviewPage;

import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { findCourseById } from 'services/api';
import { Spinner } from 'components/Spinner/Spinner.styled';

export const CourseDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const goBackHref = location.state?.from ?? '/';
  const [courseDetails, setCourseDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(id);

  useEffect(() => {
    const loadCourseDetails = async id => {
      setIsLoading(true);
      try {
        console.log('useeffect');
        const responseData = await findCourseById(id);
        if (!responseData) {
          console.log(
            'Sorry, something went wrong. We can not find this course.'
          );
          return;
        }
        setCourseDetails(responseData);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    loadCourseDetails(id);
  }, [id]);

  console.log(courseDetails);

  const { title, description, lessons } = courseDetails;

  return (
    <>
      <Link to={goBackHref}>
        <button type="button">Go Back</button>
      </Link>

      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          {lessons.map(({ title, order }) => (
            <p>
              Lesson {order}: {title}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

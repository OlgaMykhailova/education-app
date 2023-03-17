import { useState } from 'react';
import { LessonItem } from 'components/LessonItem/LessonItem';
import { ActiveLesson } from 'components/ActiveLesson/ActiveLesson';
import {
  Button,
  TitleWrapper,
  Title,
  DescriptionTitle,
  Description,
  Link,
  List,
} from './CourseDetails.styled';

export const CourseDetails = ({ state, courseDetails }) => {
  const goBackHref = state?.from ?? '/';
  const { title, description, lessons } = courseDetails;

  const sortedLessons = lessons.sort((a, b) => {
    return a.order - b.order;
  });

  const currentLesson = localStorage.getItem(`${title}-current-lesson`)
    ? JSON.parse(localStorage.getItem(`${title}-current-lesson`))
    : sortedLessons[0];

  const [activeLesson, setActiveLesson] = useState(currentLesson);

  return (
    <>
      <Link to={goBackHref}>
        <Button type="button">Go Back</Button>
      </Link>
      <div>
        <TitleWrapper>
          <Title>{title}</Title>
          <DescriptionTitle>About this course:</DescriptionTitle>
          <Description>{description}</Description>
          <ActiveLesson activeLesson={activeLesson} courseTitle={title} />
        </TitleWrapper>
        <List>
          {sortedLessons.map(lesson => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              setActiveLesson={setActiveLesson}
            />
          ))}
        </List>
      </div>
    </>
  );
};

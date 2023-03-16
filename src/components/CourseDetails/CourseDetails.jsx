import { useState } from 'react';
import { LessonItem } from 'components/LessonItem/LessonItem';
import { ActiveLesson } from 'components/ActiveLesson/ActiveLesson';
import { Button, TitleWrapper, Title, TitleAccent, DescriptionTitle, Description, Link, List } from './CourseDetails.styled';

export const CourseDetails = ({ state, courseDetails }) => {
  const goBackHref = state?.from ?? '/';
  const { title, description, lessons } = courseDetails;
  const sortedLessons = lessons.sort((a, b) => {
    return a.order - b.order;
  });
  const initialValues = {
    order: sortedLessons[0].order || '',
    title: sortedLessons[0].title || '',
    link: sortedLessons[0].link || '',
    previewImageLink: sortedLessons[0].previewImageLink || '',
  };
  const [activeLesson, setActiveLesson] = useState(initialValues);

  return (
    <>
      <Link to={goBackHref}>
        <Button type="button">Go Back</Button>
      </Link>
      <div>
        <TitleWrapper>
          <Title><TitleAccent>{title}</TitleAccent></Title>
          <DescriptionTitle>About this course:</DescriptionTitle>
          <Description>{description}</Description>
          <ActiveLesson activeLesson={activeLesson} />
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

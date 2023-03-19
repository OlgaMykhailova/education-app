import { CoursesItem } from 'components/CoursesItem/CoursesItem';
import { List } from './CoursesList.styled';

export const CoursesList = ({ courses, state, page }) => {
  return (
    <List>
      {courses.slice((page - 1) * 10, page * 10).map(course => (
        <CoursesItem key={course.id} course={course} state={state} />
      ))}
    </List>
  );
};

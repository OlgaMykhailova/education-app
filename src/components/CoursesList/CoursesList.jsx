
import {  useLocation } from 'react-router-dom';
import { CoursesItem } from 'components/CoursesItem/CoursesItem';
import { List } from './CoursesList.styled';

export const CoursesList = ({ courses, page }) => {
  
  const location = useLocation();

  return (
    <List>
      {courses
        .slice((page - 1) * 10, page * 10)
        .map(
          (course) => (
           <CoursesItem key={course.id} course={course} state={{from: location}} />
          )
        )}
    </List>
  );
};

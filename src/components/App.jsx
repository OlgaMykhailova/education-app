import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const CoursesPage = lazy(() => import('../pages/CoursesPage/CoursesPage'));
const CoursePreviewPage = lazy(() =>
  import('../pages/CoursePreviewPage/CoursePreviewPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CoursesPage />} />
          <Route path="course-details/:id" element={<CoursePreviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

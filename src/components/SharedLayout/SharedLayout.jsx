import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WrapperSharedLayout, StyledContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <WrapperSharedLayout>
        <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <StyledContainer
        position="top-center"
        transition={Zoom}
        autoClose={5000}
        hideProgressBar={true}
      />
    </WrapperSharedLayout>
  );
};

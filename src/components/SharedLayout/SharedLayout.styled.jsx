import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const WrapperSharedLayout = styled.div`
  height: 100vh;
`;

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    min-height: 150px;
    border-radius: 12px;
    background-color: rgb(0, 166, 152, 0.2);
  }
  .Toastify__toast--error {
    min-height: 150px;
    border-radius: 12px;
    background-color: rgb(234, 85, 43, 0.2);
  }
  .Toastify__close-button {
    margin-top: 10px;
    margin-right: 12px;
  }
`;

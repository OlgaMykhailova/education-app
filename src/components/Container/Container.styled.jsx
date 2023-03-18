import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 640px;
  padding: 130px 5px 0 5px;

  @media screen and (min-width: 768px) {
    padding: 130px 16px 0 16px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

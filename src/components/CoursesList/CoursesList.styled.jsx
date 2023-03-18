import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

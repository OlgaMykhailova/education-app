import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(85 187 218);
`;

export const HeaderWrap = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 1412px;
  padding: 0 16px;
  height: 100%;
  
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 28px;
`;

export const Slogan = styled.p`
  margin-left: auto;
  font-weight: 700;
  font-size: 28px;
  color: white;
`;

import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: fixed;
  display: flex;
  z-index: 10;
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
  width: 640px;
  padding: 0 16px;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 28px;
`;

export const Slogan = styled.h1`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-left: auto;
    font-weight: 700;
    font-size: 24px;
    color: white;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

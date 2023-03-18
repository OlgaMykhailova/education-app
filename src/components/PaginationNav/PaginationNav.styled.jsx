import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 75px;
  height: 30px;
  border-radius: 12px;
  border: none;
  color: white;
  background-color: rgb(0, 166, 152);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  min-width: 35px;
  margin: 0 20px;
  color: rgb(0, 166, 152);
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

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
  width: 100px;
  height: 40px;
  border-radius: 12px;
  border: none;
  color: white;
  background-color: rgb(0, 166, 152);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
`;

export const Text = styled.span`
  margin: 0 20px;
  color: rgb(0, 166, 152);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
`;

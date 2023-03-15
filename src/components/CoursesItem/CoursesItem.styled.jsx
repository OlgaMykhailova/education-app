import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  width: 670px;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(246, 246, 247);
`;

export const Link = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: rgb(0, 166, 152);
  font-weight: 700;
  letter-spacing: 0.03em;
  font-size: 28px;
  line-height: 40px;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const CardFooter = styled.div`
  margin-top: 15px;
`;

export const Text = styled.p`
  color: rgb(0, 0, 0);
  letter-spacing: 0.03em;
  font-size: 18px;
  line-height: 1.4;
`;

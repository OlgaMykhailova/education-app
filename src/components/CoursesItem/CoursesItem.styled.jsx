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
  font-size: 24px;
  line-height: 40px;
  padding: 12px 10px 14px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 166, 152);
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  color: rgb(0, 0, 0);
  letter-spacing: 0.03em;
  line-height: 1.4;
`;

export const Text = styled.p`
  margin-top: 10px;
`;

export const TextSkills = styled.span`
  font-weight: 400;
`;

export const Description = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding: 12px 10px 14px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 184, 0);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 10px;
  color: rgb(0, 166, 152);
  font-weight: 500;
  font-size: 18px;
  padding: 12px 10px 14px;
  border-radius: 5px;
`;

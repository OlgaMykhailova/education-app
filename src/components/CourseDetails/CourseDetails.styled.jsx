import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
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
  background-color: rgb(85 187 218);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 60px;
  list-style: none;
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const TitleWrapper = styled.div`
padding-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 1280px) {
  display: block;
}
`

export const Title = styled.h2`
display: inline-block;
padding: 12px 20px 16px;
border-radius: 12px;
color: rgb(255, 255, 255);
background-color: rgb(234 85 43);
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`

export const DescriptionTitle =styled.p`
margin: 40px 0 15px;
font-weight: 500;
font-size: 20px;
color: rgb(0, 166, 152);
`

export const Description = styled.p`
text-align: center;
margin-bottom: 32px;
font-size: 16px;
color: rgb(0, 166, 152);
@media screen and (min-width: 768px) {
  text-align: left;
  font-size: 18px;
}
`
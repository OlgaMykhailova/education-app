import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  width: 310px;
  margin: 0 auto;
  padding: 4px;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(246, 246, 247);
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 358px;
    padding: 4px;
  }
  @media screen and (min-width: 1280px) {
    width: 604px;
    padding: 15px;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 86px;
  margin-bottom: 20px;
  padding: 5px;
  text-align: center;
  color: rgb(0, 166, 152);
  font-weight: 700;
  letter-spacing: 0.03em;
  font-size: 20px;
  line-height: 30px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 166, 152);
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 302px;
  height: 171px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 198px;
  }
  @media screen and (min-width: 1280px) {
    width: 574px;
    height: 324px;
  }
`;

export const VideoWrapper = styled.div`
  .video-js .vjs-big-play-button {
    top: 45%;
    left: 45%;
  }
`;

export const Video = styled.video`
  width: 302px;
  height: 171px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 198px;
  }
  @media screen and (min-width: 1280px) {
    width: 574px;
    height: 324px;
  }
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
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const TextSkills = styled.span`
  font-weight: 400;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 96px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 10px 14px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 184, 0);
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 10px;
  color: rgb(0, 166, 152);
  font-weight: 500;
  font-size: 16px;
  padding: 12px 10px 14px;
  border-radius: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

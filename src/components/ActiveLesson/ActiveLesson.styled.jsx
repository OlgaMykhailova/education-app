import styled from 'styled-components';
import { ReactComponent as LockedVideo } from '../../media/locked-video.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 40px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const VideoWrapper = styled.div`
  .video-js .vjs-big-play-button {
    top: 45%;
    left: 45%;
  }
  width: 310px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 736px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const Video = styled.video`
  width: 310px;
  height: 175px;
  @media screen and (min-width: 768px) {
    width: 736px;
    height: 414px;
  }
`;

export const PromptText = styled.p`
  margin: 20px 0;
  color: rgb(0, 166, 152);
  font-size: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const LockedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 175px;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(0, 0, 0);
  @media screen and (min-width: 768px) {
    width: 736px;
    height: 414px;
    margin: 20px 0;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const LockedText = styled.p`
  padding: 8px 14px 8px;
  margin-bottom: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: rgb(234 85 43);
  @media screen and (min-width: 768px) {
    padding: 12px 20px 16px;
    margin-bottom: 60px;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const LockedVideoStyled = styled(LockedVideo)`
  width: 50px;
  height: 50px;
  fill: rgb(234 85 43);
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const LessonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const LessonText = styled.p`
  display: inline-block;
  padding: 4px 11px 8px;
  margin-bottom: 15px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 24px;
  color: white;
  background-color: rgb(85 187 218);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media screen and (min-width: 1280px) {
    margin-right: 5px;
  }
`;

export const TitleText = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: rgb(0, 166, 152);
`;

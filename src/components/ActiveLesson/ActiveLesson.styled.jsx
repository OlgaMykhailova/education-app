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
  width: 310px;
  border-radius: 24px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 736px;
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
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const LockedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 405px;
  margin-right: 120px;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(0, 0, 0);
`;

export const LockedText = styled.p`
  padding: 12px 20px 16px;
  margin-bottom: 60px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 24px;
  color: white;
  background-color: rgb(234 85 43);
`;

export const LockedVideoStyled = styled(LockedVideo)`
  width: 120px;
  height: 120px;
  fill: rgb(234 85 43);
`;

export const LessonText = styled.p`
  display: inline-block;
  padding: 4px 11px 8px;
  margin-right: 5px;
  margin-bottom: 15px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 24px;
  color: white;
  background-color: rgb(85 187 218);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const TitleText = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: rgb(0, 166, 152);
`;

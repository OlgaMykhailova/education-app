import styled from 'styled-components';
import { ReactComponent as LockedVideo } from '../../media/locked-video.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VideoWrapper = styled.div`
  width: 720px;
  margin-right: 120px;
  border-radius: 24px;
  overflow: hidden;
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
`

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

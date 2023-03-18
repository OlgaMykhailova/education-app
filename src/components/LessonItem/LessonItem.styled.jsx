import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(246, 246, 247);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 604px;
    height: 200px;
    padding: 15px;
  }
  @media screen and (min-width: 1412px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 302px;
  height: 171px;
  object-fit: contain;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    object-fit: cover;
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }
`;

export const LessonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const TypeText = styled.p`
  display: inline-block;
  margin-right: auto;
  padding: 4px 9px 7px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(234 85 43);
`;

export const LessonTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LessonText = styled.p`
  display: inline-block;
  color: rgb(0, 166, 152);
`;

export const LessonTextAccent = styled.p`
  display: inline-block;
  padding: 4px 9px 7px;
  margin-right: 10px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(85 187 218);
`;

export const DurationText = styled.p`
  display: inline-block;
  margin-right: auto;
  padding: 4px 9px 7px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 166, 152);
`;

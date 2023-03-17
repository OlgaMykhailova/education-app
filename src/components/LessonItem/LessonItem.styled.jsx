import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 670px;
  height: 200px;
  padding: 15px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: rgb(246, 246, 247);
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
  object-fit: cover;
  border-radius: 12px;
`;

export const LessonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px;
  font-size: 15px;
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

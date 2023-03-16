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
  justify-content: start;
  height: 100%;
  padding: 10px;
  font-size: 16px;
`;

export const TypeText = styled.span`
  margin-bottom: 45px;
`;

export const TypeTextAccent = styled.span`
  padding: 4px 6px 7px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(234 85 43);
`;

export const LessonText = styled.p`
  margin-bottom: 45px;
  color: rgb(0, 166, 152);
`;

export const LessonTextAccent = styled.span`
  padding: 4px 6px 7px;
  margin-right: 5px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(85 187 218);
`;

export const DurationText = styled.span`
  padding: 4px 6px 7px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 166, 152);
`;

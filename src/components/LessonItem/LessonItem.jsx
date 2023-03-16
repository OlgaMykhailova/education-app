import {
  Img,
  Item,
  LessonInfoWrapper,
  TypeText,
  TypeTextAccent,
  LessonText,
  LessonTextAccent,
  DurationText,
} from './LessonItem.styled';

export const LessonItem = ({ lesson, setActiveLesson }) => {
  const { title, order, link, previewImageLink, type, duration } = lesson;

  const minutes = Math.floor(duration / 60);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openLesson = () => {
    setActiveLesson({ title, order, link, previewImageLink, type });
    scrollToTop();
  };

  return (
    <Item onClick={openLesson}>
      <Img
        src={`${previewImageLink}/lesson-${order}.webp`}
        alt={title}
        width="160"
        height="160"
        onError={e =>
          (e.currentTarget.src =
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
        }
      />
      <LessonInfoWrapper>
        <TypeText>
          <TypeTextAccent>{type}</TypeTextAccent>
        </TypeText>
        <LessonText>
          <LessonTextAccent>Lesson: {order}</LessonTextAccent> {title}
        </LessonText>
        <p>
          <DurationText>{minutes}min</DurationText>
        </p>
      </LessonInfoWrapper>
    </Item>
  );
};
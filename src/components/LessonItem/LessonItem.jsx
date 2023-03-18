import {
  Img,
  Item,
  LessonInfoWrapper,
  TypeText,
  LessonTextWrapper,
  LessonText,
  LessonTextAccent,
  DurationText,
} from './LessonItem.styled';

export const LessonItem = ({ lesson, setActiveLesson }) => {
  const { title, order, previewImageLink, type, duration } = lesson;

  const minutes = Math.floor(duration / 60);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openLesson = () => {
    setActiveLesson(lesson);
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
        <TypeText>{type}</TypeText>
        <LessonTextWrapper>
          <LessonTextAccent>Lesson: {order}</LessonTextAccent>
          <LessonText>{title}</LessonText>
        </LessonTextWrapper>
        <DurationText>{minutes}min</DurationText>
      </LessonInfoWrapper>
    </Item>
  );
};

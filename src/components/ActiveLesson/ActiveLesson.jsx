import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {
  Wrapper,
  VideoWrapper,
  LessonText,
  TitleText,
  LockedWrapper,
  LockedText,
  LockedVideoStyled,
} from './ActiveLesson.styled';

export const ActiveLesson = ({ activeLesson, courseTitle }) => {
  const ref = useRef(null);

  const { previewImageLink, order, link, title, status } = activeLesson;

  console.log(activeLesson);

  useEffect(() => {
    if (ref.current) {
      const player = videojs(ref.current);
      player.poster(`${previewImageLink}/lesson-${order}.webp`);
      player.src({ src: link, type: 'application/x-mpegURL' });
      player.width(720);
      player.height('auto');

      const updateTime = () => {
        localStorage.setItem(
          `${courseTitle}-lesson${order}-videoplayer-current-time`,
          JSON.stringify(player.currentTime())
        );
      };

      const updateStorage = () => {
        if (
          localStorage.getItem(
            `${courseTitle}-lesson${order}-videoplayer-current-time`
          )
        ) {
          player.currentTime(
            localStorage.getItem(
              `${courseTitle}-lesson${order}-videoplayer-current-time`
            )
          );
        }
        player.on('timeupdate', updateTime);
      };

      player.on('loadedmetadata', updateStorage);

      const changePlayBackRate = e => {
        if (e.code === 'Period') {
          player.playbackRate(2);
        }
        if (e.code === 'Comma') {
          player.playbackRate(1);
        }
      };

      player.on('keydown', changePlayBackRate);
      return () => {
        player.off('loadedmetadata', updateStorage);
        player.off('timeupdate', updateTime);
        player.off('keydown', changePlayBackRate);
      };
    }
  }, [previewImageLink, order, link, courseTitle]);

  useEffect(() => {
    localStorage.setItem(
      `${courseTitle}-current-lesson`,
      JSON.stringify(activeLesson)
    );
  }, [courseTitle, activeLesson]);

  console.log(status);

  return (
    <Wrapper>
      {status === 'locked' ? (
        <LockedWrapper>
          <LockedText>
            This video is locked. Please try our subscription
          </LockedText>
          <LockedVideoStyled />
        </LockedWrapper>
      ) : (
        <VideoWrapper>
          <video
            id="my_video"
            className="video-js"
            controls
            preload="auto"
            data-setup='{ "playbackRates": [0.5, 1, 1.5, 2] }'
            ref={ref}
          ></video>
        </VideoWrapper>
      )}
      <div>
        <LessonText>Lesson: {order}</LessonText>
        <TitleText> {title}</TitleText>
      </div>
    </Wrapper>
  );
};

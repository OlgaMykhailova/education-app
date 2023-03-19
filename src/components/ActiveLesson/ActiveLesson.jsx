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
  Video,
  PromptText,
  LessonWrapper,
} from './ActiveLesson.styled';

export const ActiveLesson = ({ activeLesson, courseId }) => {
  const ref = useRef(null);

  const { id, previewImageLink, order, link, title, status } = activeLesson;

  useEffect(() => {
    if (ref.current) {
      const player = videojs(ref.current);
      player.src({ src: link, type: 'application/x-mpegURL' });

      const updateTime = () => {
        localStorage.setItem(
          `${courseId}-lesson${id}-videoplayer-current-time`,
          JSON.stringify(player.currentTime())
        );
      };

      const updateStorage = () => {
        if (
          localStorage.getItem(
            `${courseId}-lesson${id}-videoplayer-current-time`
          )
        ) {
          player.currentTime(
            localStorage.getItem(
              `${courseId}-lesson${id}-videoplayer-current-time`
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
  }, [previewImageLink, link, courseId, id]);

  useEffect(() => {
    localStorage.setItem(
      `${courseId}-current-lesson`,
      JSON.stringify(activeLesson)
    );
  }, [courseId, activeLesson]);

  console.log(status);

  return (
    <Wrapper>
      {status === 'locked' ? (
        <div>
          <LockedWrapper>
            <LockedText>
              This video is locked. Please try our subscription
            </LockedText>
            <LockedVideoStyled />
          </LockedWrapper>
        </div>
      ) : (
        <div>
          <VideoWrapper>
            <Video
              id="my_video"
              className="video-js"
              controls
              preload="auto"
              data-setup='{ "playbackRates": [0.5, 1, 1.5, 2] }'
              ref={ref}
            ></Video>
          </VideoWrapper>
          <PromptText>{`You can change playback rate by keyboard using ">" to 2x or "<" to 1x speed`}</PromptText>
        </div>
      )}
      <LessonWrapper>
        <LessonText>Lesson: {order}</LessonText>
        <TitleText> {title}</TitleText>
      </LessonWrapper>
    </Wrapper>
  );
};

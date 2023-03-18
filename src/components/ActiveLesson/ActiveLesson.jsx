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
} from './ActiveLesson.styled';

export const ActiveLesson = ({ activeLesson, courseTitle }) => {
  const ref = useRef(null);

  const { previewImageLink, order, link, title, status } = activeLesson;

  console.log(activeLesson);

  useEffect(() => {
    if (ref.current) {
      const player = videojs(ref.current);
      player.src({ src: link, type: 'application/x-mpegURL' });

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

      player.on('waiting', function () {
        this.addClass('vjs-custom-waiting');
      });
      player.on('playing', function () {
        this.removeClass('vjs-custom-waiting');
      });
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
      <div>
        <LessonText>Lesson: {order}</LessonText>
        <TitleText> {title}</TitleText>
      </div>
    </Wrapper>
  );
};

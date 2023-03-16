import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {
  Wrapper,
  VideoWrapper,
  LessonText,
  LessonTextAccent,
  TitleText,
} from './ActiveLesson.styled';

export const ActiveLesson = ({ activeLesson }) => {
  const ref = useRef(null);

  const { previewImageLink, order, link, title } = activeLesson;

  useEffect(() => {
    const player = videojs(ref.current);
    player.poster(`${previewImageLink}/lesson-${order}.webp`);
    player.src({ src: link, type: 'application/x-mpegURL' });
    player.width(720);
    player.height('auto');
    
    const updateTime = () => {
      localStorage.setItem(
        `lesson${order}-videoplayer-current-time`,
        JSON.stringify(player.currentTime())
      );
    };

    const updateStorage = () => {
      if (localStorage.getItem(`lesson${order}-videoplayer-current-time`)) {
        player.currentTime(
          localStorage.getItem(`lesson${order}-videoplayer-current-time`)
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
  }, [previewImageLink, order, link]);

  return (
    <Wrapper>
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
      <div>
        <LessonText>
          <LessonTextAccent>Lesson: {order}</LessonTextAccent>
        </LessonText>
        <TitleText> {title}</TitleText>
      </div>
    </Wrapper>
  );
};

import { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import {
  Wrapper,
  Link,
  Image,
  Title,
  CardFooter,
  Text,
  TextSkills,
  TextContainer,
  Description,
} from './CoursesItem.styled';

export const CoursesItem = ({ course, state }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const {
    id,
    title,
    previewImageLink,
    description,
    lessonsCount,
    rating,
    meta,
  } = course;

  useEffect(() => {
    if (ref.current) {
      const player = videojs(ref.current);
      player.src({
        src: meta.courseVideoPreview?.link,
        type: 'application/x-mpegURL',
      });
      player.width(640);
      player.height(360);
    }
  }, [isHovered, meta.courseVideoPreview?.link]);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`course-details/${id}`} state={state}>
        <Title>{title}</Title>
        {isHovered ? (
          <div>
            <video
              id="my_video"
              className="video-js"
              controls
              muted
              autoPlay
              preload="auto"
              data-setup="{}"
              width="640"
              height="360"
              ref={ref}
            ></video>
          </div>
        ) : (
          <Image
            src={`${previewImageLink}/cover.webp`}
            alt={title}
            width="640"
            height="360"
          />
        )}
        <CardFooter>
          <Description>{description}</Description>
          <TextContainer>
            <Text>
              {lessonsCount} lessons | rating: {rating}
            </Text>
            {meta.skills && (
              <Text>
                Skills: <TextSkills>{meta.skills.join(', ')}</TextSkills>
              </Text>
            )}
          </TextContainer>
        </CardFooter>
      </Link>
    </Wrapper>
  );
};

import { useState } from 'react';

import { Wrapper, Link, Image, Title, CardFooter, Text } from './CoursesItem.styled';

export const CoursesItem = ({ course, state }) => {
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

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`course-details/${id}`} state={state}>
        <Title>{title}</Title>
        {isHovered ? (
          <video width="640" height="360" autoPlay muted controls>
            <source
              src={meta.courseVideoPreview?.link}
              type="application/x-mpegURL"
            />
          </video>
        ) : (
          <Image
            src={`${previewImageLink}/cover.webp`}
            alt={title}
            width="640"
            height="360"
          />
        )}
        <CardFooter>
          <Text>{description}</Text>
          <Text>
            {lessonsCount} lessons | rating: {rating}
          </Text>
          {meta.skills && <Text>Skills: {meta.skills.join(', ')}</Text>}
        </CardFooter>
      </Link>
    </Wrapper>
  );
};

export const CoursesList = ({ courses }) => {
  return (
    <ul>
      {courses
        .slice(10, 20)
        .map(
          ({
            id,
            title,
            previewImageLink,
            description,
            lessonsCount,
            rating,
            meta,
          }) => (
            <li key={id}>
              <p>{title}</p>
              <img
                src={`${previewImageLink}/cover.webp`}
                alt={title}
                width="320"
              />
              <p>{description}</p>
              <p>{lessonsCount} lessons</p>
              <p>Skills:</p>
              <ul>
                {meta.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              <p>rating: {rating}</p>
            </li>
          )
        )}
    </ul>
  );
};

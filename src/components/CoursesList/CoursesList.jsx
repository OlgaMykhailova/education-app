export const CoursesList = ({ courses, page }) => {
  return (
    <ul>
      {courses
        .slice((page - 1)*10 , page*10)
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
                height="240"
              />
              <p>{description}</p>
              <p>{lessonsCount} lessons</p>
              <p>Skills:</p>
              <ul>
                {meta.skills?.map((skill, idx) => (
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

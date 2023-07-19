interface IMovie {
  genres: string[];
  title: string;
  coverImg: any;
}

function Movie({ genres, title, coverImg }: IMovie) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;

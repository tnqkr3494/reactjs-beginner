import { useQuery } from "react-query";
import Movie from "./Movie";

function Home() {
  const fetchMovieInfo = () => {
    return fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    ).then((response) => response.json());
  };

  const { isLoading, data } = useQuery("movies", fetchMovieInfo);

  return (
    <div>
      {isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <div>
          {data?.data.movies.map((movie: any) => (
            <Movie
              key={movie.id}
              genres={movie.genres}
              title={movie.title}
              coverImg={movie.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

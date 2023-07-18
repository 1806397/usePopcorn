import Movie from "./Movie";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
function MovieList({ movies, isLoading, error }) {

  return (
    <ul className="list">
      {isLoading && <Loader />}
      {!isLoading && !error && movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
      {error && <ErrorMessage error={error} />}
    </ul>
  );
}
export default MovieList;

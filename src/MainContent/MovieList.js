import Movie from "./Movie";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
function MovieList({ movies, isLoading, error, setSelectedId }) {
  // console.log(movies);
  return (
    <ul className="list list-movies">
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            setSelectedId={setSelectedId}
          />
        ))}
      {error && <ErrorMessage error={error} />}
    </ul>
  );
}
export default MovieList;

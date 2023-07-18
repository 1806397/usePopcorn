import Movie from "./Movie";
import Loader from "./Loader/Loader";
function MovieList({ movies, isLoading }) {
  return (
    isLoading ? <Loader /> : <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
export default MovieList;

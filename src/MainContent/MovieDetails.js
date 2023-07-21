import { useEffect, useState } from "react";
import StarRating from "./Rating/StarRating";
import Loader from "./Loader/Loader";

function MovieDetails({ selectedId, setSelectedId }) {
  const KEY = "f84fc31d";
  const onCloseMovie = () => setSelectedId(null);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [watched,setWatched]=useState([]);
  function handleAddWatch(movie){
    setWatched(watched=>[...watched,movie]);
  }
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  console.log(title, year);
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              <em>Starring {actors}</em>
            </p>
            <p>
              <em>Directed By {director}</em>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;

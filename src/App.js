import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
const KEY = "e49bc0e4";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  //a
  const [watched, setWatched] = useState(function () {
    const storeValue = JSON.parse(localStorage.getItem("watched")) || [];
    return storeValue;
  });
  const onCloseMovie = () => setSelectedId(null);
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );
  useEffect(
    function () {
      //closing a call
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          //adding signal to fetch
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            setError("");
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      onCloseMovie();
      fetchMovie();
      //clearing useEffect with return function
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  // <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} />;
  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} />
      <Main
        setSelectedId={setSelectedId}
        movies={movies}
        isLoading={isLoading}
        error={error}
        selectedId={selectedId}
        onAddWatched={handleAddWatched}
        watched={watched}
        onDeleteWatched={handleDeleteWatched}
      />
    </>
  );
}

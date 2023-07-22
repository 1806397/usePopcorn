import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import useMovies from "./MainContent/CustomHook/useMovies";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState(function () {
    const storeValue = JSON.parse(localStorage.getItem("watched")) || [];
    return storeValue;
  });
  function onCloseMovie() {
    setSelectedId(null);
  }
  const { movies, isLoading, error } = useMovies(query, onCloseMovie);

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

import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import useMovies from "./MainContent/CustomHook/useMovies";
import useLocalStorageState from "./MainContent/CustomHook/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  function onCloseMovie() {
    setSelectedId(null);
  }
  const { movies, isLoading, error } = useMovies(query, onCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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

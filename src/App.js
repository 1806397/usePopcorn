import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import tempMovieData from "./Data/tempMovieData";
const KEY = "f84fc31d";
export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`).
      then(res => res.json()).
      then(data => setMovies(data.Search));

  }, [])
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

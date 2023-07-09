import { useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import tempMovieData from "./Data/tempMovieData";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

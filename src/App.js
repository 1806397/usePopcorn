import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import tempMovieData from "./Data/tempMovieData";
const KEY = "f84fc31d";
const query = "interstellar";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchMovie() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovie();
  }, [])
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} isLoading={isLoading} />
    </>
  );
}

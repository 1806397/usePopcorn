import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Main from "./MainContent/Main";
import tempMovieData from "./Data/tempMovieData";
const KEY = "f84fc31d";
const query = "interstellar";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        if (!res.ok) throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "False")
          throw new Error("Movie not found");
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);

      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [])
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} isLoading={isLoading} error={error} />
    </>
  );
}

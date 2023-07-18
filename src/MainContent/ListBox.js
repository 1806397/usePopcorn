import { useState } from "react";
import MovieList from "./MovieList";
function ListBox({ movies, isLoading, error }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} isLoading={isLoading} error={error} />}
    </div>
  );
}
export default ListBox;

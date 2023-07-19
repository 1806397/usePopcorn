import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import MovieDetails from "../MovieDetails";
function WatchedBox({ selectedId, setSelectedId }) {
  const [isOpen2, setIsOpen2] = useState(true);

  const [watched, setWatched] = useState([]);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 &&
        (selectedId ? (
          <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} />
        ) : (
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        ))}
    </div>
  );
}
export default WatchedBox;

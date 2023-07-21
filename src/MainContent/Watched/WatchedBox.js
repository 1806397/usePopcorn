import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import MovieDetails from "../MovieDetails";
function WatchedBox({
  selectedId,
  setSelectedId,
  onAddWatched,
  watched,
  onDeleteWatched,
}) {
  const [isOpen2, setIsOpen2] = useState(true);
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
          <MovieDetails
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            onAddWatched={onAddWatched}
            watched={watched}
          />
        ) : (
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList
              watched={watched}
              onDeleteWatched={onDeleteWatched}
            />
          </>
        ))}
    </div>
  );
}
export default WatchedBox;

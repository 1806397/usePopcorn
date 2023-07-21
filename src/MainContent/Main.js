import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({
  setSelectedId,
  movies,
  isLoading,
  error,
  selectedId,
  onAddWatched,
  watched,
  onDeleteWatched,
}) {
  //minor change
  return (
    <main className="main">
      <ListBox
        setSelectedId={setSelectedId}
        movies={movies}
        isLoading={isLoading}
        error={error}
      />
      <WatchedBox
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        onAddWatched={onAddWatched}
        watched={watched}
        onDeleteWatched={onDeleteWatched}
      />
    </main>
  );
}
export default Main;

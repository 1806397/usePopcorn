import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({ setSelectedId, movies, isLoading, error, selectedId }) {
  //minor change
  return (
    <main className="main">
      <ListBox
        setSelectedId={setSelectedId}
        movies={movies}
        isLoading={isLoading}
        error={error}
      />
      <WatchedBox selectedId={selectedId} setSelectedId={setSelectedId} />
    </main>
  );
}
export default Main;

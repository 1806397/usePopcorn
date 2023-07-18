import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({ movies, isLoading, error }) {
  //minor change
  return (
    <main className="main">
      <ListBox movies={movies} isLoading={isLoading} error={error} />
      <WatchedBox />
    </main>
  );
}
export default Main;

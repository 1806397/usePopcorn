import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({ movies }) {
  //minor change
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}
export default Main;

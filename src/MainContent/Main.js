import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({ movies, isLoading }) {
  //minor change
  return (
    <main className="main">
      <ListBox movies={movies} isLoading={isLoading}/>
      <WatchedBox />
    </main>
  );
}
export default Main;

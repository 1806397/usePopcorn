import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";
function NavBar({ movies, query, setQuery }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
}
export default NavBar;

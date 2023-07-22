import { useEffect } from "react";
import { useRef } from "react";

function Search({ query, setQuery }) {
  const inputElement = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        //checking if search bar is already on focus,
        // if it is Enter keypress won't remove entered query in search bar
        if (document.activeElement === inputElement.current) return;
        //else
        // By pressing Enter focus will be on Search bar
        if (e.code === "Enter") {
          inputElement.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      // Clearing the function
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
export default Search;

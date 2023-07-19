function MovieDetails({ selectedId, setSelectedId }) {
  const onCloseMovie = () => setSelectedId(null);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
export default MovieDetails;

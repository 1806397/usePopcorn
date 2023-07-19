function ErrorMessage({ error }) {
  return (
    <p className="error">
      <span>⛔{error}</span>
    </p>
  );
}
export default ErrorMessage;

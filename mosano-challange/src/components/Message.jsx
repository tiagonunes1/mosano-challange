export default function Message({ message }) {
  return (
    <div id="message-container">
      <div id="message" className="alert alert-info" role="alert">
        {message}
      </div>
    </div>
  );
}

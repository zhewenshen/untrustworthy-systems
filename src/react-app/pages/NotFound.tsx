import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "72px", margin: "0" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;

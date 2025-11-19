import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/calculator">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>
            Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

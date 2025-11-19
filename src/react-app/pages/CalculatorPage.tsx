import { Link } from "react-router-dom";
import Calculator from "../Calculator.tsx";

function CalculatorPage() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator />
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default CalculatorPage;

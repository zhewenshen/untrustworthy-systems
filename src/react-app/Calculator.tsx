import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState("");
  const [op, setOp] = useState("");

  const handleNum = (n: string) => {
    if (display === "0") {
      setDisplay(n);
    } else {
      setDisplay(display + n);
    }
  };

  const handleOp = (o: string) => {
    setPrev(display);
    setOp(o);
    setDisplay("0");
  };

  const handleEquals = () => {
    const a = parseFloat(prev);
    const b = parseFloat(display);
    let result = 0;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    setDisplay(String(result));
    setPrev("");
    setOp("");
  };

  const handleClear = () => {
    setDisplay("0");
    setPrev("");
    setOp("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "20px auto" }}>
      <div style={{
        padding: "10px",
        border: "1px solid black",
        marginBottom: "10px",
        textAlign: "right",
        fontSize: "24px",
        backgroundColor: "white",
        color: "black"
      }}>
        {display}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        <button onClick={() => handleNum("7")} style={btnStyle}>7</button>
        <button onClick={() => handleNum("8")} style={btnStyle}>8</button>
        <button onClick={() => handleNum("9")} style={btnStyle}>9</button>
        <button onClick={() => handleOp("/")} style={btnStyle}>/</button>
        <button onClick={() => handleNum("4")} style={btnStyle}>4</button>
        <button onClick={() => handleNum("5")} style={btnStyle}>5</button>
        <button onClick={() => handleNum("6")} style={btnStyle}>6</button>
        <button onClick={() => handleOp("*")} style={btnStyle}>*</button>
        <button onClick={() => handleNum("1")} style={btnStyle}>1</button>
        <button onClick={() => handleNum("2")} style={btnStyle}>2</button>
        <button onClick={() => handleNum("3")} style={btnStyle}>3</button>
        <button onClick={() => handleOp("-")} style={btnStyle}>-</button>
        <button onClick={() => handleNum("0")} style={btnStyle}>0</button>
        <button onClick={handleClear} style={btnStyle}>C</button>
        <button onClick={handleEquals} style={btnStyle}>=</button>
        <button onClick={() => handleOp("+")} style={btnStyle}>+</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "20px",
  fontSize: "18px",
  border: "1px solid black",
  backgroundColor: "#ddd",
  cursor: "pointer"
};

export default Calculator;

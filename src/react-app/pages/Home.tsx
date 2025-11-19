function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <a href="https://trustworthy.systems/" target="_blank">
        <button style={{
          padding: "40px 80px",
          fontSize: "48px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "10px"
        }}>
          Go to Trustworthy Systems
        </button>
      </a>
    </div>
  );
}

export default Home;

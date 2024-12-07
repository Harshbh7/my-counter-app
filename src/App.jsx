

import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < 20) {
      setCounter((prev) => {
        if (prev >= 10 || (prev >= -20 && prev <= -10)) {
          return prev + 2;
        } else {
          return prev + 1;
        }
      });
    }
  };

  const handleDecrement = () => {
    if (counter > -20) {
      setCounter((prev) => {
        if (prev > 10 || (prev >= -20 && prev <= -10)) {
          return prev - 2;
        } else {
          return prev - 1;
        }
      });
    }
  };

  const getCounterColor = () => {
    if (counter > 0) return "#28a745";
    if (counter < 0) return "#dc3545";
    return "#000";
  };

  const getBackgroundColor = () => {
    if (counter > 0) return "rgba(40, 167, 69, 0.1)";
    if (counter < 0) return "rgba(220, 53, 69, 0.1)";
    return "rgba(0, 0, 0, 0.05)";
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        maxWidth: "90%",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: getBackgroundColor(),
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        transition: "background-color 0.3s",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Interactive Counter</h2>
      <div
        className="mb-4 p-3 border rounded"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: getCounterColor(),
          backgroundColor: "#fff",
          transition: "color 0.3s, transform 0.2s",
          transform: "scale(1.1)",
        }}
      >
        Counter Value: {counter}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          data-tooltip-id="increment-tooltip"
          data-tooltip-content="Increment the counter"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onClick={handleIncrement}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          +
        </button>
        <button
          data-tooltip-id="decrement-tooltip"
          data-tooltip-content="Decrement the counter"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#dc3545",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onClick={handleDecrement}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a71d2a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
        >
          -
        </button>
      </div>
      <Tooltip id="increment-tooltip" />
      <Tooltip id="decrement-tooltip" />
    </div>
  );
};

const AppContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <App />
    </div>
  );
};

export default AppContainer;

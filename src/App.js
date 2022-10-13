import { useState } from "react";
import "./App.css";

function App() {
  const [buttonCollor, setButtonColor] = useState("red");
  const newButtonColor = buttonCollor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonCollor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;

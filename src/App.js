import { useState } from "react";
import "./App.css";

function App() {
  const [buttonCollor, setButtonColor] = useState("red");
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const newButtonColor = buttonCollor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonCollor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checkBoxStatus}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        checked={checkBoxStatus}
        onClick={() => setCheckBoxStatus(!checkBoxStatus)}
      />
    </div>
  );
}

export default App;

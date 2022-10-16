import { useState } from "react";
import "./App.css";

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonCollor, setButtonColor] = useState("red");
  const [buttonCollorLabel, setButtonColorLabel] = useState("blue");

  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const changeButtonLabel = () => {
    switch (buttonCollorLabel) {
      case "red":
        setButtonColorLabel("blue");
        break;
      case "blue":
        setButtonColorLabel("red");
        break;
      default:
        setButtonColorLabel("blue");
        break;
    }
  };

  const changeButtonColor = color => {
    switch (color) {
      case "red":
        setButtonColor("blue");
        changeButtonLabel();
        break;
      case "blue":
        setButtonColor("red");
        changeButtonLabel();
        break;
      case "gray":
        setButtonColor("gray");
        break;
      default:
        setButtonColor(buttonCollor);
        changeButtonLabel();
        break;
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonCollor, color: "white" }}
        onClick={() => changeButtonColor(buttonCollor)}
        disabled={checkBoxStatus}
      >
        Change to {buttonCollorLabel}
      </button>
      <input
        type="checkbox"
        checked={checkBoxStatus}
        id="disable-button-checkbox"
        onChange={e => {
          setCheckBoxStatus(e.target.checked);
          changeButtonColor(e.target.checked ? "gray" : buttonCollor);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

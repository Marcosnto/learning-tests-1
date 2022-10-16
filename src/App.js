import { useState } from "react";
import "./App.css";

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonCollor, setButtonColor] = useState("MediumVioletRed");
  const [buttonCollorLabel, setButtonColorLabel] = useState("MidnightBlue");

  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const changeButtonLabel = () => {
    switch (buttonCollorLabel) {
      case "red":
        setButtonColorLabel("MidnightBlue");
        break;
      case "MidnightBlue":
        setButtonColorLabel("MediumVioletRed");
        break;
      default:
        setButtonColorLabel("MidnightBlue");
        break;
    }
  };

  const changeButtonColor = color => {
    switch (color) {
      case "MediumVioletRed":
        setButtonColor("MidnightBlue");
        changeButtonLabel();
        break;
      case "MidnightBlue":
        setButtonColor("MediumVioletRed");
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

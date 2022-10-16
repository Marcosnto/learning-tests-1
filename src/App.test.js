import { render, screen, fireEvent, logRoles } from "@testing-library/react";

import { replaceCameWithSpaces, App } from "./App";

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: /change to MidnightBlue/i,
  });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("button has correct initial color and updates when it clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: /change to MidnightBlue/i,
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: /change to MidnightBlue/i,
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
});

test("button is gray when disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: /change to MidnightBlue/i,
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);

  expect(colorButton).not.toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

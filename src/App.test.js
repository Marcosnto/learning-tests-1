import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when it clicked", () => {
  // const { container } = render(<App />);
  render(<App />);
  // logRoles(container);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

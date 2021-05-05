import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Button.stories";

it("renders the button in primary stat", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

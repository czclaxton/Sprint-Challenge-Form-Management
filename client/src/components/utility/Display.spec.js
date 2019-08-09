import React from "react";
import { render } from "@testing-library/react";
import Display from "../Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("props work", () => {
    const display = render(<Display count={3} />);
    display.getByText(/Current Count: 3/);
  });
  it("Component is dumb", () => {
    const display = render(<Display count={-400} />);
    display.getByText(/Current Count: -400/);
  });
});

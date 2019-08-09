import React from "react";
import { render } from "@testing-library/react";
import Title from "../Title";

describe("<Title />", () => {
  it("displays title text", () => {
    const title = render(<Title />);
    title.queryAllByText(/Sign In/);
  });
});

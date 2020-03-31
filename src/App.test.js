import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { getByText } from "@testing-library/dom";

describe("Main Page", () => {
  test("renders main message", () => {
    const { container } = render(<App />);
    const element = getByText(
      container,
      /a Nigéria é o país com maior população negra no mundo./i
    );

    expect(element).toBeInTheDocument();
  });

  test("renders secondary message", () => {
    const { container } = render(<App />);
    const element = getByText(container, /o segundo maior, é o Brasil./i);

    expect(element).toBeInTheDocument();
  });
});

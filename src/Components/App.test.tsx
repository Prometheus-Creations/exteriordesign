import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock('axios');

test("renders learn react link", () => {
  render(<App />);
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});

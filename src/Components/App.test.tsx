import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock('axios');

test("renders learn react link", () => {
  render(<App />);
 screen.getByText(/learn react/i);
 
});

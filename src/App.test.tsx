import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("ensure app render well", () => {
  test("render app component", () => {
    render(<App />);
    expect(screen.getByText(/Log in/)).toBeInTheDocument();
  });

  test("should have link to register now", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /register now!/i })
    ).toBeInTheDocument();
  });

  test("should have link to forgot password", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /Forgot password/i })
    ).toBeInTheDocument();
  });
  
});

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import LoginForm from "../index";

describe("ensure login form render well", () => {
  const onSubmitMock = jest.fn();

  afterEach(() => {
    onSubmitMock.mockReset();
  });

  test("should render login form", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/Remember me/i)).toBeInTheDocument();
  });

  test("should render login form elements properly", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    // check form fields
    const emailEl = screen.getByTestId("username-input");
    expect(emailEl).toBeInTheDocument();
    expect(emailEl).toHaveAttribute("name", "username");

    const titleEl = screen.getByTestId("password-input");
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveAttribute("name", "password");
  });

  test("should show require error messages for username field", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("username-input"), {
        target: { value: "" },
      });
    });
    await act(async () => {
      fireEvent.click(screen.getByText(/Log in/i));
    });
    expect(screen.getByText("Username field is required")).toBeInTheDocument();
  });

  test("should show require error messages for password field", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("password-input"), {
        target: { value: "" },
      });
    });
    await act(async () => {
      fireEvent.click(screen.getByText(/Log in/i));
    });
    expect(screen.getByText("Password field is required")).toBeInTheDocument();
  });

  test("should submit the login form with valid data", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("username-input"), {
        target: { value: "kaji" },
      });
      fireEvent.change(screen.getByTestId("password-input"), {
        target: { value: "123" },
      });
    });
    await act(async () => {
      fireEvent.click(screen.getByText(/Log in/i));
    });
    await waitFor(() => {
      screen.findByText("Dashboard");
    });
  });
  
});

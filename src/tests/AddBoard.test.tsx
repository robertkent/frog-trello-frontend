import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddBoardForm from "../components/Forms/AddBoardForm";
import { MockedProvider } from "@apollo/client/testing";

describe("Tests related to adding a new board", () => {
  it("displays the add board form", () => {
    render(
      <MockedProvider>
        <AddBoardForm />
      </MockedProvider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should validate the input fields and return an error if title is empty", async () => {
    render(
      <MockedProvider>
        <AddBoardForm />
      </MockedProvider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    const errorMessage = await screen.findByText(/Please enter a title/);

    expect(errorMessage).toBeInTheDocument();
  });
});

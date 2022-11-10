import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import AddCardForm from "../components/Forms/AddCardForm";

describe("Tests related to adding a new card to a board", () => {
  it("displays the add card form", async () => {
    render(
      <MockedProvider>
        <AddCardForm boardId="testboardid" />
      </MockedProvider>
    );

    const addNewCardButton = screen.getByText(/add new card/i);

    expect(addNewCardButton).toBeInTheDocument();

    fireEvent.click(addNewCardButton);

    const cardFormTitleInput = (await screen.findByPlaceholderText(
      "Title e.g. Design a logo"
    )) as HTMLElement;

    expect(cardFormTitleInput).toBeInTheDocument();
  });

  it("should validate the input fields and return errors if required fields are empty", async () => {
    render(
      <MockedProvider>
        <AddCardForm boardId="testboardid" />
      </MockedProvider>
    );

    const addNewCardButton = screen.getByText(/add new card/i);

    expect(addNewCardButton).toBeInTheDocument();

    fireEvent.click(addNewCardButton);

    const cardFormTitleInput = (await screen.findByPlaceholderText(
      "Title e.g. Design a logo"
    )) as HTMLElement;

    const addCardButton = screen.getByText(/add card/i);

    fireEvent.click(addCardButton);

    const errorMessage = await screen.findByText(
      /Please enter a title for this card/
    );

    expect(errorMessage).toBeInTheDocument();
  });
});

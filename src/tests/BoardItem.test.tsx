import React from "react";
import { render, screen } from "@testing-library/react";
import BoardItem from "../components/Boards/BoardItem";
import Board from "../models/Board";
import Card from "../models/Card";
import { MockedProvider } from "@apollo/client/testing";
import { emptyBoardMock } from "../mocks/mocks";

describe("Tests related to a single Board Item", () => {
  test("Should display title of given board", () => {
    const board = new Board("ID123", "Title 1", []);

    render(
      <MockedProvider mocks={emptyBoardMock}>
        <BoardItem _id={board._id} title={board.title} cards={board.cards} />
      </MockedProvider>
    );

    const renderedBoardHeading = screen.getByRole("heading");

    expect(renderedBoardHeading).toBeInTheDocument();

    expect(renderedBoardHeading).toHaveTextContent("Title 1");
  });

  test("Should display delete board button", () => {
    const board = new Board("ID123", "Title 1", []);

    render(
      <MockedProvider mocks={emptyBoardMock}>
        <BoardItem _id={board._id} title={board.title} cards={board.cards} />
      </MockedProvider>
    );

    const deleteBoardButton = screen.getByText("Delete Board");

    expect(deleteBoardButton).toBeInTheDocument();

    expect(deleteBoardButton).toHaveTextContent("Delete Board");
  });

  test("Should display cards if cards are given", () => {
    const board = new Board("ID123", "Title 1", [
      new Card(
        "CARD1",
        "Title of Card 1",
        "ID123",
        "Card 1 Description",
        +new Date()
      ),
    ]);

    render(
      <MockedProvider mocks={emptyBoardMock}>
        <BoardItem _id={board._id} title={board.title} cards={board.cards} />
      </MockedProvider>
    );

    const renderedCardTitle = screen.getByText("Title of Card 1");

    expect(renderedCardTitle).toBeInTheDocument();
  });
});

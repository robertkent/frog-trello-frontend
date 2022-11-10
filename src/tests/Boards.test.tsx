import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Boards from "../components/Boards/Boards";
import { emptyBoardMock } from "../mocks/mocks";

describe("Tests related to a list of boards", () => {
  test("renders at least one board in the list", async () => {
    await render(
      <MockedProvider mocks={emptyBoardMock}>
        <Boards />
      </MockedProvider>
    );

    const boardTitle = await screen.findByText("test title");

    expect(boardTitle).toBeInTheDocument();
  });

  test("renders the boards wrapper component on the page with the add new board button in the next available spot", async () => {
    await render(
      <MockedProvider mocks={emptyBoardMock}>
        <Boards />
      </MockedProvider>
    );

    const button = await screen.findByText("Add New Board");

    expect(button).toBeInTheDocument();
  });
});

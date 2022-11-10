import GET_BOARDS from "../queries/getBoards";
import Board from "../models/Board";

export const emptyBoardMock = [
  {
    request: {
      query: GET_BOARDS,
    },
    result: {
      data: {
        getBoards: {
          boards: [new Board("testid", "test title", [])],
        },
      },
    },
  },
];

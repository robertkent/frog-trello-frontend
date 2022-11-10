import { gql, useMutation } from "@apollo/client";
import Board from "../models/Board";
import GET_BOARDS from "./getBoards";

const DELETE_BOARD = gql`
  mutation DeleteBoard($boardId: ID!) {
    deleteBoard(input: { boardId: $boardId }) {
      _id
      title
    }
  }
`;

interface DefineDeleteBoardResponse {
  deleteBoard: Board;
}

interface DefineDeleteBoardVariables {
  boardId: string;
}

export function useDeleteBoardMutation() {
  return useMutation<DefineDeleteBoardResponse, DefineDeleteBoardVariables>(
    DELETE_BOARD,
    {
      refetchQueries: [{ query: GET_BOARDS }, "getBoards"],
    }
  );
}

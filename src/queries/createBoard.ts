import { gql, useMutation } from "@apollo/client";
import Board from "../models/Board";
import GET_BOARDS from "./getBoards";

const CREATE_BOARD = gql`
  mutation CreateBoard($title: String!) {
    createBoard(input: { title: $title }) {
      _id
      title
      cards {
        title
      }
    }
  }
`;

interface DefineCreateBoardResponse {
  board: Board;
}

interface DefineCreateBoardVariables {
  title: string;
}

export function useCreateBoardMutation() {
  return useMutation<DefineCreateBoardResponse, DefineCreateBoardVariables>(
    CREATE_BOARD,
    {
      refetchQueries: [{ query: GET_BOARDS }, "getBoards"],
    }
  );
}

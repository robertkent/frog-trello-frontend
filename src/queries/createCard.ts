import { gql, useMutation } from "@apollo/client";
import Card from "../models/Board";
import GET_BOARDS from "./getBoards";

const CREATE_CARD = gql`
  mutation CreateCard(
    $title: String!
    $description: String
    $dueDate: String!
    $boardId: ID!
  ) {
    createCard(
      input: {
        title: $title
        description: $description
        dueDate: $dueDate
        board: $boardId
      }
    ) {
      _id
      title
      description
    }
  }
`;

interface DefineCreateCardResponse {
  card: Card;
}

interface DefineCreateCardVariables {
  title: string;
  description: string;
  dueDate: string;
  boardId: string;
}

export function useCreateCardMutation() {
  return useMutation<DefineCreateCardResponse, DefineCreateCardVariables>(
    CREATE_CARD,
    {
      refetchQueries: [{ query: GET_BOARDS }, "getBoards"],
    }
  );
}

import { gql, useMutation } from "@apollo/client";
import Board from "../models/Board";
import GET_BOARDS from "./getBoards";
import Card from "../models/Card";

const MOVE_CARD = gql`
  mutation MoveCard($boardId: ID!, $cardId: ID!) {
    moveCard(input: { boardId: $boardId, cardId: $cardId }) {
      _id
      title
    }
  }
`;

interface DefineMoveCardResponse {
  card: Card;
}

interface DefineMoveCardVariables {
  boardId: string;
  cardId: string;
}

export function useMoveCardMutation() {
  return useMutation<DefineMoveCardResponse, DefineMoveCardVariables>(
    MOVE_CARD,
    {
      refetchQueries: [{ query: GET_BOARDS }, "getBoards"],
    }
  );
}

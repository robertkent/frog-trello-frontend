import { gql, useMutation } from "@apollo/client";
import GET_BOARDS from "./getBoards";
import Card from "../models/Card";

const DELETE_CARD = gql`
  mutation DeleteCard($cardId: ID!) {
    deleteCard(input: { cardId: $cardId }) {
      _id
    }
  }
`;

interface DefineDeleteCardResponse {
  deleteCard: Card;
}

interface DefineDeleteCardVariables {
  cardId: string;
}

export function useDeleteCardMutation() {
  return useMutation<DefineDeleteCardResponse, DefineDeleteCardVariables>(
    DELETE_CARD,
    {
      refetchQueries: [{ query: GET_BOARDS }, "getBoards"],
    }
  );
}

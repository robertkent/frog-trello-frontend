import React from "react";
import { useDeleteBoardMutation } from "../../queries/deleteBoard";

type DeleteBoardProps = {
  boardId: string;
};

const DeleteBoardForm: React.FC<DeleteBoardProps> = (props) => {
  const [deleteBoard] = useDeleteBoardMutation();

  return (
    <button
      className="delete-board"
      onClick={async () =>
        await deleteBoard({ variables: { boardId: props.boardId } })
      }
    >
      Delete Board
    </button>
  );
};

export default DeleteBoardForm;

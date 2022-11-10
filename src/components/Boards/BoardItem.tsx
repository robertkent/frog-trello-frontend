import React, { DragEvent, useState } from "react";
import { CardItemInterface } from "../../interface/CardItemInterface";
import Cards from "../Cards/Cards";
import "./BoardItem.css";
import DeleteBoardForm from "../Forms/DeleteBoardForm";
import { useMoveCardMutation } from "../../queries/moveCard";

type BoardProps = {
  _id: string;
  title: string;
  cards: CardItemInterface[];
};

const BoardItem: React.FC<BoardProps> = (props) => {
  const [moveCard] = useMoveCardMutation();

  const onDragOver = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("droppable");
  };

  const onDragLeave = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("droppable");
  };

  const onDragEnd = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("droppable");
  };

  const onDrop = async (e: DragEvent<HTMLUListElement>) => {
    const cardId = e.dataTransfer!.getData("text/plain");
    const boardId = e.currentTarget.id;
    e.currentTarget.classList.remove("droppable");

    await moveCard({ variables: { cardId: cardId, boardId: boardId } });
  };

  return (
    <div className="board-container">
      <div className="board-item">
        <h2>{props.title}</h2>
        <Cards
          cards={props.cards}
          boardId={props._id}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
        />
        <DeleteBoardForm boardId={props._id} />
      </div>
    </div>
  );
};

export default BoardItem;

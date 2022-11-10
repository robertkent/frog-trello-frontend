import React, { useRef, DragEvent } from "react";
import { CardItemInterface } from "../../interface/CardItemInterface";
import CardItem from "./CardItem";
import AddCardForm from "../Forms/AddCardForm";
import "./Cards.css";

type CardsProps = {
  cards: CardItemInterface[];
  boardId: string;
  onDragOver: (e: DragEvent<HTMLUListElement>) => void;
  onDragLeave: (e: DragEvent<HTMLUListElement>) => void;
  onDragEnd: (e: DragEvent<HTMLUListElement>) => void;
  onDrop: (e: DragEvent<HTMLUListElement>) => void;
};

const Cards: React.FC<CardsProps> = (props) => {
  const dragStart = (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer!.setData("text/plain", e.currentTarget.id);
  };

  if (props.cards.length === 0) {
    return (
      <div className="cards-list">
        <ul
          id={props.boardId}
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          onDragLeave={props.onDragLeave}
          onDragEnd={props.onDragEnd}
        >
          <li className="cards-list-placeholder">
            Add a new card or drag one here
          </li>
        </ul>
        <AddCardForm boardId={props.boardId} />
      </div>
    );
  }

  return (
    <div className="cards-list">
      <ul
        id={props.boardId}
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        onDragLeave={props.onDragLeave}
        onDragEnd={props.onDragEnd}
      >
        {props.cards.map((card, index) => {
          return <CardItem key={index} card={card} onDragStart={dragStart} />;
        })}
      </ul>
      <AddCardForm boardId={props.boardId} />
    </div>
  );
};

export default Cards;

import React from "react";
import { CardItemInterface } from "../../interface/CardItemInterface";
import Cards from "../Cards/Cards";
import "./BoardItem.css";
import DeleteBoardForm from "../Forms/DeleteBoardForm";

type BoardProps = {
  _id: string;
  title: string;
  cards: CardItemInterface[];
};

const BoardItem: React.FC<BoardProps> = (props) => {
  return (
    <div className="board-container">
      <div className="board-item">
        <h2>{props.title}</h2>
        <Cards cards={props.cards} boardId={props._id} />
        <DeleteBoardForm boardId={props._id} />
      </div>
    </div>
  );
};

export default BoardItem;

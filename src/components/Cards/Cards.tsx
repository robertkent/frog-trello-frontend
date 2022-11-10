import React from "react";
import { CardItemInterface } from "../../interface/CardItemInterface";
import CardItem from "./CardItem";
import AddCardForm from "../Forms/AddCardForm";
import "./Cards.css";

type CardsProps = {
  cards: CardItemInterface[];
  boardId: string;
};

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className="cards-list">
      <ul>
        {props.cards.map((card) => {
          return <CardItem key={card._id} card={card} />;
        })}
      </ul>
      <AddCardForm boardId={props.boardId} />
    </div>
  );
};

export default Cards;

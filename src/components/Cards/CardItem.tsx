import React, { DragEvent } from "react";
import moment from "moment";
import { CardItemInterface } from "../../interface/CardItemInterface";
import "./CardItem.css";
import { useDeleteCardMutation } from "../../queries/deleteCard";

type CardItemProps = {
  card: CardItemInterface;
  onDragStart: (e: DragEvent<HTMLLIElement>) => void;
};

const CardItem: React.FC<CardItemProps> = (props) => {
  const [deleteCard] = useDeleteCardMutation();
  const time = props.card.dueDate / 1000;
  const now = moment().unix();

  const overdue = time < now;

  return (
    <li
      id={props.card._id}
      className={`card-item${overdue ? " overdue" : ""}`}
      onDragStart={props.onDragStart}
      draggable
    >
      <div className="card-item__content">
        <h3>
          {props.card.title}
          {overdue ? <i>&#9888;</i> : ""}
        </h3>
        <p>
          {props.card.description ? (
            props.card.description
          ) : (
            <i>no description provided</i>
          )}
        </p>
      </div>
      <div className="actions">
        <button
          onClick={() => deleteCard({ variables: { cardId: props.card._id } })}
          className="delete-card"
        >
          &times;
        </button>
        <time>Due {moment.unix(props.card.dueDate / 1000).fromNow()}</time>
      </div>
    </li>
  );
};

export default CardItem;

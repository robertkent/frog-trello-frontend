import React from "react";
import moment from "moment";
import { CardItemInterface } from "../../interface/CardItemInterface";
import "./CardItem.css";

type CardItemProps = {
  card: CardItemInterface;
};

const CardItem: React.FC<CardItemProps> = (props) => {
  const time = props.card.dueDate / 1000;
  const now = moment().unix();

  const overdue = time < now;

  return (
    <li className={`card-item${overdue ? " overdue" : ""}`}>
      <h3>
        {props.card.title}
        {overdue ? <i>&#9888;</i> : ""}
      </h3>
      <p>{props.card.description}</p>
      <time>&#9200; {moment.unix(props.card.dueDate / 1000).fromNow()}</time>
    </li>
  );
};

export default CardItem;

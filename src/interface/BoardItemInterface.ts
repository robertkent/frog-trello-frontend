import { CardItemInterface } from "./CardItemInterface";

export interface BoardItemInterface {
  _id: string;
  title: string;
  cards: CardItemInterface[];
}

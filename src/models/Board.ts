import { BoardItemInterface } from "../interface/BoardItemInterface";
import { CardItemInterface } from "../interface/CardItemInterface";

export default class Board implements BoardItemInterface {
  constructor(
    public _id: string,
    public title: string,
    public cards: CardItemInterface[]
  ) {}
}

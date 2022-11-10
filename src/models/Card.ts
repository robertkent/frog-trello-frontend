import { CardItemInterface } from "../interface/CardItemInterface";

export default class Card implements CardItemInterface {
  constructor(
    public _id: string,
    public title: string,
    public board: string,
    public description: string,
    public dueDate: number
  ) {}
}

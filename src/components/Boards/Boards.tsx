import React from "react";
import { useQuery } from "@apollo/client";
import Board from "../../models/Board";
import GET_BOARDS from "../../queries/getBoards";
import AddBoardForm from "../Forms/AddBoardForm";
import "./Boards.css";
import BoardItem from "./BoardItem";

const Boards: React.FC = () => {
  const { data, loading, error } = useQuery(GET_BOARDS);

  if (loading) return <div className="Boards-Loading"></div>;

  if (error) return <pre>{error.message}</pre>;

  if (data.getBoards.boards.length === 0) {
    return <AddBoardForm />;
  }

  return (
    <>
      {data.getBoards.boards.map((board: Board) => {
        return (
          <BoardItem
            key={board._id}
            _id={board._id}
            title={board.title}
            cards={board.cards}
          />
        );
      })}
      <AddBoardForm />
    </>
  );
};

export default Boards;

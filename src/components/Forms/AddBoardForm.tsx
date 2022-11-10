import React, { useRef, useState } from "react";
import "./AddBoardForm.css";
import "./Inputs.css";
import { useCreateBoardMutation } from "../../queries/createBoard";

const AddBoardForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const [createBoard] = useCreateBoardMutation();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);
    const title = inputRef.current!.value;

    if (!title || title === "") {
      setErrors((errors) => [...errors, "Please enter a title."]);
      return;
    }

    createBoard({ variables: { title: title } })
      .then(() => {
        event.currentTarget.reset();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className="board-container">
      <form onSubmit={submitHandler} className="add-board-form">
        <input
          type="text"
          ref={inputRef}
          placeholder="Board Title e.g. Ideas"
        />
        <button type="submit" className="primary-button">
          Add New Board
        </button>
        {errors.length > 0 &&
          errors.map((err, index) => {
            return (
              <p key={index} className="error">
                {err}
              </p>
            );
          })}
      </form>
    </div>
  );
};

export default AddBoardForm;

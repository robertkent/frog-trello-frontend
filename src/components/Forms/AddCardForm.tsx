import React, { useRef, useState } from "react";
import "./AddCardForm.css";
import "./Inputs.css";
import { useCreateCardMutation } from "../../queries/createCard";

type AddCardFormProps = {
  boardId: string;
};

const AddCardForm: React.FC<AddCardFormProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [createCard] = useCreateCardMutation();

  const [show, setShow] = useState(false);

  const toggleShowFormHandler = (event: React.MouseEvent) => {
    setShow(!show);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors([]);

    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    const dueDate = dueDateRef.current!.value;

    if (!title) {
      setErrors((errors) => [...errors, "Please enter a title for this card."]);
    }
    if (!dueDate) {
      setErrors((errors) => [
        ...errors,
        "Please enter a due date for this card.",
      ]);
    }

    if (errors.length > 0) {
      return;
    }

    createCard({
      variables: {
        title: title,
        description: description,
        dueDate: dueDate,
        boardId: props.boardId,
      },
    })
      .then(() => {
        setShow(false);
        event.currentTarget.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!show)
    return (
      <button onClick={toggleShowFormHandler} className="primary-button">
        + Add new Card
      </button>
    );

  return (
    <form className="add-card-form" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Title e.g. Design a logo"
        ref={titleRef}
      />
      <textarea
        rows={4}
        placeholder="Description (optional)"
        ref={descriptionRef}
      ></textarea>
      <input type="date" ref={dueDateRef} />
      <div className="form-buttons">
        <button onClick={toggleShowFormHandler} className="secondary-button">
          Cancel
        </button>
        <button type="submit" className="primary-button">
          Add Card
        </button>
      </div>
      {errors.length > 0 &&
        errors.map((err, index) => {
          return (
            <p key={index} className="error">
              {err}
            </p>
          );
        })}
    </form>
  );
};

export default AddCardForm;

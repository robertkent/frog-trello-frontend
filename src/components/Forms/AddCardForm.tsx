import React, { useRef, useState } from "react";
import "./AddCardForm.css";
import "./Inputs.css";
import { useCreateCardMutation } from "../../queries/createCard";

type AddCardFormProps = {
  boardId: string;
};

const AddCardForm: React.FC<AddCardFormProps> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [createCard] = useCreateCardMutation();

  const [show, setShow] = useState(false);

  const toggleShowFormHandler = (event: React.MouseEvent) => {
    setShow(true);
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors([]);

    const errs = [];

    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    const dueDate = dueDateRef.current!.value;

    if (!title) {
      errs.push("Please enter a title for this card.");
    }
    if (!dueDate) {
      errs.push("Please enter a due date for this card.");
    }

    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    await createCard({
      variables: {
        title: title,
        description: description,
        dueDate: dueDate,
        boardId: props.boardId,
      },
    });

    setShow(false);
    formRef.current!.reset();
  };

  if (!show)
    return (
      <button onClick={toggleShowFormHandler} className="primary-button">
        + Add new Card
      </button>
    );

  return (
    <form ref={formRef} className="add-card-form" onSubmit={submitForm}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        placeholder="Title e.g. Design a logo"
        ref={titleRef}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        rows={4}
        id="description"
        placeholder="Description (optional)"
        ref={descriptionRef}
      ></textarea>
      <label htmlFor="dueDate">Due Date:</label>
      <input id="dueDate" type="date" ref={dueDateRef} />
      <div className="form-buttons">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="secondary-button"
        >
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

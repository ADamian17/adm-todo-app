import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { Todo } from "../../helpers/Todo";
import { useColumnsStore } from "../../state/useColumnStore";

import styles from "./AddTodoForm.module.scss";

const AddTodoForm = () => {
  const { addTodo } = useColumnsStore(state => state)
  const [inputVal, setInputVal] = useState("")
  const [inputError, setInputError] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputError) setInputError(false)

    setInputVal(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputVal.length < 1) {
      setInputError(true)
      return
    }

    addTodo(new Todo(inputVal))
    setInputVal("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.wrapper}
      data-testid="add-todo-form"
    >
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.textField} ${inputError && styles.error}`}
          onChange={handleChange}
          placeholder="e.g oil change"
          type="text"
          value={inputVal}
          data-testid="add-todo-form-input"
        />
        {inputError && <p className={styles.textFieldError} data-testid="add-todo-form-error-msg">Field required</p>}
      </div>

      <input
        className={styles.submitBtn}
        data-testid="add-todo-form-btn"
        type="submit"
        value="add todo"
      />
    </form>
  )
};

export default AddTodoForm;

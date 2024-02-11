import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { Todo } from "../../helpers/Todo";
import { useTodoListsStore } from "../../state/useColumnStore";

import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  const { addTodo } = useTodoListsStore(state => state)
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
    >
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.textField} ${inputError && styles.error}`}
          onChange={handleChange}
          placeholder="e.g oil change"
          type="text"
          value={inputVal}
        />
        {inputError && <p className={styles.textFieldError}>Field required</p>}
      </div>

      <input
        className={styles.submitBtn}
        type="submit"
        value="add todo"
      />
    </form>
  )
};

export default TodoForm;

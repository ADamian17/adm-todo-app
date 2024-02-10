import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  const [inputVal, setInputVal] = useState("")
  const [inputError, setInputError] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputVal.length < 1) {
      setInputError(true)
      return
    }

    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleChange}
          placeholder="e.g oil change"
          type="text"
          value={inputVal}
        />
        {inputError && <p>Field required</p>}
      </div>
      <input type="submit" value="add todo" />
    </form>
  )
};

export default TodoForm;
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"

import { TodoType } from "../../types";

import styles from "./Todo.module.scss";
import { useColumnsStore } from "../../state/useColumnStore";

/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md */

const Todo: React.FC<TodoType & { idx: number }> = ({ id, title, status, idx }) => {
  const { removeTodo, updateTodo } = useColumnsStore(state => state)
  const [allowEdit, setAllowEdit] = useState(false)
  const [todoTitle, setTodoTitle] = useState(title)
  const [error, setError] = useState(false)
  const PLACEHOLDER_TEXT = "e.g oil change"
  const [placeHolderText, setPlaceHolderText] = useState(PLACEHOLDER_TEXT)
  const isDone = status === "done";

  const handleDelete = () => {
    removeTodo({
      column: status,
      idx
    })
  }

  const handleUpdateTodo: FormEventHandler = (e) => {
    e.preventDefault()

    if (todoTitle.trim() === "") {
      setError(true)
      setPlaceHolderText("Required Field")
      return;
    }

    updateTodo({
      column: status,
      idx,
      title: todoTitle
    })

    setAllowEdit(false)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) {
      setError(false)
      setPlaceHolderText(PLACEHOLDER_TEXT)
    }

    setTodoTitle(e.target.value)
  }

  const handleEditClick = () => {
    setAllowEdit(prev => !prev)
    setTodoTitle(title)
  }

  return (
    <Draggable key={id} draggableId={id.toString()} index={idx}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.card}
          ref={provided.innerRef}
        >
          {
            isDone && <Fireworks autorun={{ speed: 3, duration: 1000 }} />
          }
          <div className={`${styles.checkedIcon} ${isDone && styles.done}`}>
            <img src="/icons/icon-check.svg" />
          </div>

          <form onSubmit={handleUpdateTodo} className={styles.titleWrapper}>
            <input
              className={`${styles.title} ${allowEdit && styles.isEdit} ${error && styles.error} ${isDone && !allowEdit && styles.lineThrough}`}
              onChange={handleChange}
              placeholder={placeHolderText}
              readOnly={!allowEdit}
              value={todoTitle}
            />
          </form>

          <div className={styles.ctaGroup}>
            <button className={styles.cta}>
              <svg className={styles.icon} onClick={handleEditClick}>
                <use href="/icons/main-icons.svg#pencil"></use>
              </svg>
            </button>

            <button className={styles.cta}>
              <svg className={styles.icon} onClick={handleDelete}>
                <use href="/icons/main-icons.svg#bin"></use>
              </svg>
            </button>
          </div>
        </li>
      )}
    </Draggable>
  )
};

export default Todo;

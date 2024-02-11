import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"

import { TodoType } from "../../types";

import styles from "./Todo.module.scss";

/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md */

const Todo: React.FC<TodoType & { idx: number }> = ({ id, title, status, idx }) => {
  const isDone = status === "done";

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

          <p className={`${styles.title} ${isDone && styles.lineThrough}`}>{title}</p>
        </li>
      )}
    </Draggable>
  )
};

export default Todo;
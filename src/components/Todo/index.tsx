import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { TodoType } from "../../types";

import styles from "./Todo.module.scss";

const Todo: React.FC<TodoType & { idx: number }> = ({ id, title, status, idx }) => {
  console.log({ status });

  return (
    <Draggable key={id} draggableId={id.toString()} index={idx}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>{title}</div>
        </div>
      )}
    </Draggable>
  )
};

export default Todo;
import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { TodoProvider } from "./Todo.provider";
import { TodoType } from "../../types";
import EditTodoForm from "../EditTodoForm";
import TodoCtaGroup from "../TodoCtaGroup";
import TodoStatus from "../TodoStatus";

import styles from "./Todo.module.scss";


/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md */

const Todo: React.FC<TodoType & { idx: number }> = ({ id, title, status, idx }) => (
  <Draggable key={id} draggableId={id.toString()} index={idx}>
    {(provided) => (
      <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={styles.card}
        ref={provided.innerRef}
      >
        <TodoProvider
          idx={idx}
          column={status}
          title={title}
        >
          <TodoStatus />

          <EditTodoForm />

          <TodoCtaGroup />
        </TodoProvider>
      </li>
    )}
  </Draggable>
)

export default Todo;

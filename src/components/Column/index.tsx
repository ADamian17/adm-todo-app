import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useTodoListsStore } from "../../state/useColumnStore";
import Todo from "../Todo";

import styles from "./Column.module.scss";

type ColumnType = {
  headline: string
};

const Column: React.FC<ColumnType> = ({ headline }) => {
  const { getColumn } = useTodoListsStore()
  const columnData = getColumn(headline.toLowerCase())

  const todosList = columnData && columnData.map((todo, idx) => (
    <Todo key={todo.id} {...todo} idx={idx} />
  ));

  return (
    <div>
      <h2>{headline}</h2>

      <Droppable droppableId={headline.toLowerCase()}>
        {(provided) => (
          <ul
            {...provided.droppableProps}
            className={styles.todos}
            ref={provided.innerRef}
          >

            {todosList}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  )
};

export default Column;

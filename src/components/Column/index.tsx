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
    <Droppable droppableId={headline.toLowerCase()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h2>{headline}</h2>

          {todosList}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
};

export default Column;

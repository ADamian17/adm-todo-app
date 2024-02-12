import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useColumnsStore } from "../../state/useColumnStore";
import Todo from "../Todo";

import styles from "./Column.module.scss";

type ColumnType = {
  headline: string
};

/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md */

const Column: React.FC<ColumnType> = ({ headline }) => {
  const { getColumn } = useColumnsStore(state => state)
  const columnData = getColumn(headline.toLowerCase())

  const todosList = columnData && columnData.map((todo, idx) => (
    <Todo key={todo.id} {...todo} idx={idx} />
  ));

  return (
    <section className={styles.column}>
      <p className={styles.headline}>{headline}</p>

      <Droppable droppableId={headline.toLowerCase()}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            className={`${styles.todos} ${snapshot.isDraggingOver && styles.isDraggingOver}`}
            ref={provided.innerRef}
          >

            {todosList}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </section>
  )
};

export default Column;

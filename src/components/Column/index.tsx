import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useTodoListsStore } from "../../state/useColumnStore";
import Todo from "../Todo";

import styles from "./Column.module.scss";

type ColumnType = {
  headline: string
  columnAccentColor: string
};

/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md */

const Column: React.FC<ColumnType> = ({ headline, columnAccentColor }) => {
  const { getColumn } = useTodoListsStore()
  const columnData = getColumn(headline.toLowerCase())

  const componentStyles = { ["--column-accent-color"]: columnAccentColor } as React.CSSProperties

  const todosList = columnData && columnData.map((todo, idx) => (
    <Todo key={todo.id} {...todo} idx={idx} />
  ));

  return (
    <section className={styles.column} style={componentStyles}>
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

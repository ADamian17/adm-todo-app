import { DragDropContext, DropResult, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from "./TodosContainer.module.scss";
import { useState } from 'react';
import { useTodoListsStore } from '../../state/useColumnStore';

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
];

const TodosContainer = () => {
  const { getColumns, updateColumnOnDrag, getColumn } = useTodoListsStore()
  const columns = getColumns();

  const columnsList = columns && columns.map(column => {
    const todos = getColumn(column.toLowerCase())
    console.log(todos);

    return (
      <Droppable key={column} droppableId={column}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>{column}</h2>

            {todos && todos.map((todo, idx) => (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={idx}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div>{todo.title}</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  })

  return (
    <DragDropContext onDragEnd={updateColumnOnDrag}>
      <section>
        {columnsList}
      </section>
    </DragDropContext>
  )
};

export default TodosContainer;

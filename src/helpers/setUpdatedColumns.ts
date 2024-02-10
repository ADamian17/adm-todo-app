import { SetUpdatedColumnsFn } from "../types";

export const setUpdatedColumns: SetUpdatedColumnsFn = ({ columns, result }) => {
  if (!result.destination) return columns;

  const {
    source: { droppableId: sourceColId, index: sourceIdx },
    destination: { droppableId: destinationColId, index: destinationIdx },
  } = result;
  const prevTodos = columns[sourceColId];
  const sourceTodos = prevTodos.map((col) => col);
  const [todo] = sourceTodos.splice(sourceIdx, 1);

  if (sourceColId !== destinationColId) {
    const destinationTodos = columns[destinationColId].map((col) => col);

    todo.status = destinationColId;
    destinationTodos.splice(destinationIdx, 0, todo);

    return {
      ...columns,
      [sourceColId]: sourceTodos,
      [destinationColId]: destinationTodos,
    };
  }

  sourceTodos.splice(destinationIdx, 0, todo);

  return {
    ...columns,
    [sourceColId]: sourceTodos,
  };
};

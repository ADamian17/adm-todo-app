import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TodoType, TodosType } from "../types";
import { OnDragEndResponder } from "react-beautiful-dnd";

type UseColumnStoreState = {
  columns: Record<string, TodoType[]>;
};

type UseColumnStoreActions = {
  getColumns: () => string[];
  getColumn: (target: string) => TodosType;
  updateColumnOnDrag: OnDragEndResponder;
};

export const useTodoListsStore = create(
  persist<UseColumnStoreState & UseColumnStoreActions>(
    (set, get) => ({
      columns: {
        todo: [
          {
            id: 1,
            title: "Task 1",
            status: "todo",
          },
          {
            id: 2,
            title: "Task 2",
            status: "todo",
          },
          {
            id: 3,
            title: "Task 3",
            status: "todo",
          },
        ],
        doing: [],
        done: [],
      },
      getColumns: () => {
        const { columns } = get();

        return Object.keys(columns);
      },
      getColumn: (target) => {
        const { columns } = get();

        return columns[target];
      },
      updateColumnOnDrag: (result) => {
        if (!result.destination) return;
        const { columns } = get();
        const {
          source: { droppableId: sourceColId, index: sourceIdx },
          destination: { droppableId: destinationColId, index: destinationIdx },
        } = result;
        const prevTodos = columns[sourceColId];
        const sourceTodos = prevTodos.map((col) => col);
        const [todo] = sourceTodos.splice(sourceIdx, 1);
        let updatedColumns: UseColumnStoreState["columns"];

        if (sourceColId !== destinationColId) {
          const destinationTodos = columns[destinationColId].map((col) => col);

          todo.status = destinationColId;
          destinationTodos.splice(destinationIdx, 0, todo);

          updatedColumns = {
            ...columns,
            [sourceColId]: sourceTodos,
            [destinationColId]: destinationTodos,
          };

          return set({ columns: updatedColumns });
        }

        sourceTodos.splice(destinationIdx, 0, todo);

        updatedColumns = {
          ...columns,
          [sourceColId]: sourceTodos,
        };

        set({ columns: updatedColumns });
      },
    }),
    {
      name: "todo-list",
    },
  ),
);

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

        if (sourceColId !== destinationColId) {
          const sourceTodos = columns[sourceColId].map((col) => col);
          const destinationTodos = columns[destinationColId].map((col) => col);

          const [todo] = sourceTodos.splice(sourceIdx, 1);
          todo.status = destinationColId;
          destinationTodos.splice(destinationIdx, 0, todo);

          return set((prev) => ({
            ...prev,
            columns: {
              ...prev.columns,
              [sourceColId]: sourceTodos,
              [destinationColId]: destinationTodos,
            },
          }));
        }

        // const todo = Array.from(columns[columnKey]);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);

        // set((prev) => ({
        //   ...prev,
        //   columns: {
        //     ...prev.columns,
        //     [columnKey]: items,
        //   },
        // }));
      },
    }),
    {
      name: "todo-list",
    },
  ),
);

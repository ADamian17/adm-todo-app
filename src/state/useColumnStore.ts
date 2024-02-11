import { create } from "zustand";
import { persist } from "zustand/middleware";

import { setUpdatedColumns } from "../helpers/setUpdatedColumns";
import { UseColumnStoreActions, UseColumnStoreState } from "../types";

export const useTodoListsStore = create(
  persist<UseColumnStoreState & UseColumnStoreActions>(
    (set, get) => ({
      columns: {
        todo: [],
        doing: [],
        done: [],
      },
      addTodo: (todo) => {
        if (!todo) return;

        const { columns } = get();
        const updatedColumns = {
          ...columns,
          todo: [...columns.todo, todo],
        };

        set({ columns: updatedColumns });
      },
      getColumns: () => {
        const { columns } = get();

        return Object.keys(columns);
      },
      getColumn: (target) => {
        const { columns } = get();

        return columns[target];
      },
      removeTodo: (column, idx) => {
        const { columns } = get();
        const prevTodos = columns[column];
        const tempTodos = prevTodos.filter((_, index) => index !== idx);

        const updatedTodos = {
          ...columns,
          [column]: tempTodos,
        };

        set({ columns: updatedTodos });
      },
      updateColumnOnDrag: (result) => {
        const { columns } = get();
        const updatedColumns = setUpdatedColumns({ result, columns });

        set({ columns: updatedColumns });
      },
    }),
    {
      name: "todo-list",
    },
  ),
);

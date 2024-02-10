import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TodoType, TodosType } from "../types";
import { OnDragEndResponder } from "react-beautiful-dnd";
import { setUpdatedColumns } from "../helpers/setUpdatedColumns";

type UseColumnStoreState = {
  columns: Record<string, TodoType[]>;
};

type UseColumnStoreActions = {
  addTodo: (todo: TodoType) => void;
  getColumn: (target: string) => TodosType;
  getColumns: () => string[];
  updateColumnOnDrag: OnDragEndResponder;
};

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

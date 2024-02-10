import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TodoType, TodosType } from "../types";
import { OnDragEndResponder } from "react-beautiful-dnd";
import { setUpdatedColumns } from "../helpers/setUpdatedColumns";

type UseColumnStoreState = {
  columns: Record<string, TodoType[]>;
};

type UseColumnStoreActions = {
  getColumn: (target: string) => TodosType;
  getColumns: () => string[];
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

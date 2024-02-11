import { DropResult, OnDragEndResponder } from "react-beautiful-dnd";

export type TodoType = {
  id: number;
  title: string;
  status: string;
};

export type TodosType = TodoType[];

export type UseColumnStoreState = {
  columns: Record<string, TodoType[]>;
};

export type SetUpdatedColumnsFn = (props: {
  columns: UseColumnStoreState["columns"];
  result: DropResult;
}) => UseColumnStoreState["columns"];

export type UseColumnStoreActions = {
  addTodo: (todo: TodoType) => void;
  getColumn: (target: string) => TodosType;
  getColumns: () => string[];
  removeTodo: (column: string, idx: number) => void;
  updateColumnOnDrag: OnDragEndResponder;
};

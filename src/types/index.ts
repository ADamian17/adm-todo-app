import { DropResult } from "react-beautiful-dnd";

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

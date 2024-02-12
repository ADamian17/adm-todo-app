import {
  ChangeEventHandler,
  FormEventHandler,
  createContext,
  useContext,
} from "react";

type TodoCtxType = {
  allowEdit: boolean;
  error: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleDelete: () => void;
  handleEditClick: () => void;
  handleUpdateTodo: FormEventHandler;
  isDone: boolean;
  placeHolderText: string;
  todoTitle: string;
};

export const TodoCtx = createContext({} as TodoCtxType);

export const useTodoCtx = () => useContext(TodoCtx);

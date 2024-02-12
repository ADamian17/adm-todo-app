import { ChangeEventHandler, FormEventHandler, ReactNode, useEffect, useState } from "react"
import { TodoCtx } from "../../contexts/todo.context"
import { useColumnsStore } from "../../state/useColumnStore"

type TodoProviderType = {
  children: ReactNode;
  idx: number;
  column: string;
  title: string;
}

export const TodoProvider = ({ children, idx, column, title }: TodoProviderType) => {
  const { removeTodo, updateTodo } = useColumnsStore(state => state)

  const PLACEHOLDER_TEXT = "e.g oil change"
  const isDone = column === "done";
  const [allowEdit, setAllowEdit] = useState(false);
  const [error, setError] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title)
  const [placeHolderText, setPlaceHolderText] = useState(PLACEHOLDER_TEXT);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", handleAllowEdit)

    function handleAllowEdit(e: KeyboardEvent) {
      if (allowEdit && e.key.toLowerCase() === "escape") {
        setAllowEdit(false)
        setTodoTitle(todoTitle)
      }
    }

    return () => {
      window.removeEventListener("keypress", handleAllowEdit)
    }
  }, [allowEdit, todoTitle])

  const handleDelete = () => {
    removeTodo({
      column,
      idx
    })
  }

  const handleEditClick = () => {
    setAllowEdit(prev => !prev)
    setTodoTitle(title)
  }

  const handleUpdateTodo: FormEventHandler = (e) => {
    e.preventDefault()

    if (todoTitle.trim() === "") {
      setError(true)
      setPlaceHolderText("Required Field")
      return;
    }

    setAllowEdit(false)
    updateTodo({
      column,
      idx,
      title: todoTitle
    })
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) {
      setError(false)
      setPlaceHolderText(PLACEHOLDER_TEXT)
    }

    setTodoTitle(e.target.value)
  }

  const value = {
    allowEdit,
    error,
    handleChange,
    handleDelete,
    handleEditClick,
    handleUpdateTodo,
    isDone,
    placeHolderText,
    todoTitle,
  }

  return (
    <TodoCtx.Provider value={value}>
      {children}
    </TodoCtx.Provider>
  )
}
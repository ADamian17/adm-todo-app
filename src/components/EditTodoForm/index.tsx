import { useTodoCtx } from "../../contexts/todo.context";

import styles from "./EditTodoForm.module.scss";

const EditTodoForm = () => {
  const {
    allowEdit,
    error,
    handleChange,
    handleUpdateTodo,
    isDone,
    placeHolderText,
    todoTitle,
  } = useTodoCtx();

  return (
    <form onSubmit={handleUpdateTodo} className={styles.form}>
      <input
        className={`${styles.textField} ${allowEdit && styles.isEdit} ${error && allowEdit && styles.error} ${isDone && !allowEdit && styles.lineThrough}`}
        onChange={handleChange}
        placeholder={placeHolderText}
        readOnly={!allowEdit}
        value={todoTitle}
      />
    </form>
  )
};

export default EditTodoForm;

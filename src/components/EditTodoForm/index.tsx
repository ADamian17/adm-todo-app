import { useTodoCtx } from "../../contexts/todo.context";

import styles from "./EditTodoForm.module.scss";

const EditTodoForm = () => {
  const {
    allowEdit,
    error,
    handleChange,
    handleEditClick,
    handleUpdateTodo,
    isDone,
    placeHolderText,
    todoTitle,
  } = useTodoCtx();

  return (
    <>
      <form onSubmit={handleUpdateTodo} className={`${styles.form} ${allowEdit && styles.isEdit}`}>
        <input
          className={`${styles.textField} ${error && allowEdit && styles.error} ${isDone && !allowEdit && styles.lineThrough}`}
          onChange={handleChange}
          placeholder={placeHolderText}
          readOnly={!allowEdit}
          value={todoTitle}
        />

        {allowEdit && (
          <div>
            <input type="submit" value="save" className={styles.cta} />
            <button onClick={handleEditClick} className={`${styles.cta} ${styles.cancel}`}>cancel</button>
          </div>
        )}
      </form>
    </>
  )
};

export default EditTodoForm;

import { useTodoCtx } from "../../contexts/todo.context";
import TodoCta from "../TodoCta";

import styles from "./TodoCtaGroup.module.scss";

const TodoCtaGroup = () => {
  const { allowEdit, handleEditClick, handleDelete } = useTodoCtx();

  return !allowEdit && (
    <div className={styles.ctaGroup}>
      <TodoCta icon="pencil" onClick={handleEditClick} />
      <TodoCta icon="bin" onClick={handleDelete} />
    </div>
  )
};

export default TodoCtaGroup;
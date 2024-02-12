import { useTodoCtx } from "../../contexts/todo.context";
import TodoCta from "../TodoCta";

import styles from "./TodoCtaGroup.module.scss";

const TodoCtaGroup = () => {
  const { handleEditClick, handleDelete } = useTodoCtx();

  return (
    <div className={styles.ctaGroup}>
      <TodoCta icon="pencil" onClick={handleEditClick} />
      <TodoCta icon="bin" onClick={handleDelete} />
    </div>
  )
};

export default TodoCtaGroup;
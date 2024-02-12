import { useTodoCtx } from "../../contexts/todo.context";

import styles from "./TodoCtaGroup.module.scss";

const TodoCtaGroup = () => {
  const { handleEditClick, handleDelete } = useTodoCtx();

  return (
    <div className={styles.ctaGroup}>
      <button className={styles.cta} onClick={handleEditClick}>
        <svg className={styles.icon}>
          <use href="/icons/main-icons.svg#pencil"></use>
        </svg>
      </button>

      <button className={styles.cta} onClick={handleDelete}>
        <svg className={styles.icon}>
          <use href="/icons/main-icons.svg#bin"></use>
        </svg>
      </button>
    </div>
  )
};

export default TodoCtaGroup;
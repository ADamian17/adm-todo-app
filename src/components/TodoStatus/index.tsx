import { useTodoCtx } from "../../contexts/todo.context";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import styles from "./TodoStatus.module.scss";

const TodoStatus = () => {
  const { isDone } = useTodoCtx();

  return (
    <>
      {isDone && <Fireworks autorun={{ speed: 3, duration: 1000 }} />}

      <div className={`${styles.checkedIcon} ${isDone && styles.done}`}>
        <img src="/icons/icon-check.svg" />
      </div>
    </>
  )
};

export default TodoStatus;

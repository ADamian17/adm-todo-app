import React, { ComponentProps } from "react";

import styles from "./TodoCta.module.scss";

type TodoCtaType = { icon: "bin" | "pencil" } & ComponentProps<"button">;

const TodoCta: React.FC<TodoCtaType> = ({ icon, ...rest }) => (
  <button className={styles.cta} {...rest}>
    <svg className={styles.icon}>
      <use href={`/icons/main-icons.svg#${icon}`}></use>
    </svg>
  </button>
)

export default TodoCta;

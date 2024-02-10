import { MouseEventHandler } from "react";
import TodoForm from "../TodoForm";

import styles from "./MainHeader.module.scss";
import useThemeStore from "../../state/useThemeStore";

const MainHeader = () => {
  const { theme, toggleTheme } = useThemeStore(state => state)
  const icon = theme === "dark" ? "sun" : "moon";

  const handleClick: MouseEventHandler = () => {
    toggleTheme(theme)
  }

  return (
    <header className={styles.hero} style={{ backgroundImage: `url(images/bg-desktop-${theme}.jpg)` }}>

      <nav className={styles.nav}>
        <svg className={styles.headline}>
          <use href={`/icons/main-icons.svg#todo`}></use>
        </svg>

        <svg className={styles.icon} onClick={handleClick}>
          <use href={`/icons/main-icons.svg#${icon}`}></use>
        </svg>
      </nav>

      <TodoForm />
    </header>
  )
};

export default MainHeader;

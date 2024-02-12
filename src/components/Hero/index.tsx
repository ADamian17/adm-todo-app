import { MouseEventHandler } from "react";

import AddTodoForm from "../AddTodoForm";
import useThemeStore from "../../state/useThemeStore";

import styles from "./Hero.module.scss";

const MainHeader = () => {
  const { theme, toggleTheme } = useThemeStore(state => state)
  const icon = theme === "dark" ? "sun" : "moon";
  const headerStyles = {
    backgroundImage: `url(images/bg-desktop-${theme}.jpg)`
  }

  const handleClick: MouseEventHandler = () => {
    toggleTheme(theme)
  }

  return (
    <header
      className={styles.hero}
      style={headerStyles}
    >

      <nav className={styles.nav}>
        <svg className={styles.headline}>
          <use href={`/icons/main-icons.svg#todo`}></use>
        </svg>

        <svg className={styles.icon} onClick={handleClick}>
          <use href={`/icons/main-icons.svg#${icon}`}></use>
        </svg>
      </nav>

      <AddTodoForm />
    </header>
  )
};

export default MainHeader;

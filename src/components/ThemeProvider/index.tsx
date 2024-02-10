import { useEffect } from "react";

import useThemeStore from "../../state/useThemeStore";

const ThemeProvider = () => {
  const { setTheme, theme, toggleTheme } = useThemeStore(state => state)

  useEffect(() => {
    setTheme()
  }, [theme, setTheme]);

  useEffect(() => {
    const nativeTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    )

    nativeTheme.addEventListener("change", themeHandler);

    function themeHandler(e: MediaQueryListEvent) {
      const currentTheme = !e.matches ? "dark" : "light";
      toggleTheme(currentTheme)
    }

    return () => {
      nativeTheme.removeEventListener("change", themeHandler);
    }
  }, [toggleTheme]);

  return null;
};

export default ThemeProvider;

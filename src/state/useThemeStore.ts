import { create } from "zustand";

export type UseThemeStore = {
  theme: "light" | "dark" | null;
  setTheme: () => void;
  toggleTheme: (theme: UseThemeStore["theme"]) => void;
};

const useThemeStore = create<UseThemeStore>((set) => ({
  theme: "light",
  setTheme: () => {
    const savedTheme = window.localStorage.getItem(
      "theme",
    ) as UseThemeStore["theme"];

    if (savedTheme) {
      document.documentElement.className = savedTheme;
      return set({ theme: savedTheme });
    }

    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const currentTheme = userPrefersDark ? "dark" : "light";
    document.documentElement.className = currentTheme;
    return set({ theme: currentTheme });
  },
  toggleTheme: (theme) => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    return set({ theme: newTheme });
  },
}));

export default useThemeStore;

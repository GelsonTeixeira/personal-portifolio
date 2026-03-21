import { useState, useEffect } from "react";

const STORAGE_KEY = "theme";
const DEFAULT = "dark";
const VALID = ["light", "dark", "terminal"];

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT;
    const saved = localStorage.getItem(STORAGE_KEY);
    return VALID.includes(saved) ? saved : DEFAULT;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (name) => {
    if (VALID.includes(name)) setThemeState(name);
  };

  const cycleTheme = () => {
    setThemeState((prev) => {
      const idx = VALID.indexOf(prev);
      return VALID[(idx + 1) % VALID.length];
    });
  };

  return { theme, setTheme, cycleTheme };
}

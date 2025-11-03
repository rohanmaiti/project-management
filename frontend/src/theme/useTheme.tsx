import { useEffect, useState } from "react";
import type { Theme } from "./context";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved_theme = localStorage.getItem("theme") as Theme | "light";
      return saved_theme;
    } catch (error: any) {
      console.log(
        "error getting saved theme from localstorage",
        error?.message
      );
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    } catch (error: any) {
      console.log("error setting application theme", error?.message);
    }
  }, [theme]);

  const toogle_theme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toogle_theme,
  };
};

import ThemeContext from "./context";
import { useTheme } from "./useTheme";

const ThemeProvider = ({ children }) => {
  const value = useTheme();
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;

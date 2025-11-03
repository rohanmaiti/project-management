import { createContext } from "react";

const ThemeContext = createContext<any>(null);

export default ThemeContext;

export type Theme = 'light' | 'dark';
import { createContext, useContext, useState, useLayoutEffect, ReactNode } from "react";
import { colors } from "../lib/color";

interface ColorContextType {
  colorSet: typeof colors;
  changeTheme: () => void;
}
const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // base color state
  const [colorSet, setColorSet] = useState(colors);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // initial theme based on the system preference
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // use theme from localStorage if available
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      // check system preference
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
      localStorage.setItem("theme", prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useLayoutEffect(() => {
    // default is darkmode. If lightmode, swap some colors
    if (!isDarkMode) {
      setColorSet(prevColorSet => ({
        // default colors
        ...prevColorSet,

        // use different color for lightmode
        // primary: prevColorSet.secondary,
        // or use other color
        primary: prevColorSet.blue,

        // optionally swapping the secondary color
        secondary: prevColorSet.primary,

        // reverse the order of neutral color
        neutral: [...prevColorSet.neutral].reverse()
      }));
    } else {
      // use original base colors in darkmode
      setColorSet(colors);
    }
  }, [isDarkMode]);

  // function to set new mode
  const changeTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // save current mode
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return <ColorContext.Provider value={{ colorSet, changeTheme }}>{children}</ColorContext.Provider>;
};

// custom hook to use color context
export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("`useColorContext` must be used within a ThemeProvider");
  }
  return context;
};

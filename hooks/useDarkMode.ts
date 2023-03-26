/**
 * Custom React hook to manage and persist a dark mode theme using useLocalStorage and useEffect.
 */

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClasses = typeof window !== "undefined" ? window.document.body.classList : null;
    if (bodyClasses) {
      darkMode === "dark" ? bodyClasses.add(className) : bodyClasses.remove(className);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

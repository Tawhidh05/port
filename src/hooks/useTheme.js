import { useCallback, useEffect, useState } from "react";

// Dark by default; the inline script in layout.jsx sets the class before paint.
export default function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    try { setTheme(localStorage.getItem("theme") || "dark"); } catch {}
  }, []);
  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try { localStorage.setItem("theme", next); } catch {}
      return next;
    });
  }, []);
  return { theme, toggleTheme };
}

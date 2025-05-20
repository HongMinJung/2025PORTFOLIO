"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-lg rounded-md bg-surface-light dark:bg-surface-dark"
      aria-label="테마 전환"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  const getThemeIcon = () => {
    // 시스템 테마일 때는 현재 적용된 테마에 따라 아이콘 표시
    const currentTheme = theme === "system" 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme;
    
    return currentTheme === "dark" ? <Sun /> : <Moon />;
  };

  return (
    <button
      onClick={toggleTheme}
      // className="p-2 text-lg rounded-md transition-colors"
      aria-label="테마 전환"
    >
      {getThemeIcon()}
    </button>
  );
}

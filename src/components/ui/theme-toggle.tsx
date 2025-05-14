"use client";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/Button/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트 사이드에서만 마운트 상태 업데이트
  useEffect(() => {
    setMounted(true);
  }, []);

  // 현재 실제 적용된 테마 확인
  const getCurrentTheme = () => {
    if (!mounted) return "light";

    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return theme;
  };

  const currentTheme = getCurrentTheme();

  // 로그로 현재 상태 확인
  useEffect(() => {
    if (mounted) {
      console.log("Current theme:", theme);
      console.log(
        "System theme:",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

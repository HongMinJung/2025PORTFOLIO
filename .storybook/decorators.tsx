import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "../src/components/theme-provider";

export const withTheme: Decorator = (Story, context) => {
  // 스토리북 컨트롤에서 테마 선택이 가능하도록 설정
  const { theme = "light" } = context.globals;

  return (
    <ThemeProvider defaultTheme={theme}>
      <div className={theme === "dark" ? "dark" : ""}>
        <div className="p-6 bg-background text-foreground min-h-screen">
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};

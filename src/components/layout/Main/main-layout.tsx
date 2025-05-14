import * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navItems = [
  { label: "홈", href: "/" },
  { label: "소개", href: "/about" },
  { label: "기술 스택", href: "/skills" },
  { label: "프로젝트", href: "/projects" },
];

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <main className={cn("flex-1", className)}>{children}</main>
      <Footer />
    </div>
  );
}

import * as React from "react";

// import { cn } from "@/lib/utils";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

"use client";

import * as React from "react";
import { useEffect } from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navItems = [
  { label: "HOME", href: "/", sectionId: "hero" },
  { label: "ABOUT", href: "/about", sectionId: "about" },
  { label: "PROJECTS", href: "/projects", sectionId: "projects" },
  { label: "CONTACT", href: "/contact", sectionId: "contact" },
];

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    // 페이지 로드 시 스크롤 위치 초기화
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header navItems={navItems} />
      <main className="flex-1 overflow-y-scroll overflow-x-hidden md:snap-y md:snap-mandatory">{children}</main>
      <Footer />
    </div>
  );
}

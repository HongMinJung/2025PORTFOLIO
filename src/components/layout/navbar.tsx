"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "홈", href: "#home" },
  { name: "소개", href: "#about" },
  { name: "기술 스택", href: "#skills" },
  { name: "프로젝트", href: "#projects" },
  { name: "연락처", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href="#home" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* 데스크톱 메뉴 */}
        <div className="items-center hidden gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-primary-light dark:text-primary-dark font-medium"
                  : "hover:text-primary-light dark:hover:text-primary-dark"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* 모바일 메뉴 토글 버튼 */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="메뉴 열기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full py-4 shadow-lg md:hidden top-full bg-background-light dark:bg-background-dark">
          <div className="container flex flex-col gap-4 px-4 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2 ${
                  pathname === item.href
                    ? "text-primary-light dark:text-primary-dark font-medium"
                    : "hover:text-primary-light dark:hover:text-primary-dark"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

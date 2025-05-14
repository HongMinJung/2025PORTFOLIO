"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

export function Header({ navItems, logo, className }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // 클라이언트 사이드에서만 마운트 상태 업데이트
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // 메뉴 닫기 함수
  const closeMenu = React.useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // 경로 변경 시 메뉴 닫기
  React.useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto container flex h-16 items-center justify-between">
        <div className="flex items-center pl-4 md:pl-0">
          {logo ? (
            <Link href="/" className="flex items-center space-x-2 mr-6 md">
              {logo}
            </Link>
          ) : (
            <Link href="/" className="flex items-center space-x-2 mr-6 md:pl-5">
              <span className="font-bold text-xl">MINJUNG</span>
            </Link>
          )}
        </div>

        <div className="hidden md:block">
          <nav className="flex items-center space-x-28">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2 pr-4 md:pr-0">
          <ThemeToggle />

          {/* 모바일 메뉴 버튼 - 클라이언트 사이드에서만 렌더링 */}
          {isMounted && (
            <button
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 모바일 메뉴 - 클라이언트 사이드에서만 렌더링 */}
      {isMounted && isMenuOpen && (
        <div className="md:hidden container py-4 border-t border-border">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80 px-2 py-1.5 rounded-md",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-foreground/70"
                )}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

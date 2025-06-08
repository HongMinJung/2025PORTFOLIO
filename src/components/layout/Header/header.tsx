"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

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
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full py-12 backdrop-blur-md shadow-md dark:shadow-white/10",
          className
        )}
      >
        <div className="mx-auto container flex items-center justify-between">
          <div className="flex items-center">
            {logo ? (
              <Link href="/">{logo}</Link>
            ) : (
              <Link href="/">
                <span className="font-bold text-xl pl-4 md:pl-0">MINJUNG</span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-x-4 pr-4 md:pr-0">
            <ThemeToggle />

            {/* 모바일 메뉴 버튼 */}
            {isMounted && (
              <button
                className="inline-flex items-center justify-center rounded-md text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="메뉴 토글"
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            )}
          </div>
        </div>

        {/* 모바일 메뉴 - 클라이언트 사이드에서만 렌더링 */}
        {isMounted && isMenuOpen && (
          <div className="py-4 w-full mx-auto">
            <nav className="flex flex-col justify-center items-center space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-md font-medium hover:text-primary-500 dark:hover:text-secondary-500 hover:border-b-2 hover:border-primary-500 dark:hover:border-secondary-500 px-2 py-2",
                    pathname === item.href
                      ? "text-primary-500 font-semibold dark:text-secondary-500"
                      : "text-black dark:text-white"
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
    </>
  );
}

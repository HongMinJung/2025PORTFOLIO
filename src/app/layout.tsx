import type { Metadata } from "next";
import { pretendard } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { MainLayout } from "@/components/layout/Main/main-layout";

export const metadata: Metadata = {
  title: "홍민정 | 2025포트폴리오",
  description: "디자인의 감각을 코드로, 신입 개발자의 포트폴리오 사이트입니다.",
  keywords: [
    "포트폴리오",
    "프론트엔드",
    "백엔드",
    "풀스택",
    "개발자",
    "퍼블리싱",
    "신입",
    "Next.js",
    "React.js",
    "React Native",
    "TypeScript",
    "Three.js",
    "웹 개발",
    "UI/UX",
    "html",
    "css",
    "javascript",
    "typescript",
    "next.js",
    "jquery",
    "node.js",
    "mongodb",
    "supabase",
    "tailwindcss",
    "vercel",
    "github",
    "git",
    "figma",
    "scss",
    "sass",
    "Flutter",
    "Dart",
    "Firebase",
    "publishing",
  ],
  openGraph: {
    title: "홍민정 | 2025포트폴리오",
    description: "디자인의 감각을 코드로, 신입 개발자의 포트폴리오 사이트입니다.",
    url: "https://your-portfolio.com",
    siteName: "홍민정 포트폴리오",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "홍민정 포트폴리오 썸네일",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

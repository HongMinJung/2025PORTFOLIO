import type { Metadata } from "next";
import { pretendard } from "../lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { MainLayout } from "@/components/layout/Main/main-layout";

export const metadata: Metadata = {
  title: "홍민정 | 2025포트폴리오",
  description: "2025년 신입 개발자의 개인 포트폴리오 사이트입니다.",
  keywords: [
    "2025",
    "신입",
    "포트폴리오",
    "풀스택",
    "프론트엔드",
    "웹 개발",
    "웹퍼블리싱",
    "HTML",
    "CSS",
    "JaveScript",
    "jQurey",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Three.js",
    "DB",
    "Flutter",
    "React Native",
    "UI/UX",
    "앱 UI/UX",
    "iOS 개발",
    "Android 개발",
    "반응형 웹",
    "자바스크립트",
    "개발자 포트폴리오",
    "프로젝트 쇼케이스",
    "웹 애플리케이션",
    "프로그래밍",
    "코딩",
  ],
  authors: [{ name: "홍민정", url: "https://github.com/HongMinJung" }],
  creator: "홍민정",
  // metadataBase: new URL(""),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "홍민정 | 2025포트폴리오",
    description: "2025년 신입 개발자의 개인 포트폴리오 사이트입니다.",
    siteName: "홍민정 | 2025포트폴리오",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "썸네일",
      },
    ],
  },
  //파비콘
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      {/* 테마 설정을 위한 인라인 스크립트 */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  
                  if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (storedTheme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.classList.add(systemTheme);
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${pretendard.variable} font-sans`}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

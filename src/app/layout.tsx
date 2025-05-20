import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/context/toast-context";

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
  authors: [{ name: "홍민정", url: "https://github.com/HongMinJung" }],
  creator: "홍민정",
  publisher: "홍민정",
  // metadataBase: new URL(""),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "홍민정 | 2025포트폴리오",
    description:
      "디자인의 감각을 코드로, 신입 개발자의 포트폴리오 사이트입니다.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} font-pretendard antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider position="top-right">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

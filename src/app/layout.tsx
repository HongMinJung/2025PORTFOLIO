import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍민정 | 2025PORTFOLIO",
  description:
    "디자인 감각을 코드로, 앞으로의 성장이 기대되는 신입 개발자의 포트폴리오 사이트입니다.",
  keywords:
    "Next.js, React, TypeScript, JavaScript, Node.js, Three.js, 웹퍼블리셔, 프론트엔드 개발자, 풀스택 개발자, html, css, jQuery",
  authors: [{ name: "홍민정", url: "https://github.com/HongMinJung" }],
  openGraph: {
    title: "홍민정 | 2025PORTFOLIO",
    description:
      "디자인 감각을 코드로, 앞으로의 성장이 기대되는 신입 개발자의 포트폴리오 사이트입니다.",
    url: "https://2025minjung.vercel.app/",
    siteName: "홍민정 | 2025PORTFOLIO",
    //썸네일
    images: [
      {
        url: "/images/og-image.jpg", //추후 변경
        width: 1200,
        height: 630,
        alt: "홍민정 포트폴리오 썸네일",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

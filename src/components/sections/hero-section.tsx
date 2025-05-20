"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FullpageSection } from "@/components/layout/fullpage-section";
// useTheme 제거 또는 실제로 사용하도록 수정

// fullpage_api 타입 정의 추가
declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string | number, slide?: number) => void;
    };
  }
}

export function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  // theme 제거 (실제로 사용하는 경우 주석 해제)
  // const { theme } = useTheme()

  // 텍스트 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add("animate-in");
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // 안전하게 섹션 이동하는 함수
  const navigateToSection = (section: string) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(section);
    }
  };

  return (
    <FullpageSection background="gradient" id="home">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1
            ref={textRef}
            className="mb-6 text-4xl font-bold transition-all duration-1000 ease-out translate-y-8 opacity-0 sm:text-5xl md:text-6xl"
          >
            <span className="block">안녕하세요,</span>
            <span className="block mt-2 text-primary-light dark:text-primary-dark">
              풀스택 개발자 <br />
              홍민정입니다
            </span>
          </h1>

          <p className="max-w-xl mb-8 text-lg md:text-xl opacity-80">
            웹과 모바일 경험을 향상시키는 창의적인 솔루션을 만듭니다. 최신
            기술과 깔끔한 코드로 사용자 중심의 서비스를 구현합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => navigateToSection("contact")}>
              연락하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateToSection("projects")}
            >
              프로젝트 보기
            </Button>
          </div>
        </div>

        <div className="items-center justify-center hidden lg:flex">
          {/* 추가 시각 요소는 Three.js에서 처리됨 */}
        </div>
      </div>
    </FullpageSection>
  );
}

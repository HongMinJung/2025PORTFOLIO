"use client";

import { ReactNode } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

interface FullpageLayoutProps {
  children: ReactNode;
  onSectionChange?: (index: number) => void;
}

export function FullpageLayout({
  children,
  onSectionChange,
}: FullpageLayoutProps) {
  // activeSection 상태 제거

  const handleSectionChange = (_origin: number, destination: number) => {
    // origin 매개변수를 사용하지 않으므로 _origin으로 변경
    if (onSectionChange) onSectionChange(destination);
  };

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"} // 무료 오픈소스 프로젝트용 라이센스 얻거나 공백으로 둠
      scrollingSpeed={1000}
      navigation
      navigationPosition="right"
      navigationTooltips={["홈", "소개", "기술", "프로젝트", "연락처"]}
      showActiveTooltip
      anchors={["home", "about", "skills", "projects", "contact"]}
      scrollOverflow={true}
      credits={{
        enabled: true,
        label: "Made with fullPage.js",
        position: "right",
      }}
      onLeave={(origin, destination) =>
        handleSectionChange(origin.index, destination.index)
      }
      render={(
        {
          /* state, fullpageApi */
        }
      ) => {
        // state와 fullpageApi는 사용하지 않으므로 주석 처리
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
}

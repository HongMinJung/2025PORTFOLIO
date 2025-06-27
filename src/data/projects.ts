export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: string[];
  year: string;
};

// const categories = [
//   "ALL",           // 전체 프로젝트
//   "APP",           // 앱 프로젝트
//   "RESPONSIVE",    // 반응형 웹
//   "LANDING",       // 랜딩 페이지
//   "CLONE",         // 클론 코딩 프로젝트
//   "PERSONAL",      // 개인 프로젝트
//   "TEAM",          // 팀 협업 프로젝트
//   "CLIENT"         // 클라이언트 의뢰 프로젝트
// ];

export const projects: Project[] = [
  {
    id: "portfolio01",
    title: "2025 포트폴리오 웹사이트",
    description: "Next.js, TypeScript, Tailwind CSS를 활용하여 제작한 사이트입니다. 화면 크기에 따라 콘텐츠가 유연하게 보여지도록 반응형 디자인을 적용하였으며, 부드러운 애니메이션 효과를 통해 자연스러운 사용자 경험을 더했습니다.또한, 다크모드 기능도 지원하며 사용자의 취향과 환경에 맞게 편안하게 사이트를 이용할 수 있도록 하였습니다.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel" ],
    imageUrl: "/images/2025포트폴리오_썸네일.jpg",
    githubUrl: "https://github.com/HongMinJung/2025PORTFOLIO",
    category: [
      "ALL",
      "RESPONSIVE",
      "PERSONAL",
      "LANDING"
    ],
    year: "2025",
  },
  {
    id: "team-project01",
    title: "WealthWise - 개인 자산 관리 플랫폼",
    description: "개인 자산 관리를 위한 직관적인 웹 플랫폼입니다. Firebase를 통한 실시간 데이터 관리와 사용자 인증 기능을 제공하며 사용자가 자신의 재정 상태를 자산 한눈에 파악하고 관리할 수 있도록 구현하였습니다.",
    techStack: ["React", "JavaScript", "Styled Components", "Firebase"],
    imageUrl: "/images/WealthWise_썸네일.jpg",
    githubUrl: "https://github.com/Team-JungSeong/WealthWise",
    liveUrl: "https://wealthwise-71d31.web.app/",
    category: [
      "ALL", 
      "TEAM", 
      "RESPONSIVE",
    ],
    year: "2025 (개발 진행 중)"  
  },
  {
    id: "app-project01",
    title: "Eatgo - 배달 주문 앱",
    description: "React Native와 Supabase를 활용한 배달 음식 주문 앱입니다. 사용자가 간편하게 음식을 주문할 수 있는 모바일 플랫폼으로, 회원가입/로그인, 음식점 목록 조회, 메뉴 선택, 장바구니 관리, 주문하기, 주문 내역 조회 등 핵심 기능을 구현하였습니다. PostgreSQL 데이터베이스와 Supabase 인증 시스템을 통해 안정적인 데이터 관리를 제공합니다.",
    techStack: ["React Native", "Supabase", "PostgreSQL", "React Navigation", "TypeScript"],
    imageUrl: "/images/Eatgo_썸네일.jpg",
    githubUrl: "https://github.com/HongMinJung/EatGo",
    category: ["ALL", "APP", "PERSONAL"],
    year: "2025 (추가 기능 개발중)"
  },
  {
    id: "project02",
    title: "HONGTUBE - YouTube 패션 플랫폼",
    description: "React와 YouTube Data API v3를 활용한 패션 전용 동영상 플랫폼입니다. 패션 유튜버들의 콘텐츠를 카테고리별로 분류하고, 검색 기능을 통해 원하는 스타일을 쉽게 찾을 수 있습니다.",
    techStack: ["React", "YouTube Data API v3", "SCSS", "React Icons"],
    imageUrl: "/images/HONGTUBE_썸네일.jpg",
    githubUrl: "https://github.com/HongMinJung/HONGTUBE-YouTubeAPI",
    liveUrl: "https://hongtube.netlify.app/",
    category: ["ALL", "CLONE", "PERSONAL"],
    year: "2024 | 2025"
  },
  {
    id: "project03",
    title: "지켜줄개 - 유기견 보호소 홍보 페이지",
    description: "반응형 웹 디자인으로 구현된 유기견 보호소 홍보 페이지입니다. bxSlider를 활용한 배너 슬라이더, 강아지 정보 모달, 후원 신청 폼, 뉴스레터 링크 등 다양한 기능을 포함하고 있습니다. 모바일 퍼스트 접근법으로 모든 디바이스에서 최적화된 사용자 경험을 제공합니다.",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "bxSlider"],
    imageUrl: "/images/지켜줄개_썸네일.jpg",
    githubUrl: "https://github.com/HongMinJung/SUPPORT-Page",
    liveUrl: "https://supportdog.netlify.app/",
    category: ["ALL", "RESPONSIVE", "LANDING", "PERSONAL"],
    year: "2024 | 2025"
  },
  {
    id: "project04",
    title: "지켜줄개 - 유기견 보호소 홍보 페이지",
    description: "반응형 웹 디자인으로 구현된 유기견 보호소 홍보 페이지입니다. bxSlider를 활용한 배너 슬라이더, 강아지 정보 모달, 후원 신청 폼, 뉴스레터 링크 등 다양한 기능을 포함하고 있습니다. 모바일 퍼스트 접근법으로 모든 디바이스에서 최적화된 사용자 경험을 제공합니다.",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "bxSlider"],
    imageUrl: "/images/지켜줄개_썸네일.jpg",
    githubUrl: "https://github.com/HongMinJung/SUPPORT-Page",
    liveUrl: "https://supportdog.netlify.app/",
    category: ["ALL", "RESPONSIVE", "LANDING", "PERSONAL"],
    year: "2024 | 2025"
  }
]; 
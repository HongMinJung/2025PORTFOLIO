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
//   "RESPONSIVE",    // 반응형 웹
//   "LANDING",       // 랜딩 페이지
//   "CLONE",         // 클론 코딩 프로젝트
//   "PERSONAL",      // 개인 프로젝트
//   "TEAM",          // 팀 협업 프로젝트
//   "CLIENT"         // 클라이언트 의뢰 프로젝트
// ];

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "2025 포트폴리오 웹사이트",
    description: "Next.js, TypeScript, Tailwind CSS를 활용하여 제작한 사이트입니다. 화면 크기에 따라 콘텐츠가 유연하게 보여지도록 반응형 디자인을 적용하였으며, 부드러운 애니메이션 효과를 통해 자연스러운 사용자 경험을 더했습니다.\n 또한, 다크모드 기능도 지원하며 사용자의 취향과 환경에 맞게 편안하게 사이트를 이용할 수 있도록 하였습니다.",
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
    id: "project3",
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명을 입력해주세요.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/project3",
    category: ["ALL", "CLIENT"],
    year: "2024"
  },
  {
    id: "project4",
    title: "프로젝트 4",
    description: "프로젝트 4에 대한 설명을 입력해주세요.",
    techStack: ["React Native", "Firebase", "Redux"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/project4",
    category: ["ALL", "CLONE"],
    year: "2024"
  },
  {
    id: "project5",
    title: "프로젝트 5",
    description: "프로젝트 5에 대한 설명을 입력해주세요.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/project5",
    category: ["ALL", "TEAM"],
    year: "2024"
  }
]; 
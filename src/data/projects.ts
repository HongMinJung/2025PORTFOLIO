export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  category: string[];
  year: string;
  videoUrl?: string;
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
    title: "포트폴리오 웹사이트",
    description: "Next.js, TypeScript, Tailwind CSS를 사용한 모던한 포트폴리오 웹사이트입니다. Three.js를 활용한 3D 인터랙션과 반응형 디자인을 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
    features: [
      "3D 히어로 섹션",
      "반응형 디자인",
      "다크모드 지원",
      "섹션 오버랩 효과"
    ],
    category: [
      "ALL",
      "RESPONSIVE"
    ],
    year: "2024",
    videoUrl: "https://cdn.jsdelivr.net/gh/madebykin/personal/TRH-1.1.mp4"
  },
  {
    id: "project2",
    title: "프로젝트 2",
    description: "Next.js, TypeScript, Tailwind CSS를 사용한 모던한 포트폴리오 웹사이트입니다. Three.js를 활용한 3D 인터랙션과 반응형 디자인을 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
    features: [
      "기능 1",
      "기능 2",
      "기능 3"
    ],
    category: ["ALL", "RESPONSIVE"],
    year: "2024"  
  },
  {
    id: "project3",
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명을 입력해주세요.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x600/000/fff.png?text=Project+Image",
    githubUrl: "https://github.com/yourusername/project3",
    features: [
      "기능 1",
      "기능 2",
      "기능 3"
    ],
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
    features: [
      "기능 1",
      "기능 2",
      "기능 3"
    ],
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
    features: [
      "기능 1",
      "기능 2",
      "기능 3"
    ],
    category: ["ALL", "TEAM"],
    year: "2024"
  }
]; 
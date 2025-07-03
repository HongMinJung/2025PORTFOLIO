import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiSupabase,
  SiAdobephotoshop,
  SiFramer,
  SiSass,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface SkillDescription {
  title: string;
  description: string;
  technologies: Technology[];
}

export const skillDescriptions: Record<string, SkillDescription> = {
  Frontend: {
    title: "Frontend",  
    description: "반응형 UI 구현과 성능 최적화를 통한 모던 웹 개발을 진행합니다.",
    technologies: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SCSS", icon: SiSass },
      { name: "JavaScript", icon: SiJavascript },
      { name: "jQuery", icon: SiJquery },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Styled-components", icon: SiStyledcomponents },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer},
      { name: "React Native", icon: SiReact },
    ]
  },
  Backend: {
    title: "Backend",
    description: "서버개발과 데이터베이스 연동을 학습하고 있습니다.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "RESTful API", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
    ]
  },
  Design: {
    title: "Design",
    description: "기본적인 디자인 툴을 활용한 간단한 인터페이스 작업을 합니다.",
    technologies: [
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Figma", icon: SiFigma },
    ]
  },
  Tools: {
    title: "Tools",
    description: "효율적인 개발 워크플로우를 구축합니다.",
    technologies: [
      { name: "Git", icon: SiGithub },
      { name: "GitHub", icon: SiGithub },
    ]
  }
} as const;

export type SkillType = keyof typeof skillDescriptions;

// 기술 스택 설명을 문자열로 변환하는 유틸리티 함수
export const formatSkillDescription = (skill: SkillDescription): string => {
  return `${skill.description}\n\n주요 기술:\n${skill.technologies.map(tech => `• ${tech.name}`).join('\n')}`;
}; 
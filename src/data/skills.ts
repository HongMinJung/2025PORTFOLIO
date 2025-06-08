import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiFlutter,
  SiDart,
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
    description: "새로운 기술과 트렌드를 적극적으로 학습하며, 사용자 경험을 생각하며 웹 UI를 제공하기 위해 노력합니다.",
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
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Framer Motion", icon: SiFramer},
    ]
  },
  Backend: {
    title: "Backend",
    description: "데이터의 흐름과 서버 구조를 이해하려 노력하며, 기본에 충실한 개발을 추구합니다.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "RESTful API", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
    ]
  },
  Design: {
    title: "Design",
    description: "디자인을 경험하면 사용자의 관점에서 생각하는 것을 배울 수 있습니다.",
    technologies: [
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD", icon: SiAdobexd },
    ]
  },
  Tools: {
    title: "Tools",
    description: "더 나은 협업과 개발 환경 구축을 위해 여러 도구를 익히고, 실제 프로젝트에 활용해보고 있습니다.",
    technologies: [
      { name: "Git", icon: SiGithub },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
    ]
  }
} as const;

export type SkillType = keyof typeof skillDescriptions;

// 기술 스택 설명을 문자열로 변환하는 유틸리티 함수
export const formatSkillDescription = (skill: SkillDescription): string => {
  return `${skill.description}\n\n주요 기술:\n${skill.technologies.map(tech => `• ${tech.name}`).join('\n')}`;
}; 
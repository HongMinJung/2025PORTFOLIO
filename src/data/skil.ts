export interface Skill {
  name: string
  icon: string // FontAwesome 또는 이미지 경로
  category: 'frontend' | 'backend' | 'other'
  level: number // 1-5
  description: string
}

export const skills: Skill[] = [
  // 프론트엔드
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
    level: 4,
    description: '컴포넌트 기반 UI 개발 및 상태 관리'
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    category: 'frontend',
    level: 4,
    description: 'React 기반 풀스택 웹 프레임워크'
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'frontend',
    level: 4,
    description: '정적 타입으로 안정적인 코드 작성'
  },
  {
    name: 'TailwindCSS',
    icon: 'tailwind',
    category: 'frontend',
    level: 5,
    description: '유틸리티 우선 CSS 프레임워크'
  },
  {
    name: 'Three.js',
    icon: 'threejs',
    category: 'frontend',
    level: 3,
    description: '웹 기반 3D 그래픽 라이브러리'
  },
  
  // 백엔드
  {
    name: 'Node.js',
    icon: 'nodejs',
    category: 'backend',
    level: 3,
    description: '서버 사이드 JavaScript 런타임'
  },
  {
    name: 'Express',
    icon: 'express',
    category: 'backend',
    level: 3,
    description: 'Node.js 웹 애플리케이션 프레임워크'
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    category: 'backend',
    level: 3,
    description: 'NoSQL 문서 지향 데이터베이스'
  },
  {
    name: 'SQL',
    icon: 'sql',
    category: 'backend',
    level: 2,
    description: '관계형 데이터베이스 쿼리 언어'
  },
  
  // 기타
  {
    name: 'Git',
    icon: 'git',
    category: 'other',
    level: 4,
    description: '분산 버전 관리 시스템'
  },
  {
    name: 'Storybook',
    icon: 'storybook',
    category: 'other',
    level: 3,
    description: 'UI 컴포넌트 개발 및 문서화 도구'
  },
  {
    name: 'Figma',
    icon: 'figma',
    category: 'other',
    level: 3,
    description: 'UI/UX 디자인 및 프로토타이핑 도구'
  }
]
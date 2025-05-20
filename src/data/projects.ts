export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  category: 'web' | 'mobile' | 'other'
  featured: boolean
  links: {
    live?: string
    github?: string
    figma?: string
  }
  details: {
    role: string
    duration: string
    technologies: string[]
    challenges: string
    solutions: string
  }
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '온라인 학습 플랫폼',
    description: '개인 맞춤형 온라인 학습 경험을 제공하는 웹 애플리케이션',
    thumbnail: '/images/projects/project1.jpg',
    tags: ['React', 'Next.js', 'MongoDB', 'TailwindCSS'],
    category: 'web',
    featured: true,
    links: {
      live: 'https://example.com',
      github: 'https://github.com/username/project'
    },
    details: {
      role: '풀스택 개발',
      duration: '2개월',
      technologies: ['React', 'Next.js', 'MongoDB', 'Express', 'TailwindCSS'],
      challenges: '사용자별 맞춤형 학습 경로 생성과 실시간 진행 상황 추적 기능 구현에 어려움이 있었습니다.',
      solutions: '그래프 알고리즘을 활용한 학습 경로 생성 및 WebSocket을 통한 실시간 데이터 동기화로 해결했습니다.'
    }
  },
  {
    id: 'project-2',
    title: '포트폴리오 웹사이트',
    description: 'Three.js 애니메이션을 활용한 인터랙티브 포트폴리오 사이트',
    thumbnail: '/images/projects/project2.jpg',
    tags: ['Next.js', 'Three.js', 'TailwindCSS', 'TypeScript'],
    category: 'web',
    featured: true,
    links: {
      github: 'https://github.com/username/portfolio'
    },
    details: {
      role: '프론트엔드 개발',
      duration: '1개월',
      technologies: ['Next.js', 'Three.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
      challenges: '3D 요소와 웹 성능 사이의 균형을 유지하는 것이 어려웠습니다.',
      solutions: '최적화된 3D 모델과 선택적 로딩을 통해 성능 이슈를 해결했습니다.'
    }
  },
  {
    id: 'project-3',
    title: '소셜 미디어 대시보드',
    description: '여러 소셜 미디어 플랫폼의 데이터를 한 곳에서 분석할 수 있는 대시보드',
    thumbnail: '/images/projects/project3.jpg',
    tags: ['React', 'Redux', 'Chart.js', 'Node.js'],
    category: 'web',
    featured: false,
    links: {
      live: 'https://example.com/dashboard',
      github: 'https://github.com/username/dashboard'
    },
    details: {
      role: '풀스택 개발',
      duration: '3개월',
      technologies: ['React', 'Redux', 'Chart.js', 'Node.js', 'Express', 'PostgreSQL'],
      challenges: '다양한 API에서 데이터를 가져와 통합하는 과정에서 일관성 유지가 어려웠습니다.',
      solutions: '중앙화된 데이터 정규화 레이어를 구현하여 다양한 소스의 데이터를 일관된 형식으로 변환했습니다.'
    }
  },
  // 추가 프로젝트...
]
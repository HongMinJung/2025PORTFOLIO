import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Sections/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js, TypeScript, TailwindCSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던 웹 기술을 활용한 반응형 디자인과 다크 모드를 지원합니다.",
    slug: "portfolio-website",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/portfolio",
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    imageUrl:
      "https://placehold.co/600x400/e2e8f0/475569?text=Project+Thumbnail",
  },
};

export const LongDescription: Story = {
  args: {
    ...Default.args,
    description:
      "이 포트폴리오 웹사이트는 Next.js, TypeScript, TailwindCSS를 사용하여 개발되었습니다. 모던 웹 기술을 활용한 반응형 디자인과 다크 모드를 지원합니다. 이 프로젝트를 통해 최신 웹 개발 기술과 프론트엔드 아키텍처에 대한 이해를 깊게 할 수 있었습니다. 사용자 경험과 성능 최적화에 중점을 두고 개발했으며, SEO 최적화도 적용되어 있습니다. 이 프로젝트는 개인 포트폴리오를 위해 만들어졌으며, 자신의 프로젝트를 효과적으로 소개하는 방법에 대한 고민을 담았습니다.",
  },
};

export const NoLinks: Story = {
  args: {
    ...Default.args,
    demoUrl: undefined,
    repoUrl: undefined,
  },
};

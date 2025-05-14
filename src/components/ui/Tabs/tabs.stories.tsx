import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="about" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about">소개</TabsTrigger>
        <TabsTrigger value="skills">기술</TabsTrigger>
        <TabsTrigger value="projects">프로젝트</TabsTrigger>
      </TabsList>
      <TabsContent value="about" className="p-4">
        <h3 className="text-lg font-medium">소개</h3>
        <p className="text-sm mt-2">
          프론트엔드 개발자로서 사용자 경험을 중요시하며, 깨끗하고 유지보수
          가능한 코드를 작성합니다.
        </p>
      </TabsContent>
      <TabsContent value="skills" className="p-4">
        <h3 className="text-lg font-medium">기술 스택</h3>
        <ul className="text-sm mt-2 space-y-1 list-disc pl-4">
          <li>React, Next.js</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>Node.js</li>
        </ul>
      </TabsContent>
      <TabsContent value="projects" className="p-4">
        <h3 className="text-lg font-medium">프로젝트</h3>
        <p className="text-sm mt-2">
          다양한 웹 애플리케이션 프로젝트를 완성했습니다. 포트폴리오 섹션에서
          확인할 수 있습니다.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <Tabs
      defaultValue="frontend"
      orientation="vertical"
      className="flex w-[600px]"
    >
      <TabsList className="flex flex-col w-[150px] h-auto">
        <TabsTrigger
          value="frontend"
          className="justify-start text-left px-4 py-2"
        >
          프론트엔드
        </TabsTrigger>
        <TabsTrigger
          value="backend"
          className="justify-start text-left px-4 py-2"
        >
          백엔드
        </TabsTrigger>
        <TabsTrigger
          value="tools"
          className="justify-start text-left px-4 py-2"
        >
          개발 도구
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 p-4">
        <TabsContent value="frontend" className="h-full">
          <h3 className="text-lg font-medium">프론트엔드 기술</h3>
          <p className="text-sm mt-2">
            React, Next.js, TypeScript, TailwindCSS를 활용한 모던 웹 개발 경험이
            있습니다.
          </p>
        </TabsContent>
        <TabsContent value="backend" className="h-full">
          <h3 className="text-lg font-medium">백엔드 기술</h3>
          <p className="text-sm mt-2">
            Node.js, Express, MongoDB, PostgreSQL을 이용한 API 개발 및
            데이터베이스 관리 경험이 있습니다.
          </p>
        </TabsContent>
        <TabsContent value="tools" className="h-full">
          <h3 className="text-lg font-medium">개발 도구</h3>
          <p className="text-sm mt-2">
            Git, Docker, CI/CD 파이프라인 구축, AWS 클라우드 서비스 활용 경험이
            있습니다.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { MainLayout } from "./main-layout";

const meta: Meta<typeof MainLayout> = {
  title: "Layout/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-6">페이지 제목</h1>
        <p className="mb-4">
          이것은 메인 레이아웃에 포함된 내용입니다. 헤더와 푸터 사이에 페이지
          콘텐츠가 표시됩니다.
        </p>
        <p>
          레이아웃은 모든 페이지에서 일관된 디자인을 유지하는 데 도움이 됩니다.
        </p>
      </div>
    ),
  },
};

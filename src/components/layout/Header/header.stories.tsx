import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

const navItems = [
  { label: "홈", href: "/" },
  { label: "소개", href: "/about" },
  { label: "프로젝트", href: "/projects" },
  { label: "기술 스택", href: "/skills" },
];

export const Default: Story = {
  args: {
    navItems,
  },
};

export const WithLogo: Story = {
  args: {
    navItems,
    logo: (
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl">로고</span>
      </div>
    ),
  },
};

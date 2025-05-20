// stories/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    fullWidth: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "버튼",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "버튼",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "버튼",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    children: "작은 버튼",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    children: "큰 버튼",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    children: "전체 너비 버튼",
    size: "md",
    fullWidth: true,
  },
};

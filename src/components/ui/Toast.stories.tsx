import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/ui/toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    toast: {
      id: "1",
      message: "정보 메시지입니다.",
      type: "info",
      duration: 3000,
    },
    onRemove: () => {},
  },
};

export const Success: Story = {
  args: {
    toast: {
      id: "2",
      message: "작업이 성공적으로 완료되었습니다.",
      type: "success",
      duration: 3000,
    },
    onRemove: () => {},
  },
};

export const Warning: Story = {
  args: {
    toast: {
      id: "3",
      message: "주의가 필요한 상황입니다.",
      type: "warning",
      duration: 3000,
    },
    onRemove: () => {},
  },
};

export const Error: Story = {
  args: {
    toast: {
      id: "4",
      message: "오류가 발생했습니다. 다시 시도해주세요.",
      type: "error",
      duration: 3000,
    },
    onRemove: () => {},
  },
};

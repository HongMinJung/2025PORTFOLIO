import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "이름을 입력하세요",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "이메일을 입력하세요",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "비활성화된 입력 필드",
    value: "편집할 수 없음",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">
        이메일
      </label>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        {...args}
      />
    </div>
  ),
};

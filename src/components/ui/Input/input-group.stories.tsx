import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./input-group";

const meta: Meta<typeof InputGroup> = {
  title: "UI/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    label: "이름",
    id: "name",
    inputProps: {
      placeholder: "이름을 입력하세요",
    },
  },
};

export const WithHelperText: Story = {
  args: {
    label: "이메일",
    id: "email",
    helperText: "연락 가능한 이메일 주소를 입력하세요",
    inputProps: {
      type: "email",
      placeholder: "email@example.com",
    },
  },
};

export const WithError: Story = {
  args: {
    label: "비밀번호",
    id: "password",
    error: "비밀번호는 8자 이상이어야 합니다",
    inputProps: {
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
  },
};

export const WithHiddenLabel: Story = {
  args: {
    label: "검색",
    id: "search",
    hideLabel: true,
    inputProps: {
      placeholder: "검색어를 입력하세요",
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "사용자명",
    id: "username",
    inputProps: {
      disabled: true,
      value: "johndoe",
      placeholder: "사용자명을 입력하세요",
    },
  },
};

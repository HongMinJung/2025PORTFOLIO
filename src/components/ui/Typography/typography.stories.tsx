import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "blockquote",
        "list",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    weight: {
      control: "select",
      options: [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "포트폴리오 타이틀 (H1)",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "섹션 제목 (H2)",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "서브 섹션 제목 (H3)",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children:
      "기본 단락 텍스트입니다. 포트폴리오에 사용될 본문 스타일을 보여줍니다. 가독성과 디자인에 중점을 두었습니다.",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "주요 단락이나 소개 문구에 사용되는 리드 텍스트입니다.",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children: "인용문이나 강조하고 싶은 내용을 표시할 때 사용합니다.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-[800px]">
      <Typography variant="h1">타이틀 (H1)</Typography>
      <Typography variant="h2">메인 헤딩 (H2)</Typography>
      <Typography variant="h3">서브 헤딩 (H3)</Typography>
      <Typography variant="h4">작은 헤딩 (H4)</Typography>
      <Typography variant="h5">미니 헤딩 (H5)</Typography>
      <Typography variant="h6">마이크로 헤딩 (H6)</Typography>
      <Typography variant="p">
        기본 단락 텍스트입니다. 읽기 편한 본문에 사용됩니다.
      </Typography>
      <Typography variant="lead">
        소개 섹션이나 중요 문구에 사용되는 리드 텍스트입니다.
      </Typography>
      <Typography variant="blockquote">
        인용문이나 강조하고 싶은 내용을 표시할 때 사용합니다.
      </Typography>
      <div>
        <Typography variant="list" as="ul">
          <li>리스트 아이템 1</li>
          <li>리스트 아이템 2</li>
          <li>리스트 아이템 3</li>
        </Typography>
      </div>
      <Typography variant="large">큰 텍스트입니다.</Typography>
      <Typography variant="small">작은 텍스트입니다.</Typography>
      <Typography variant="muted">
        덜 강조된 문구에 사용되는 뮤티드 텍스트입니다.
      </Typography>
    </div>
  ),
};

export const WeightVariants: Story = {
  render: () => (
    <div className="space-y-3 w-[600px]">
      <Typography weight="thin">Thin 가중치 (100)</Typography>
      <Typography weight="extralight">ExtraLight 가중치 (200)</Typography>
      <Typography weight="light">Light 가중치 (300)</Typography>
      <Typography weight="normal">Normal 가중치 (400)</Typography>
      <Typography weight="medium">Medium 가중치 (500)</Typography>
      <Typography weight="semibold">SemiBold 가중치 (600)</Typography>
      <Typography weight="bold">Bold 가중치 (700)</Typography>
      <Typography weight="extrabold">ExtraBold 가중치 (800)</Typography>
      <Typography weight="black">Black 가중치 (900)</Typography>
    </div>
  ),
};

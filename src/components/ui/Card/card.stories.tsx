import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "../Button/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드에 대한 간략한 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          카드 내용이 여기에 들어갑니다. 이 부분에 텍스트나 다른 컴포넌트를 넣을
          수 있습니다.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="default">확인</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProjectCard: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <div className="h-[180px] bg-muted" />
      <CardHeader>
        <CardTitle>프로젝트 제목</CardTitle>
        <CardDescription>프론트엔드 / React / TypeScript</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          포트폴리오에 표시될 프로젝트 카드 예시입니다. 이 부분에 프로젝트에
          대한 간략한 설명이 들어갑니다.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="default" size="sm">
          데모 보기
        </Button>
        <Button variant="outline" size="sm">
          코드 보기
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const HorizontalCard: Story = {
  render: () => (
    <Card className="flex flex-row w-[500px] overflow-hidden">
      <div className="w-[180px] bg-muted" />
      <div className="flex flex-col flex-1">
        <CardHeader>
          <CardTitle>가로형 카드</CardTitle>
          <CardDescription>가로 레이아웃의 카드 예시</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            이미지와 컨텐츠가 가로로 배치된 카드 레이아웃입니다.
          </p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="default" size="sm">
            자세히 보기
          </Button>
        </CardFooter>
      </div>
    </Card>
  ),
};

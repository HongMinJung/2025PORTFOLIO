import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "../Button/button";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">대화상자 열기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로젝트 상세 정보</DialogTitle>
          <DialogDescription>
            이 프로젝트에 대한 자세한 정보를 확인하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm">
            이 프로젝트는 Next.js, TypeScript, TailwindCSS를 사용하여 개발된
            포트폴리오 웹사이트입니다. 모던 웹 기술을 활용하여 반응형 디자인과
            다크 모드를 지원합니다.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">닫기</Button>
          <Button>더 알아보기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">연락하기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>메시지 보내기</DialogTitle>
          <DialogDescription>
            아래 양식을 작성하여 메시지를 보내세요. 빠른 시일 내에 답변
            드리겠습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm">
              이름
            </label>
            <input
              id="name"
              className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="홍길동"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm">
              이메일
            </label>
            <input
              id="email"
              type="email"
              className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="example@email.com"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="message" className="text-right text-sm">
              메시지
            </label>
            <textarea
              id="message"
              className="col-span-3 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="메시지를 입력하세요..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">보내기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

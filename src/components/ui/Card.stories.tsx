import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";

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
    <Card className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardBody>
        <p>This is the card content where you can display information.</p>
      </CardBody>
      <CardFooter>
        <p className="text-sm text-gray-500">Last updated: 2025.05.20</p>
      </CardFooter>
    </Card>
  ),
};

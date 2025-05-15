import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./contact-form";

const meta: Meta<typeof ContactForm> = {
  title: "Sections/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    className: "w-full max-w-md",
  },
};

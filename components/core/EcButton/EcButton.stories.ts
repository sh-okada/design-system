import { fn } from "@storybook/test";

import { EcButton } from "./EcButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcButton",
  component: EcButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    intent: "primary",
    children: "ボタン",
    size: "medium",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof EcButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    intent: "secondary",
  },
};

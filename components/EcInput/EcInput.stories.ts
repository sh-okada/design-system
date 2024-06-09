import { fn } from "@storybook/test";

import { EcInput } from "./EcInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcInput",
  component: EcInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "ラベルテキスト",
    helperText: "ヘルパーテキスト",
    onChange: fn(),
  },
  argTypes: {
    value: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof EcInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

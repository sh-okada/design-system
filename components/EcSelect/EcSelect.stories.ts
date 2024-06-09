import { fn } from "@storybook/test";

import { EcSelect } from "./EcSelect";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcSelect",
  component: EcSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    selectItems: [
      { label: "label1", value: "value1" },
      { label: "label2", value: "value2" },
      { label: "label3", value: "value3" },
    ],
    helperText: "ヘルパーテキスト",
    onChange: fn(),
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof EcSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    value: "value2",
  },
};

export const Unselected: Story = {
  args: {
    unselectedLabel: "選択してください",
  },
};

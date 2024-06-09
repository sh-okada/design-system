import { EcStack } from "./EcStack";
import { EcButton } from "../EcButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcStack",
  component: EcStack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EcStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <EcStack {...args}>
        <EcButton>ボタン</EcButton>
        <EcButton>ボタン</EcButton>
        <EcButton>ボタン</EcButton>
        <EcButton>ボタン</EcButton>
      </EcStack>
    );
  },
  args: {
    spacing: 10,
  },
};

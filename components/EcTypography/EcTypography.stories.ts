import { EcTypography } from "./EcTypography";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcTypography",
  component: EcTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Typography",
  },
} satisfies Meta<typeof EcTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import { EcLink } from "./EcLink";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Core/EcLink",
  component: EcLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    href: "#",
    label: "リンク",
  },
} satisfies Meta<typeof EcLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

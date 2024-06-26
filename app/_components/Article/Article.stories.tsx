import { Article } from "./Article";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Article",
  component: Article,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    href: "#",
    title: "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
    name: "sh-okada",
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

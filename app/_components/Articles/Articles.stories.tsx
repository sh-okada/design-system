import type { Meta, StoryObj } from "@storybook/react";

import { Articles } from "./Articles";

const meta = {
  title: "Components/Articles",
  component: Articles,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    articles: [
      {
        id: "id1",
        title:
          "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
        name: "sh-okada",
      },
      {
        id: "id2",
        title:
          "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
        name: "sh-okada",
      },
      {
        id: "id3",
        title:
          "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
        name: "sh-okada",
      },
      {
        id: "id4",
        title:
          "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
        name: "sh-okada",
      },
      {
        id: "id5",
        title:
          "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
        name: "sh-okada",
      },
    ],
  },
} satisfies Meta<typeof Articles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Skeleton: Story = {
  render: () => {
    return <Articles.Skeleton />;
  },
};

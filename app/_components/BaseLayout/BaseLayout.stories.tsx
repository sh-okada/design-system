import { EcTypography } from "@/components/core";
import { BaseLayout } from "./BaseLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/BaseLayout",
  component: BaseLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BaseLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <BaseLayout>
        <EcTypography>1</EcTypography>
        <EcTypography>2</EcTypography>
        <EcTypography>3</EcTypography>
        <EcTypography>4</EcTypography>
        <EcTypography>5</EcTypography>
        <EcTypography>6</EcTypography>
        <EcTypography>7</EcTypography>
        <EcTypography>8</EcTypography>
        <EcTypography>9</EcTypography>
        <EcTypography>10</EcTypography>
        <EcTypography>11</EcTypography>
        <EcTypography>12</EcTypography>
      </BaseLayout>
    );
  },
};

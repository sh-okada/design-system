import type { Meta, StoryObj } from '@storybook/react';

import { Articles } from './Articles';

const meta = {
  component: Articles,
} satisfies Meta<typeof Articles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
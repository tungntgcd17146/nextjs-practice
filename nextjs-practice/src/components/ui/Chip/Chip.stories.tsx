import type { Meta, StoryObj } from '@storybook/react';

import Chip from '.';
import { themes } from '@/src/themes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ui components/Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChipCustom: Story = {
  args: {
    sx: {
      borderRadius: '6px',
      backgroundColor: themes.colors.red[500],
      height: '32px',
      width: '16px',
    },
    variant: 'filled',
  },
};

export const ChipPriceBase: Story = {
  args: {
    price: 100,
    variant: 'filled',
  },
};

export const ChipPriceIs0: Story = {
  args: {
    price: 0,
    variant: 'filled',
  },
};

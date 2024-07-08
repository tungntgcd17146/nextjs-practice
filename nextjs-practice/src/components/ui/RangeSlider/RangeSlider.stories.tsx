import type { Meta, StoryObj } from '@storybook/react';

import RangeSlider from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ui components/RangeSlider',
  component: RangeSlider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RangeSliderBase: Story = {
  args: {
    min: 0,
    max: 100,
    startValue: 0,
    endValue: 0,
    label: 'Price',
    onChangeValue: () => {},
  },
};

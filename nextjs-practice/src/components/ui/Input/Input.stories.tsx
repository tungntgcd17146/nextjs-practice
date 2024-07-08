import type { Meta, StoryObj } from '@storybook/react';
import SearchIcon from '@mui/icons-material/Search';

import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ui components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputBase: Story = {
  args: {
    startIcon: <SearchIcon />,
    searchWidth: '300px',
    placeholder: 'Search ...',
  },
};

export const InputWithEndHelper: Story = {
  args: {
    startIcon: <SearchIcon />,
    endHelper: '⌘ F',
    searchWidth: '300px',
    placeholder: 'Search ...',
  },
};

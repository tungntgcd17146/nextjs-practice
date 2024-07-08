import type { Meta, StoryObj } from '@storybook/react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import NavItem from '.';
import { BASE_LOGIN_URL } from '@/src/constants/common';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ui components/NavItem',
  component: NavItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavItemBase: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: false,
    go: BASE_LOGIN_URL,
    isShowText: true,
  },
};

export const NavItemHiddenText: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: false,
    go: BASE_LOGIN_URL,
    isShowText: false,
  },
};

export const NavItemSelected: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: true,
    go: BASE_LOGIN_URL,
    isShowText: true,
  },
};

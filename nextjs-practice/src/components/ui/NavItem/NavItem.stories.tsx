import type { Meta, StoryObj } from '@storybook/react'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

import NavItem from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NavItem',
  component: NavItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof NavItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavItemBase: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: false,
    go: '/',
    isShowText: true
  }
}

export const NavItemHiddenText: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: false,
    go: '/',
    isShowText: false
  }
}

export const NavItemSelected: Story = {
  args: {
    icon: <HelpOutlineOutlinedIcon />,
    text: 'Nav Item',
    index: 1,
    isSelected: true,
    go: '/',
    isShowText: true
  }
}

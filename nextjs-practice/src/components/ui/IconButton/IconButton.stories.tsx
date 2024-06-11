import type { Meta, StoryObj } from '@storybook/react'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

import IconButton from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconButtonBase: Story = {
  args: {
    children: <HelpOutlineOutlinedIcon />
  }
}

export const IconButtonBadge: Story = {
  args: {
    children: <HelpOutlineOutlinedIcon />,
    badgeContent: 2
  }
}

export const IconButtonCustomHoverActive: Story = {
  args: {
    children: <HelpOutlineOutlinedIcon />,
    sx: {
      '&:hover': {
        color: 'red'
      }
    }
  }
}

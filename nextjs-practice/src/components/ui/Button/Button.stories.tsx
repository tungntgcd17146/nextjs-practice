import type { Meta, StoryObj } from '@storybook/react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import Button from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonBase: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'medium'
  }
}

export const ButtonDisable: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'medium',
    disabled: true
  }
}

export const ButtonSuccess: Story = {
  args: {
    children: 'Button',
    color: 'success',
    size: 'medium'
  }
}

export const ButtonMode: Story = {
  args: {
    children: 'Button',
    color: 'inherit',
    size: 'medium'
  }
}

export const ButtonIconLeft: Story = {
  args: {
    children: 'Button',
    color: 'inherit',
    size: 'medium',
    startIcon: <HomeOutlinedIcon />
  }
}

export const ButtonIconRight: Story = {
  args: {
    children: 'Button',
    color: 'inherit',
    size: 'medium',
    endIcon: <HomeOutlinedIcon />
  }
}

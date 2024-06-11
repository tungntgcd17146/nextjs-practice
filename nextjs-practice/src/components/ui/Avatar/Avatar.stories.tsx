import type { Meta, StoryObj } from '@storybook/react'
import Customer1 from '@/public/assets/customer1.webp'

import DragHandleIcon from '@mui/icons-material/DragHandle'

import Avatar from '.'
import { themes } from '@/src/themes'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvatarBase: Story = {
  args: {
    imgNextSrc: Customer1,
    alt: "customer1.webp",
    size: 'medium',
    avtBackground: themes.colors.yellow[600]
  }
}

export const AvatarBadge: Story = {
  args: {
    imgNextSrc: Customer1,
    alt: "public/assets/customer1.webp",
    size: 'large',
    avtBackground: themes.colors.yellow[600],
    BadgeIcon: <DragHandleIcon />
  }
}

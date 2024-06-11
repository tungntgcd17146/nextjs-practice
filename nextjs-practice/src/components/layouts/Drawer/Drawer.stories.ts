import type { Meta, StoryObj } from '@storybook/react'

import Drawer from '.'
import { listItems } from "@/src/components/layouts/Header";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Drawer',
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DrawerBase: Story = {
  args: {
    isOpen: true,
    onClose: () => void 0,
    onOpen: () => void 0,
    listItems: listItems
  }
}

import type { Meta, StoryObj } from '@storybook/react'

import ContactItem from '.'
import { fakeUserContact } from '@/src/constants/data'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ContactItem',
  component: ContactItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof ContactItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ContactItemFollowers: Story = {
  args: {
    user: fakeUserContact
  }
}

export const ContactItemFollowing: Story = {
  args: {
    user: {
      ...fakeUserContact,
      contactStatus: 'following'
    }
  }
}

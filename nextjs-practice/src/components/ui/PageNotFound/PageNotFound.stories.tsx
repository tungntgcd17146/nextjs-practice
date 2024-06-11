import type { Meta, StoryObj } from '@storybook/react'

import NotFoundPage from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NotFoundPageCustom: Story = {
  args: {
    headerContent: 'Oops',
    body: 'This page does not exist.',
    footer: 'This feature will be implemented in the future.'
  }
}

export const NotFoundPagePriceBase: Story = {
  args: {
    isBrowserError: true
  }
}

import type { Meta, StoryObj } from '@storybook/react'

import SearchInput from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SearchInputBase: Story = {
  args: {
    searchWidth: '300px',
    placeholder: 'Search ...'
  }
}

export const SearchInputWithEndHelper: Story = {
  args: {
    endHelper: '⌘ F',
    searchWidth: '300px',
    placeholder: 'Search ...'
  }
}

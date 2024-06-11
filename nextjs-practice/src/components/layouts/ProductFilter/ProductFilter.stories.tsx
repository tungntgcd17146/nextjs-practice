import type { Meta, StoryObj } from '@storybook/react'

import ProductFilter from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ProductFilter',
  component: ProductFilter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof ProductFilter>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProductFilterBase: Story = {
  args: {
    totalProducts: 100,
    showingProducts: 10,
    onSubmit: () => {},
    onReset: () => {},
    anchorEl: (<button />) as unknown as HTMLElement
  }
}

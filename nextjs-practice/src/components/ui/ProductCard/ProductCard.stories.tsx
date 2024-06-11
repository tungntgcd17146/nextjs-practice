import type { Meta, StoryObj } from '@storybook/react'

import ProductCard from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ProductCard',
  component: ProductCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProductCardBase: Story = {
  args: {
    id: 1,
    productName: 'Product',
    productCategory: 'Category',
    productPrice: 100,
    productRating: 4.5,
    productRatingCount: 100,
    popularity: 'Most popular'
  }
}

export const ProductCardPriceWithEmptyRating: Story = {
  args: {
    id: 2,
    productName: 'Product',
    productCategory: 'Category',
    productPrice: 100,
    productRating: 0,
    productRatingCount: 0,
    popularity: 'Most popular'
  }
}

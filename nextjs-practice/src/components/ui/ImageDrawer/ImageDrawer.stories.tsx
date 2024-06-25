import type { Meta, StoryObj } from "@storybook/react";
import DarkProductDetail from "@/public/assets/ProductDetailImgDark.webp";

import ImageDrawer from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ImageDrawer",
  component: ImageDrawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ImageDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ImageDrawerBase: Story = {
  args: {
    alt: "Product Detail",
    image: DarkProductDetail,
  },
};

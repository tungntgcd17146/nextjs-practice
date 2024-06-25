import type { Meta, StoryObj } from "@storybook/react";

import Tabs from ".";
import { tabItems } from "@/src/mocks/shopTab";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TabsBase: Story = {
  args: {
    tabSelected: 0,
    tabItems: tabItems,
  },
};

export const TabsDisableItem: Story = {
  args: {
    tabSelected: 0,
    tabItems: [
      ...tabItems,
      { ...tabItems[2], text: "Disable", isDisabled: true },
    ],
  },
};

export const TabsSelectedDefault: Story = {
  args: {
    tabSelected: 0,
    tabItems: [
      ...tabItems,
      { ...tabItems[2], text: "Selected", isSelected: true },
    ],
  },
};

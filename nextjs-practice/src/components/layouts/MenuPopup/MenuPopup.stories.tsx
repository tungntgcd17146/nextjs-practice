import type { Meta, StoryObj } from '@storybook/react';

import MenuPopup from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layouts/MenuPopup',
  component: MenuPopup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MenuPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MenuPopupBase: Story = {
  args: {
    onCloseModal: () => {},
    anchorEl: (<button />) as unknown as HTMLElement,
    logout: async () => {},
  },
};

import type { Meta, StoryObj } from '@storybook/react'

import Checkboxes from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkboxes',
  component: Checkboxes,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Checkboxes>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CheckboxesGroupsLeftLabel: Story = {
  args: {
    checkboxOptions: [
      {
        id: '1',
        label: 'All Products',
        labelPlacement: 'start',
        isChecked: false
      },
      {
        id: '2',
        label: 'UI Kit',
        labelPlacement: 'start',
        isChecked: false
      },
      {
        id: '3',
        label: 'IIIustration',
        labelPlacement: 'start',
        isChecked: false
      },
      {
        id: '4',
        label: 'Wireframe Kit',
        labelPlacement: 'start',
        isChecked: false
      },
      {
        id: '5',
        label: 'Icons',
        labelPlacement: 'start',
        isChecked: false
      }
    ]
  }
}

export const CheckboxesGroupsRightLabel: Story = {
  args: {
    checkboxOptions: [
      {
        id: '1',
        label: 'All Products',
        labelPlacement: 'end',
        isChecked: false
      },
      {
        id: '2',
        label: 'UI Kit',
        labelPlacement: 'end',
        isChecked: false
      },
      {
        id: '3',
        label: 'IIIustration',
        labelPlacement: 'end',
        isChecked: false
      },
      {
        id: '4',
        label: 'Wireframe Kit',
        labelPlacement: 'end',
        isChecked: false
      },
      {
        id: '5',
        label: 'Icons',
        labelPlacement: 'end',
        isChecked: false
      }
    ]
  }
}

import type { Meta, StoryObj } from '@storybook/react';

import SignupFields from '.';
import { SignupFormInputs } from '@/src/types/forms';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

// Create mock functions
const mockRegister: UseFormRegister<SignupFormInputs> = (name) => ({
  name,
  onBlur: async () => {},
  onChange: async () => {},
  ref: () => {},
});

const mockHandleSubmit: UseFormHandleSubmit<SignupFormInputs> =
  (onSubmit) => async (e) => {
    e?.preventDefault();
    const mockEvent = {
      preventDefault: () => {},
    } as unknown as React.BaseSyntheticEvent;
    const formValues = {
      email: 'mock@example.com',
      password: 'mockPassword',
    };
    await onSubmit(formValues, mockEvent);
  };

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Forms/SignupFields',
  component: SignupFields,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SignupFields>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SignupFieldsBase: Story = {
  args: {
    onSubmit: () => {},
    errors: {},
    submitLoading: false,
    isMatchedConfirmPassword: true,
    onChangePassword: () => {},
    onChangeConfirmPassword: () => {},
    register: mockRegister,
    handleSubmit: mockHandleSubmit,
  },
};

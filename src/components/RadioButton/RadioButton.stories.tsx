import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Option A', backgroundColor: '#fde4ec' },
};
export const Disabled: Story = {
  args: { label: 'Option A', backgroundColor: '#fde4ec', disabled: true },
};

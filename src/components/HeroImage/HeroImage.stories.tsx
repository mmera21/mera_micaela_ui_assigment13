import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const sampleSrc =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400">' +
      '<rect width="1200" height="400" fill="#f8c8dc"/>' +
      '</svg>',
  );

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: sampleSrc,
    title: 'Welcome',
    subtitle: 'My component library',
    backgroundColor: '#f8c8dc',
  },
};
export const Disabled: Story = {
  args: {
    src: sampleSrc,
    title: 'Welcome',
    subtitle: 'My component library',
    backgroundColor: '#f8c8dc',
    disabled: true,
  },
};

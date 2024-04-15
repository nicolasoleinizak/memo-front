import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GameCard } from '@/components/game-card';

const meta = {
  title: 'Game/GameCard',
  component: GameCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'Game title',
    imageUrl: 'https://via.placeholder.com/240',
    onClick: fn(() => {}),
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Played: Story = {
  args: {
    played: true,
  },
};

export const NonPlayed: Story = {
  args: {
    played: false,
  },
};

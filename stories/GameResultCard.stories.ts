import type { Meta, StoryObj } from '@storybook/react';
import { GameResultCard } from '@/components/game-result-card';

const meta = {
  title: 'Example/GameResultCard',
  component: GameResultCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Game Title',
    imageUrl: 'https://via.placeholder.com/240',
    score: 40.9999,
  },
} satisfies Meta<typeof GameResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowScore: Story = {
  args: {
    score: 5,
  },
};

export const MediumLowScore: Story = {
  args: {
    score: 25,
  },
};

export const MediumScore: Story = {
  args: {
    score: 50,
  },
};

export const MediumHighScore: Story = {
  args: {
    score: 75,
  },
};

export const HighScore: Story = {
  args: {
    score: 95,
  },
};

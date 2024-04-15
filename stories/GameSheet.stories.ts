import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GameSheet } from '@/components/game/game-sheet';

const meta = {
  title: 'Game/GameSheet',
  component: GameSheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: {
      id: 1,
      url: 'https://via.placeholder.com/200',
    },
    order: 1,
    display: false,
    checked: false,
    onClick: fn(),
  },
} satisfies Meta<typeof GameSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hidden: Story = {
};

export const Displayed: Story = {
  args: {
    display: true,
  },
};

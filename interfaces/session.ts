import { Game } from './game';

export interface Session {
  id: number
  game: Game
  retries: number
  numberOfPairs: number
}
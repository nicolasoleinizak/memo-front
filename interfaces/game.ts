import { Sheet } from './sheet';

export interface Game {
    id: number;
    name: string;
    sheets: Sheet[];
}
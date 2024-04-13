import { Image } from './image';

export interface Sheet {
  image: Image;
  checked: boolean;
  display: boolean;
  key: number;
}
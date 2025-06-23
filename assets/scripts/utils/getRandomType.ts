import { BubbleType } from "../constants/bubbleSpriteFrame";

const numberBubbleMap: Record<number, BubbleType> = {
  1: 'block_blue',
  2: 'block_green',
  3: 'block_purpure',
  4: 'block_red',
  5: 'block_yellow'
}

export const getRandomType = (): BubbleType => {
  const random = Math.floor(Math.random() * 5) + 1;
  
  return numberBubbleMap[random]
}

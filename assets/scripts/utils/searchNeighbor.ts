import { BubbleType } from "../constants/bubbleSpriteFrame";
import config from "../constants/config";


export const searchNeighbor = (pos: cc.Vec2, visited: Set<string>, groupToRemove: cc.Node[], type: BubbleType, board: Array<Array<cc.Node | null>>) => {
  if (pos.x < 0 || pos.y < 0 || pos.x >= config.BOARD_WIDTH || pos.y >= config.BOARD_HEIGHT) return;
  const key = `${pos.x},${pos.y}`;
  if (visited.has(key)) return;

  const node = board[pos.x][pos.y];
  if (!node) return;

  const bubble = node.getComponent('Bubble');
  if (bubble.type === type) {
    visited.add(key);
    groupToRemove.push(node);
    searchNeighbor(cc.v2(pos.x + 1, pos.y), visited, groupToRemove, type, board);
    searchNeighbor(cc.v2(pos.x - 1, pos.y), visited, groupToRemove, type, board);
    searchNeighbor(cc.v2(pos.x, pos.y + 1), visited, groupToRemove, type, board);
    searchNeighbor(cc.v2(pos.x, pos.y - 1), visited, groupToRemove, type, board);
  }
  return groupToRemove
};

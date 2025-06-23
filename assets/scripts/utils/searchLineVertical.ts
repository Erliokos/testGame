import config from "../constants/config";

export const searchLineVertical = (pos: cc.Vec2, groupToRemove: cc.Node[], board: Array<Array<cc.Node | null>>, direction?: 'up' | 'down') => {
  if (pos.x < 0 || pos.y < 0 || pos.x >= config.BOARD_WIDTH || pos.y >= config.BOARD_HEIGHT) return;
  groupToRemove.push(board[pos.x][pos.y])
  if(direction === 'up'){
    searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up')
    return groupToRemove
  }
  if(direction === 'down') {
    searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down')
    return groupToRemove
  }
  searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up')
  searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down')
  return groupToRemove
}

export const searchBombField = (pos: cc.Vec2, groupToRemove: cc.Node[], board: Array<Array<cc.Node | null>>, bombRadius: number) => {
  const width = board.length;
  const height = board[0].length;

  for (let dx = -bombRadius; dx <= bombRadius; dx++) {
    for (let dy = -bombRadius; dy <= bombRadius; dy++) {
      const x = pos.x + dx;
      const y = pos.y + dy;

      if (x >= 0 && x < width && y >= 0 && y < height) {
        const node = board[x][y];
        if (node && !groupToRemove.includes(node)) {
          groupToRemove.push(node);
        }
      }
    }
  }

  return groupToRemove;
}

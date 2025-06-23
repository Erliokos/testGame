import config from "../constants/config"

export const getNewPositionByStep = (position: cc.Vec2, stepX: number, stepY: number) => {
  return cc.v2(position.x * stepX + stepX / 2 + config.BOARD_SIZE, position.y * stepY + stepY / 2 + config.BOARD_SIZE)
}

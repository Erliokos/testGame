const { ccclass, property } = cc._decorator;

export type BubbleType = 'block_green' | 'block_blue' | 'block_purpure' | 'block_yellow' | 'block_red'


@ccclass('BubbleSpriteSet')
export class BubbleSpriteSet {
  @property({ type: cc.SpriteFrame })
  block_green: cc.SpriteFrame | null = null;

  @property({ type: cc.SpriteFrame })
  block_blue: cc.SpriteFrame | null = null;

  @property({ type: cc.SpriteFrame })
  block_purpure: cc.SpriteFrame | null = null;

  @property({ type: cc.SpriteFrame })
  block_yellow: cc.SpriteFrame | null = null;
  
  @property({ type: cc.SpriteFrame })
  block_red: cc.SpriteFrame | null = null;

  get(type: BubbleType): cc.SpriteFrame | null {
    return this[type];
  }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { BubbleSpriteSet, BubbleType } from "./constants/bubbleSpriteFrame";
import { getRandomType } from "./utils/getRandomType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bubble extends cc.Component {

    @property(BubbleSpriteSet)
    public bubbleSprites: BubbleSpriteSet = new BubbleSpriteSet();

    @property(cc.AudioClip)
    destroySound: cc.AudioClip | null = null;

    type: BubbleType = 'block_blue'

    sprite: cc.Sprite

    size: number

    coord: cc.Vec2

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onKeyDown, this);
    }


    initType(type?: BubbleType) {
        this.sprite = this.getComponent(cc.Sprite)
        if(!type) {
            const sprite_name = getRandomType()
            this.type = sprite_name
            const sprite = this.bubbleSprites[sprite_name]
            this.sprite.spriteFrame = sprite
            return
        }
        this.type = type
        this.sprite.spriteFrame = this.bubbleSprites[type]
    }

    initSize(size: number) {
        this.size = size
        this.node.setScale(size / 100, size / 100)
    }

    initCoord(coord: cc.Vec2) {
        this.coord = coord
    }

    onClick() {
        this.node.emit('bubble-click', this.coord);
    }

    onKeyDown() {
        cc.audioEngine.playEffect(this.destroySound, false);
        console.log('KEY_DOWN');
        const anim = this.getComponent(cc.Animation);
        anim.play('bubble_touch')
    }

    setBubblePosition(position: cc.Vec2) {
        this.node.setPosition(position)
    }

    moveToPosition(position: cc.Vec2, delay: number) {
        const time = setTimeout(() => {
            const move = cc.moveTo(0.5, position);
            this.node.runAction(move);
        }, delay * 100)
    }

    bubbleDestroy(delay: number) {
        console.log('delay', delay);
        const timer = setTimeout(() => {
            if(delay > 0) {
                cc.audioEngine.playEffect(this.destroySound, false);
            }
            const anim = this.getComponent(cc.Animation);
            anim.play('bubble_destroy')
            clearTimeout(timer)
            const timerToDestroy = setTimeout(() => {
                this.node.destroy()
                clearTimeout(timerToDestroy)
            }, 200)
        }, delay * 100)
        
    }

}

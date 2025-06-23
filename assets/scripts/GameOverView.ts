// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOverView extends cc.Component {

    @property(cc.Node)
    restartButton: cc.Node

    @property(cc.Node)
    gameOverView: cc.Node



    start() {
        this.restartButton.on(cc.Node.EventType.TOUCH_END, this.onRestartButtonClick, this);
    }
 

    showGameOver () {
        const move = cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y - this.node.height));
        this.node.runAction(move);
    }

    hideGameOver(){
        const move = cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y + this.node.height));
        this.node.runAction(move);
    }

    onRestartButtonClick(){
        this.node.emit('restart_game')
    }
}

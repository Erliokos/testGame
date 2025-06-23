// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerScoreView extends cc.Component {

    @property(cc.Label)
    timerLabel: cc.Label

    @property(cc.Label)
    scoreLabel: cc.Label

    renderTime (time: number) {
        this.timerLabel.string = `${time}`
    }

    renderScore (score: number){
        this.scoreLabel.string =  `${score}`
    }

}

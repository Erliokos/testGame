// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import TimerScoreView from "./TimerScoreView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Score extends cc.Component {

    score: number = 0

    private timeScoreView: TimerScoreView = null

    start () {
        this.timeScoreView = this.node.getComponent('TimerScoreView')
    }

    initScore(startScore: number) {
        this.score = startScore
        if (this.timeScoreView) {
            this.timeScoreView.renderScore(this.score)
        }
    }

    updateScore(addScore: number) {
        this.score = this.score + addScore
        this.timeScoreView.renderScore(this.score)
    }

}

import TimerScoreView from "./TimerScoreView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Timer extends cc.Component {

    allTimes: number = 0

    step: number = 1

    isWork: boolean = false

    private onTimeUp: () => void = () => {};

    private second: number = 0

    private timerScoreView: TimerScoreView = null

    start(){
        this.timerScoreView = this.node.getComponent('TimerScoreView')
        this.timerScoreView.renderTime(this.allTimes)
    }

    initTimer(allTime: number, onTimeUp: VoidFunction, step: number){
        this.onTimeUp = onTimeUp
        this.allTimes = allTime
        this.step = step
        this.isWork = true
    }

    addTime(time: number) {
        this.allTimes = this.allTimes + time
    }

    update (dt: number) {
        if (!this.isWork) return
        this.second += dt;
        if(this.second > 1) {
            this.second = 0
            this.round()
        }
    }

    round(){
        this.allTimes = this.allTimes - this.step
        this.timerScoreView.renderTime(this.allTimes)
        if(this.allTimes < 1){
            this.isWork = false
            this.onTimeUp()
        }
    }
}

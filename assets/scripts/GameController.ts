const { ccclass, property } = cc._decorator;
import Board from './Board';
import config from './constants/config'
import GameOverView from './GameOverView';
import Score from './Score';
import Timer from './Timer';

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Node)
    boardNode: cc.Node = null;

    @property(cc.Prefab)
    bubblePrefab: cc.Prefab = null;

    @property(cc.Node)
    timeScoreBoardNode: cc.Node

    @property(cc.Node)
    gameOverNode: cc.Node

    private board: Board = null;
    private timer: Timer = null;
    private score: Score = null;
    private gameOver: GameOverView = null;

    start() {
        this.init()
        this.startGame()
    }

    init(){
        this.board = this.boardNode.getComponent('Board')
        this.timer = this.timeScoreBoardNode.getComponent('Timer')
        this.score = this.timeScoreBoardNode.getComponent('Score')
        this.gameOver = this.gameOverNode.getComponent('GameOverView')
        this.gameOverNode.on('restart_game', this.restartGame, this);
    }

    startGame() {
        console.log('START_GAME')
        this.board.initGame(this.bubblePrefab, this.handleBubbleClick.bind(this))
        this.timer.initTimer(config.GAME_TIME, this.timeUp.bind(this), 1)
        this.score.initScore(config.START_SCORE)
    }

    handleBubbleClick(position: cc.Vec2) {
        const groupToRemove = this.board.getGroupToRemove(position)
        const points = this.board.removeGroup(groupToRemove)
        this.calculateTimeAndScore(points)
    }

    timeUp() {
        console.log('ВРЕМЯ ВЫШЛО');
        this.gameOver.showGameOver()
    }

    restartGame() {
        this.board.clear()
        this.startGame()
        this.gameOver.hideGameOver()
    }

    calculateTimeAndScore(points: number) {
        this.score.updateScore(points * 100)
        this.timer.addTime(points)
    }



}


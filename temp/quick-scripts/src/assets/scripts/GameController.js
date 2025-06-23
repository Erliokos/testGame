"use strict";
cc._RF.push(module, 'e0a21fZEL5JnLtrCHdBZ72Z', 'GameController');
// scripts/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var config_1 = require("./constants/config");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boardNode = null;
        _this.bubblePrefab = null;
        _this.board = null;
        _this.timer = null;
        _this.score = null;
        _this.gameOver = null;
        return _this;
    }
    GameController.prototype.start = function () {
        this.init();
        this.startGame();
    };
    GameController.prototype.init = function () {
        this.board = this.boardNode.getComponent('Board');
        this.timer = this.timeScoreBoardNode.getComponent('Timer');
        this.score = this.timeScoreBoardNode.getComponent('Score');
        this.gameOver = this.gameOverNode.getComponent('GameOverView');
        this.gameOverNode.on('restart_game', this.restartGame, this);
    };
    GameController.prototype.startGame = function () {
        console.log('START_GAME');
        this.board.initGame(this.bubblePrefab, this.handleBubbleClick.bind(this));
        this.timer.initTimer(config_1.default.GAME_TIME, this.timeUp.bind(this), 1);
        this.score.initScore(config_1.default.START_SCORE);
    };
    GameController.prototype.handleBubbleClick = function (position, type) {
        var groupToRemove = this.board.getGroupToRemove(position, type);
        var points = this.board.removeGroup(groupToRemove, position, type);
        this.calculateTimeAndScore(points);
    };
    GameController.prototype.timeUp = function () {
        console.log('ВРЕМЯ ВЫШЛО');
        this.gameOver.showGameOver();
    };
    GameController.prototype.restartGame = function () {
        this.board.clear();
        this.startGame();
        this.gameOver.hideGameOver();
    };
    GameController.prototype.calculateTimeAndScore = function (points) {
        this.score.updateScore(points * 100);
        this.timer.addTime(points);
    };
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "boardNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "bubblePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "timeScoreBoardNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "gameOverNode", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();
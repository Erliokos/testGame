"use strict";
cc._RF.push(module, '4ea51V/qj5Jc4ispnPTgJIR', 'GameOverView');
// scripts/GameOverView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var GameOverView = /** @class */ (function (_super) {
    __extends(GameOverView, _super);
    function GameOverView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverView.prototype.start = function () {
        this.restartButton.on(cc.Node.EventType.TOUCH_END, this.onRestartButtonClick, this);
    };
    GameOverView.prototype.showGameOver = function () {
        var move = cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y - this.node.height));
        this.node.runAction(move);
    };
    GameOverView.prototype.hideGameOver = function () {
        var move = cc.moveTo(0.5, cc.v2(this.node.position.x, this.node.position.y + this.node.height));
        this.node.runAction(move);
    };
    GameOverView.prototype.onRestartButtonClick = function () {
        this.node.emit('restart_game');
    };
    __decorate([
        property(cc.Node)
    ], GameOverView.prototype, "restartButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameOverView.prototype, "gameOverView", void 0);
    GameOverView = __decorate([
        ccclass
    ], GameOverView);
    return GameOverView;
}(cc.Component));
exports.default = GameOverView;

cc._RF.pop();
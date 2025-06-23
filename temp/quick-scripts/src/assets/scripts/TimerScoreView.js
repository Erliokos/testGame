"use strict";
cc._RF.push(module, '29e31yv/gdPW5UgVl4XsSiq', 'TimerScoreView');
// scripts/TimerScoreView.ts

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
var TimerScoreView = /** @class */ (function (_super) {
    __extends(TimerScoreView, _super);
    function TimerScoreView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerScoreView.prototype.renderTime = function (time) {
        this.timerLabel.string = "" + time;
    };
    TimerScoreView.prototype.renderScore = function (score) {
        this.scoreLabel.string = "" + score;
    };
    __decorate([
        property(cc.Label)
    ], TimerScoreView.prototype, "timerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TimerScoreView.prototype, "scoreLabel", void 0);
    TimerScoreView = __decorate([
        ccclass
    ], TimerScoreView);
    return TimerScoreView;
}(cc.Component));
exports.default = TimerScoreView;

cc._RF.pop();
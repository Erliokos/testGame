"use strict";
cc._RF.push(module, '009b2SI9YpL5q7ZCRE+yiJp', 'Timer');
// scripts/Timer.ts

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
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allTimes = 0;
        _this.step = 1;
        _this.isWork = false;
        _this.onTimeUp = function () { };
        _this.second = 0;
        _this.timerScoreView = null;
        return _this;
    }
    Timer.prototype.start = function () {
        this.timerScoreView = this.node.getComponent('TimerScoreView');
        this.timerScoreView.renderTime(this.allTimes);
    };
    Timer.prototype.initTimer = function (allTime, onTimeUp, step) {
        this.onTimeUp = onTimeUp;
        this.allTimes = allTime;
        this.step = step;
        this.isWork = true;
    };
    Timer.prototype.addTime = function (time) {
        this.allTimes = this.allTimes + time;
    };
    Timer.prototype.update = function (dt) {
        if (!this.isWork)
            return;
        this.second += dt;
        if (this.second > 1) {
            this.second = 0;
            this.round();
        }
    };
    Timer.prototype.round = function () {
        this.allTimes = this.allTimes - this.step;
        this.timerScoreView.renderTime(this.allTimes);
        if (this.allTimes < 1) {
            this.isWork = false;
            this.onTimeUp();
        }
    };
    Timer = __decorate([
        ccclass
    ], Timer);
    return Timer;
}(cc.Component));
exports.default = Timer;

cc._RF.pop();
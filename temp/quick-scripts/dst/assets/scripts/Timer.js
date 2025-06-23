
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBK0NDO1FBN0NHLGNBQVEsR0FBVyxDQUFDLENBQUE7UUFFcEIsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUVoQixZQUFNLEdBQVksS0FBSyxDQUFBO1FBRWYsY0FBUSxHQUFlLGNBQU8sQ0FBQyxDQUFDO1FBRWhDLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFFbEIsb0JBQWMsR0FBbUIsSUFBSSxDQUFBOztJQW1DakQsQ0FBQztJQWpDRyxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLE9BQWUsRUFBRSxRQUFzQixFQUFFLElBQVk7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDdEIsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFDeEMsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBUSxFQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUN4QixJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNsQixJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QyxJQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtTQUNsQjtJQUNMLENBQUM7SUE5Q2dCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0ErQ3pCO0lBQUQsWUFBQztDQS9DRCxBQStDQyxDQS9Da0MsRUFBRSxDQUFDLFNBQVMsR0ErQzlDO2tCQS9Db0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lclNjb3JlVmlldyBmcm9tIFwiLi9UaW1lclNjb3JlVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGFsbFRpbWVzOiBudW1iZXIgPSAwXG5cbiAgICBzdGVwOiBudW1iZXIgPSAxXG5cbiAgICBpc1dvcms6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHJpdmF0ZSBvblRpbWVVcDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgcHJpdmF0ZSBzZWNvbmQ6IG51bWJlciA9IDBcblxuICAgIHByaXZhdGUgdGltZXJTY29yZVZpZXc6IFRpbWVyU2NvcmVWaWV3ID0gbnVsbFxuXG4gICAgc3RhcnQoKXtcbiAgICAgICAgdGhpcy50aW1lclNjb3JlVmlldyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ1RpbWVyU2NvcmVWaWV3JylcbiAgICAgICAgdGhpcy50aW1lclNjb3JlVmlldy5yZW5kZXJUaW1lKHRoaXMuYWxsVGltZXMpXG4gICAgfVxuXG4gICAgaW5pdFRpbWVyKGFsbFRpbWU6IG51bWJlciwgb25UaW1lVXA6IFZvaWRGdW5jdGlvbiwgc3RlcDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5vblRpbWVVcCA9IG9uVGltZVVwXG4gICAgICAgIHRoaXMuYWxsVGltZXMgPSBhbGxUaW1lXG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXBcbiAgICAgICAgdGhpcy5pc1dvcmsgPSB0cnVlXG4gICAgfVxuXG4gICAgYWRkVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbGxUaW1lcyA9IHRoaXMuYWxsVGltZXMgKyB0aW1lXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1dvcmspIHJldHVyblxuICAgICAgICB0aGlzLnNlY29uZCArPSBkdDtcbiAgICAgICAgaWYodGhpcy5zZWNvbmQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZCA9IDBcbiAgICAgICAgICAgIHRoaXMucm91bmQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm91bmQoKXtcbiAgICAgICAgdGhpcy5hbGxUaW1lcyA9IHRoaXMuYWxsVGltZXMgLSB0aGlzLnN0ZXBcbiAgICAgICAgdGhpcy50aW1lclNjb3JlVmlldy5yZW5kZXJUaW1lKHRoaXMuYWxsVGltZXMpXG4gICAgICAgIGlmKHRoaXMuYWxsVGltZXMgPCAxKXtcbiAgICAgICAgICAgIHRoaXMuaXNXb3JrID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMub25UaW1lVXAoKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5bbe9s9ZlCmKLnmD8xJed5', 'Score');
// scripts/Score.ts

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
var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.score = 0;
        _this.timeScoreView = null;
        return _this;
    }
    Score.prototype.start = function () {
        this.timeScoreView = this.node.getComponent('TimerScoreView');
    };
    Score.prototype.initScore = function (startScore) {
        this.score = startScore;
        this.timeScoreView.renderScore(this.score);
    };
    Score.prototype.updateScore = function (addScore) {
        this.score = this.score + addScore;
        this.timeScoreView.renderScore(this.score);
    };
    Score = __decorate([
        ccclass
    ], Score);
    return Score;
}(cc.Component));
exports.default = Score;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBb0JDO1FBbEJHLFdBQUssR0FBVyxDQUFDLENBQUE7UUFFVCxtQkFBYSxHQUFtQixJQUFJLENBQUE7O0lBZ0JoRCxDQUFDO0lBZEcscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLFVBQWtCO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFsQmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvQnpCO0lBQUQsWUFBQztDQXBCRCxBQW9CQyxDQXBCa0MsRUFBRSxDQUFDLFNBQVMsR0FvQjlDO2tCQXBCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGltZXJTY29yZVZpZXcgZnJvbSBcIi4vVGltZXJTY29yZVZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzY29yZTogbnVtYmVyID0gMFxuXG4gICAgcHJpdmF0ZSB0aW1lU2NvcmVWaWV3OiBUaW1lclNjb3JlVmlldyA9IG51bGxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy50aW1lU2NvcmVWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCgnVGltZXJTY29yZVZpZXcnKVxuICAgIH1cblxuICAgIGluaXRTY29yZShzdGFydFNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IHN0YXJ0U2NvcmVcbiAgICAgICAgdGhpcy50aW1lU2NvcmVWaWV3LnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpXG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoYWRkU2NvcmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArIGFkZFNjb3JlXG4gICAgICAgIHRoaXMudGltZVNjb3JlVmlldy5yZW5kZXJTY29yZSh0aGlzLnNjb3JlKVxuICAgIH1cblxufVxuIl19
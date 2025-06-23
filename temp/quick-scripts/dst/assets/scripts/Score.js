
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
        if (this.timeScoreView) {
            this.timeScoreView.renderScore(this.score);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Njb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBc0JDO1FBcEJHLFdBQUssR0FBVyxDQUFDLENBQUE7UUFFVCxtQkFBYSxHQUFtQixJQUFJLENBQUE7O0lBa0JoRCxDQUFDO0lBaEJHLHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVSxVQUFrQjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQTtRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzdDO0lBQ0wsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBcEJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBc0J6QjtJQUFELFlBQUM7Q0F0QkQsQUFzQkMsQ0F0QmtDLEVBQUUsQ0FBQyxTQUFTLEdBc0I5QztrQkF0Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFRpbWVyU2NvcmVWaWV3IGZyb20gXCIuL1RpbWVyU2NvcmVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc2NvcmU6IG51bWJlciA9IDBcblxuICAgIHByaXZhdGUgdGltZVNjb3JlVmlldzogVGltZXJTY29yZVZpZXcgPSBudWxsXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMudGltZVNjb3JlVmlldyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ1RpbWVyU2NvcmVWaWV3JylcbiAgICB9XG5cbiAgICBpbml0U2NvcmUoc3RhcnRTY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzdGFydFNjb3JlXG4gICAgICAgIGlmICh0aGlzLnRpbWVTY29yZVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVNjb3JlVmlldy5yZW5kZXJTY29yZSh0aGlzLnNjb3JlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoYWRkU2NvcmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArIGFkZFNjb3JlXG4gICAgICAgIHRoaXMudGltZVNjb3JlVmlldy5yZW5kZXJTY29yZSh0aGlzLnNjb3JlKVxuICAgIH1cblxufVxuIl19
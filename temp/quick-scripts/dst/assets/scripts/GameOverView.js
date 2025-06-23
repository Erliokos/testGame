
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameOverView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVPdmVyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDs7SUE0QkEsQ0FBQztJQWxCRyw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBR0QsbUNBQVksR0FBWjtRQUNJLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDSSxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDRztJQU5KLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0QmhDO0lBQUQsbUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QnlDLEVBQUUsQ0FBQyxTQUFTLEdBNEJyRDtrQkE1Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVzdGFydEJ1dHRvbjogY2MuTm9kZVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZU92ZXJWaWV3OiBjYy5Ob2RlXG5cblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25SZXN0YXJ0QnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cbiBcblxuICAgIHNob3dHYW1lT3ZlciAoKSB7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBjYy5tb3ZlVG8oMC41LCBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLm5vZGUuaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZSk7XG4gICAgfVxuXG4gICAgaGlkZUdhbWVPdmVyKCl7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBjYy5tb3ZlVG8oMC41LCBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKyB0aGlzLm5vZGUuaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZSk7XG4gICAgfVxuXG4gICAgb25SZXN0YXJ0QnV0dG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ3Jlc3RhcnRfZ2FtZScpXG4gICAgfVxufVxuIl19
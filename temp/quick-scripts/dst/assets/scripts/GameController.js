
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLDZDQUF1QztBQU12QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStEQztRQTVERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBUXZCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUNwQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBaUIsSUFBSSxDQUFDOztJQThDMUMsQ0FBQztJQTVDRyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixRQUFpQixFQUFFLElBQWdCO1FBQ2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2pFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsOENBQXFCLEdBQXJCLFVBQXNCLE1BQWM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDRztJQVpKLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRGxDO0lBQUQscUJBQUM7Q0EvREQsQUErREMsQ0EvRDJDLEVBQUUsQ0FBQyxTQUFTLEdBK0R2RDtrQkEvRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IHsgQnViYmxlVHlwZSB9IGZyb20gJy4vY29uc3RhbnRzL2J1YmJsZVNwcml0ZUZyYW1lJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuaW1wb3J0IEdhbWVPdmVyVmlldyBmcm9tICcuL0dhbWVPdmVyVmlldyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWJibGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lU2NvcmVCb2FyZE5vZGU6IGNjLk5vZGVcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVPdmVyTm9kZTogY2MuTm9kZVxuXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHNjb3JlOiBTY29yZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogR2FtZU92ZXJWaWV3ID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5ib2FyZE5vZGUuZ2V0Q29tcG9uZW50KCdCb2FyZCcpXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVTY29yZUJvYXJkTm9kZS5nZXRDb21wb25lbnQoJ1RpbWVyJylcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMudGltZVNjb3JlQm9hcmROb2RlLmdldENvbXBvbmVudCgnU2NvcmUnKVxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlck5vZGUuZ2V0Q29tcG9uZW50KCdHYW1lT3ZlclZpZXcnKVxuICAgICAgICB0aGlzLmdhbWVPdmVyTm9kZS5vbigncmVzdGFydF9nYW1lJywgdGhpcy5yZXN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1RBUlRfR0FNRScpXG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdEdhbWUodGhpcy5idWJibGVQcmVmYWIsIHRoaXMuaGFuZGxlQnViYmxlQ2xpY2suYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy50aW1lci5pbml0VGltZXIoY29uZmlnLkdBTUVfVElNRSwgdGhpcy50aW1lVXAuYmluZCh0aGlzKSwgMSlcbiAgICAgICAgdGhpcy5zY29yZS5pbml0U2NvcmUoY29uZmlnLlNUQVJUX1NDT1JFKVxuICAgIH1cblxuICAgIGhhbmRsZUJ1YmJsZUNsaWNrKHBvc2l0aW9uOiBjYy5WZWMyLCB0eXBlOiBCdWJibGVUeXBlKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVG9SZW1vdmUgPSB0aGlzLmJvYXJkLmdldEdyb3VwVG9SZW1vdmUocG9zaXRpb24sIHR5cGUpXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuYm9hcmQucmVtb3ZlR3JvdXAoZ3JvdXBUb1JlbW92ZSwgcG9zaXRpb24sIHR5cGUpXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGltZUFuZFNjb3JlKHBvaW50cylcbiAgICB9XG5cbiAgICB0aW1lVXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfQktCg0JXQnNCvINCS0KvQqNCb0J4nKTtcbiAgICAgICAgdGhpcy5nYW1lT3Zlci5zaG93R2FtZU92ZXIoKVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyKClcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKVxuICAgICAgICB0aGlzLmdhbWVPdmVyLmhpZGVHYW1lT3ZlcigpXG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVGltZUFuZFNjb3JlKHBvaW50czogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2NvcmUudXBkYXRlU2NvcmUocG9pbnRzICogMTAwKVxuICAgICAgICB0aGlzLnRpbWVyLmFkZFRpbWUocG9pbnRzKVxuICAgIH1cblxuXG5cbn1cblxuIl19
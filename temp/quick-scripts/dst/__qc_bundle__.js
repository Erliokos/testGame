
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Board');
require('./assets/scripts/Bubble');
require('./assets/scripts/GameController');
require('./assets/scripts/GameOverView');
require('./assets/scripts/Score');
require('./assets/scripts/Timer');
require('./assets/scripts/TimerScoreView');
require('./assets/scripts/constants/bubbleSpriteFrame');
require('./assets/scripts/constants/config');
require('./assets/scripts/types/types');
require('./assets/scripts/utils/getNewPositionByStep');
require('./assets/scripts/utils/getRandomType');
require('./assets/scripts/utils/searchLineVertical');
require('./assets/scripts/utils/searchNeighbor');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/constants/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38116N6Ug9PPadqkiCbseFz', 'config');
// scripts/constants/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    BOARD_WIDTH: 10,
    BOARD_HEIGHT: 10,
    BOARD_SIZE: 40,
    GAME_TIME: 5,
    START_SCORE: 0,
    COUNT_TO_GET_BOMB: 4
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnN0YW50cy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZTtJQUNiLFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLEVBQUU7SUFDaEIsVUFBVSxFQUFFLEVBQUU7SUFDZCxTQUFTLEVBQUUsQ0FBQztJQUNaLFdBQVcsRUFBRSxDQUFDO0lBQ2QsaUJBQWlCLEVBQUUsQ0FBQztDQUNyQixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBCT0FSRF9XSURUSDogMTAsXG4gIEJPQVJEX0hFSUdIVDogMTAsXG4gIEJPQVJEX1NJWkU6IDQwLFxuICBHQU1FX1RJTUU6IDUsXG4gIFNUQVJUX1NDT1JFOiAwLFxuICBDT1VOVF9UT19HRVRfQk9NQjogNFxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/getRandomType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21aedAZ1kdAKo0Ueq9jCDTj', 'getRandomType');
// scripts/utils/getRandomType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomType = void 0;
var numberBubbleMap = {
    1: 'block_blue',
    2: 'block_green',
    3: 'block_purpure',
    4: 'block_red',
    5: 'block_yellow'
};
var getRandomType = function () {
    var random = Math.floor(Math.random() * 5) + 1;
    return numberBubbleMap[random];
};
exports.getRandomType = getRandomType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL2dldFJhbmRvbVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLEdBQStCO0lBQ2xELENBQUMsRUFBRSxZQUFZO0lBQ2YsQ0FBQyxFQUFFLGFBQWE7SUFDaEIsQ0FBQyxFQUFFLGVBQWU7SUFDbEIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxDQUFDLEVBQUUsY0FBYztDQUNsQixDQUFBO0FBRU0sSUFBTSxhQUFhLEdBQUc7SUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpELE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQTtBQUpZLFFBQUEsYUFBYSxpQkFJekIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWJibGVUeXBlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9idWJibGVTcHJpdGVGcmFtZVwiO1xuXG5jb25zdCBudW1iZXJCdWJibGVNYXA6IFJlY29yZDxudW1iZXIsIEJ1YmJsZVR5cGU+ID0ge1xuICAxOiAnYmxvY2tfYmx1ZScsXG4gIDI6ICdibG9ja19ncmVlbicsXG4gIDM6ICdibG9ja19wdXJwdXJlJyxcbiAgNDogJ2Jsb2NrX3JlZCcsXG4gIDU6ICdibG9ja195ZWxsb3cnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21UeXBlID0gKCk6IEJ1YmJsZVR5cGUgPT4ge1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSArIDE7XG4gIFxuICByZXR1cm4gbnVtYmVyQnViYmxlTWFwW3JhbmRvbV1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e1cbq8X3pObbBny5p/14Qw', 'Board');
// scripts/Board.ts

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
var config_1 = require("./constants/config");
var getNewPositionByStep_1 = require("./utils/getNewPositionByStep");
var searchLineVertical_1 = require("./utils/searchLineVertical");
var searchNeighbor_1 = require("./utils/searchNeighbor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = new Array(config_1.default.BOARD_WIDTH).fill(null).map(function () { return new Array(config_1.default.BOARD_HEIGHT).fill(null); });
        _this.onBubbleClick = function () { };
        return _this;
    }
    Board.prototype.initGame = function (bubblePrefab, onBubbleClick) {
        this.initStep();
        this.bubblePrefab = bubblePrefab;
        this.onBubbleClick = onBubbleClick;
        this.createBoard();
    };
    Board.prototype.clear = function () {
        var _a;
        for (var y = 0; y < config_1.default.BOARD_WIDTH; y++) {
            for (var x = 0; x < config_1.default.BOARD_HEIGHT; x++) {
                var node = (_a = this.board[y]) === null || _a === void 0 ? void 0 : _a[x];
                if (node && node.isValid) {
                    node.destroy();
                }
            }
        }
        this.board = new Array(config_1.default.BOARD_WIDTH).fill(null).map(function () { return new Array(config_1.default.BOARD_HEIGHT).fill(null); });
    };
    Board.prototype.createBoard = function () {
        var sizeY = config_1.default.BOARD_HEIGHT;
        var sizeX = config_1.default.BOARD_WIDTH;
        for (var x = 0; x < sizeX; x++) {
            for (var y = 0; y < sizeY; y++) {
                var node = this.createBubble(cc.v2(x, y));
                this.board[x][y] = node;
            }
        }
    };
    Board.prototype.createBubble = function (position) {
        var newBubble = cc.instantiate(this.bubblePrefab);
        var bubble = newBubble.getComponent('Bubble');
        var newPositionByStep = getNewPositionByStep_1.getNewPositionByStep(position, this.stepX, this.stepY);
        bubble.initType();
        bubble.initCoord(position);
        bubble.initSize(this.stepX > this.stepY ? this.stepY * 0.8 : this.stepX * 0.8);
        bubble.setBubblePosition(newPositionByStep);
        newBubble.on('bubble-click', this.handleBubbleClick, this);
        this.node.addChild(newBubble);
        return newBubble;
    };
    Board.prototype.getGroupToRemove = function (startPosition, type) {
        var startBubbleNode = this.board[startPosition.x][startPosition.y];
        if (!startBubbleNode)
            return;
        if (type === 'bomb') {
            return searchLineVertical_1.searchBombField(startPosition, [], this.board, 2);
        }
        else {
            return searchNeighbor_1.searchNeighbor(startPosition, new Set(), [], type, this.board);
        }
    };
    Board.prototype.removeGroup = function (group, startPosition, type) {
        if (group.length < 2)
            return 0;
        for (var i = 0; i < group.length; i++) {
            var bubble = group[i].getComponent('Bubble');
            this.board[bubble.coord.x][bubble.coord.y] = null;
            bubble.bubbleDestroy(type === 'bomb' ? 0 : i);
        }
        this.fillEmptySpace(group.length, startPosition, type);
        return group.length;
    };
    Board.prototype.fillEmptySpace = function (emtyCount, startPosition, type) {
        for (var x = 0; x < config_1.default.BOARD_WIDTH; x++) {
            var stepToDown = 0;
            for (var y = 0; y < config_1.default.BOARD_HEIGHT; y++) {
                var node = this.board[x][y];
                if (!node) {
                    stepToDown++;
                }
                else if (node && stepToDown > 0) {
                    var bubble = node.getComponent('Bubble');
                    var newPosition = getNewPositionByStep_1.getNewPositionByStep(cc.v2(x, y - stepToDown), this.stepX, this.stepY);
                    // Создание бонуса
                    if (startPosition.equals(cc.v2(x, y - stepToDown)) && emtyCount > config_1.default.COUNT_TO_GET_BOMB && type !== 'bomb') {
                        bubble.initType('bomb');
                    }
                    bubble.moveToPosition(newPosition, type === 'bomb' ? 2 : emtyCount);
                    bubble.initCoord(cc.v2(x, y - stepToDown));
                    this.board[x][y - stepToDown] = node;
                    this.board[x][y] = null;
                }
                else
                    continue;
            }
            for (var i = 0; i < stepToDown; i++) {
                var newBubble = this.createBubble(cc.v2(x, config_1.default.BOARD_HEIGHT));
                var bubble = newBubble.getComponent('Bubble');
                bubble.initCoord(cc.v2(x, config_1.default.BOARD_HEIGHT - stepToDown + i));
                this.board[x][config_1.default.BOARD_HEIGHT - stepToDown + i] = newBubble;
                var newPosition = getNewPositionByStep_1.getNewPositionByStep(cc.v2(x, config_1.default.BOARD_HEIGHT - stepToDown + i), this.stepX, this.stepY);
                // Создание бонуса
                if (startPosition.equals(cc.v2(x, config_1.default.BOARD_HEIGHT - stepToDown + i)) && emtyCount > config_1.default.COUNT_TO_GET_BOMB && type !== 'bomb') {
                    bubble.initType('bomb');
                }
                bubble.moveToPosition(newPosition, type === 'bomb' ? 2 : emtyCount + i * 2);
            }
        }
    };
    Board.prototype.handleBubbleClick = function (position, type) {
        this.onBubbleClick(position, type);
    };
    Board.prototype.initStep = function () {
        this.stepX = (this.node.width - config_1.default.BOARD_SIZE * 2) / config_1.default.BOARD_WIDTH;
        this.stepY = (this.node.height - config_1.default.BOARD_SIZE * 2) / config_1.default.BOARD_HEIGHT;
    };
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUF1QztBQUN2QyxxRUFBb0U7QUFDcEUsaUVBQWlGO0FBQ2pGLHlEQUF3RDtBQUNsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXNJQztRQWxJRyxXQUFLLEdBQWlDLElBQUksS0FBSyxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztRQU1wSSxtQkFBYSxHQUFrRCxjQUFRLENBQUMsQ0FBQzs7SUE0SDdFLENBQUM7SUExSEcsd0JBQVEsR0FBUixVQUFTLFlBQXVCLEVBQUUsYUFBMkI7UUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxxQkFBSyxHQUFMOztRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQU0sSUFBSSxTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2xCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEtBQUssQ0FBQyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFRCwyQkFBVyxHQUFYO1FBQ0ksSUFBTSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsSUFBTSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUM7UUFHakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO2FBQzFCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsNEJBQVksR0FBWixVQUFhLFFBQWlCO1FBQzFCLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ25ELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0MsSUFBTSxpQkFBaUIsR0FBRywyQ0FBb0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEYsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQzlFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzNDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM3QixPQUFPLFNBQVMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsZ0NBQWdCLEdBQWhCLFVBQWlCLGFBQXNCLEVBQUUsSUFBZ0I7UUFFckQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxlQUFlO1lBQUUsT0FBTTtRQUU1QixJQUFHLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxvQ0FBZSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUMzRDthQUNJO1lBQ0QsT0FBUSwrQkFBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLEdBQUcsRUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ2pGO0lBQ0wsQ0FBQztJQUtELDJCQUFXLEdBQVgsVUFBWSxLQUFnQixFQUFFLGFBQXNCLEVBQUUsSUFBZ0I7UUFDbEUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtZQUNqRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDaEQ7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3RELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUN2QixDQUFDO0lBRUQsOEJBQWMsR0FBZCxVQUFlLFNBQWlCLEVBQUUsYUFBc0IsRUFBRSxJQUFnQjtRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDUCxVQUFVLEVBQUUsQ0FBQTtpQkFDZjtxQkFDSSxJQUFJLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUMxQyxJQUFNLFdBQVcsR0FBRywyQ0FBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzFGLGtCQUFrQjtvQkFDbEIsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxnQkFBTSxDQUFDLGlCQUFpQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7d0JBQzNHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7cUJBQzFCO29CQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ25FLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUE7b0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQTtvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7aUJBQzFCOztvQkFDSSxTQUFRO2FBQ2hCO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7Z0JBQ2xFLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtnQkFDL0QsSUFBTSxXQUFXLEdBQUcsMkNBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNoSCxrQkFBa0I7Z0JBQ2xCLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxnQkFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFDO29CQUNoSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUMxQjtnQkFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUE7YUFDL0U7U0FDSjtJQUVMLENBQUM7SUFJRCxpQ0FBaUIsR0FBakIsVUFBa0IsUUFBaUIsRUFBRSxJQUFnQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQTtRQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLENBQUE7SUFDakYsQ0FBQztJQW5JZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXNJekI7SUFBRCxZQUFDO0NBdElELEFBc0lDLENBdElrQyxFQUFFLENBQUMsU0FBUyxHQXNJOUM7a0JBdElvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnViYmxlVHlwZSB9IGZyb20gJy4vY29uc3RhbnRzL2J1YmJsZVNwcml0ZUZyYW1lJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuaW1wb3J0IHsgZ2V0TmV3UG9zaXRpb25CeVN0ZXAgfSBmcm9tICcuL3V0aWxzL2dldE5ld1Bvc2l0aW9uQnlTdGVwJztcbmltcG9ydCB7IHNlYXJjaEJvbWJGaWVsZCwgc2VhcmNoTGluZVZlcnRpY2FsIH0gZnJvbSAnLi91dGlscy9zZWFyY2hMaW5lVmVydGljYWwnO1xuaW1wb3J0IHsgc2VhcmNoTmVpZ2hib3IgfSBmcm9tICcuL3V0aWxzL3NlYXJjaE5laWdoYm9yJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBidWJibGVQcmVmYWI6IGNjLlByZWZhYlxuXG4gICAgYm9hcmQ6IEFycmF5PEFycmF5PGNjLk5vZGUgfCBudWxsPj4gPSBuZXcgQXJyYXkoY29uZmlnLkJPQVJEX1dJRFRIKS5maWxsKG51bGwpLm1hcCgoKSA9PiBuZXcgQXJyYXkoY29uZmlnLkJPQVJEX0hFSUdIVCkuZmlsbChudWxsKSk7XG5cbiAgICBzdGVwWDogbnVtYmVyXG5cbiAgICBzdGVwWTogbnVtYmVyXG5cbiAgICBvbkJ1YmJsZUNsaWNrOiAocG9zaXRpb246IGNjLlZlYzIsIHR5cGU6IEJ1YmJsZVR5cGUpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICBpbml0R2FtZShidWJibGVQcmVmYWI6IGNjLlByZWZhYiwgb25CdWJibGVDbGljazogVm9pZEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5pdFN0ZXAoKVxuICAgICAgICB0aGlzLmJ1YmJsZVByZWZhYiA9IGJ1YmJsZVByZWZhYlxuICAgICAgICB0aGlzLm9uQnViYmxlQ2xpY2sgPSBvbkJ1YmJsZUNsaWNrXG4gICAgICAgIHRoaXMuY3JlYXRlQm9hcmQoKVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNvbmZpZy5CT0FSRF9XSURUSDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbmZpZy5CT0FSRF9IRUlHSFQ7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmJvYXJkW3ldPy5beF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KGNvbmZpZy5CT0FSRF9XSURUSCkuZmlsbChudWxsKS5tYXAoKCkgPT4gbmV3IEFycmF5KGNvbmZpZy5CT0FSRF9IRUlHSFQpLmZpbGwobnVsbCkpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBjb25zdCBzaXplWSA9IGNvbmZpZy5CT0FSRF9IRUlHSFQ7XG4gICAgICAgIGNvbnN0IHNpemVYID0gY29uZmlnLkJPQVJEX1dJRFRIO1xuXG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVCdWJibGUoY2MudjIoeCwgeSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBub2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVCdWJibGUocG9zaXRpb246IGNjLlZlYzIpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3QgbmV3QnViYmxlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWJibGVQcmVmYWIpXG4gICAgICAgIGNvbnN0IGJ1YmJsZSA9IG5ld0J1YmJsZS5nZXRDb21wb25lbnQoJ0J1YmJsZScpXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uQnlTdGVwID0gZ2V0TmV3UG9zaXRpb25CeVN0ZXAocG9zaXRpb24sIHRoaXMuc3RlcFgsIHRoaXMuc3RlcFkpXG4gICAgICAgIGJ1YmJsZS5pbml0VHlwZSgpXG4gICAgICAgIGJ1YmJsZS5pbml0Q29vcmQocG9zaXRpb24pXG4gICAgICAgIGJ1YmJsZS5pbml0U2l6ZSh0aGlzLnN0ZXBYID4gdGhpcy5zdGVwWSA/IHRoaXMuc3RlcFkgKiAwLjggOiB0aGlzLnN0ZXBYICogMC44KVxuICAgICAgICBidWJibGUuc2V0QnViYmxlUG9zaXRpb24obmV3UG9zaXRpb25CeVN0ZXApXG4gICAgICAgIG5ld0J1YmJsZS5vbignYnViYmxlLWNsaWNrJywgdGhpcy5oYW5kbGVCdWJibGVDbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCdWJibGUpXG4gICAgICAgIHJldHVybiBuZXdCdWJibGVcbiAgICB9XG5cbiAgICBnZXRHcm91cFRvUmVtb3ZlKHN0YXJ0UG9zaXRpb246IGNjLlZlYzIsIHR5cGU6IEJ1YmJsZVR5cGUpIHtcblxuICAgICAgICBjb25zdCBzdGFydEJ1YmJsZU5vZGUgPSB0aGlzLmJvYXJkW3N0YXJ0UG9zaXRpb24ueF1bc3RhcnRQb3NpdGlvbi55XVxuICAgICAgICBpZiAoIXN0YXJ0QnViYmxlTm9kZSkgcmV0dXJuXG5cbiAgICAgICAgaWYodHlwZSA9PT0gJ2JvbWInKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQm9tYkZpZWxkKHN0YXJ0UG9zaXRpb24sIFtdLCB0aGlzLmJvYXJkLCAyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICBzZWFyY2hOZWlnaGJvcihzdGFydFBvc2l0aW9uLCBuZXcgU2V0PHN0cmluZz4oKSwgW10sIHR5cGUsIHRoaXMuYm9hcmQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuXG4gICAgcmVtb3ZlR3JvdXAoZ3JvdXA6IGNjLk5vZGVbXSwgc3RhcnRQb3NpdGlvbjogY2MuVmVjMiwgdHlwZTogQnViYmxlVHlwZSk6IG51bWJlciB7XG4gICAgICAgIGlmIChncm91cC5sZW5ndGggPCAyKSByZXR1cm4gMFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidWJibGUgPSBncm91cFtpXS5nZXRDb21wb25lbnQoJ0J1YmJsZScpXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2J1YmJsZS5jb29yZC54XVtidWJibGUuY29vcmQueV0gPSBudWxsXG4gICAgICAgICAgICBidWJibGUuYnViYmxlRGVzdHJveSh0eXBlID09PSAnYm9tYicgPyAwIDogaSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGxFbXB0eVNwYWNlKGdyb3VwLmxlbmd0aCwgc3RhcnRQb3NpdGlvbiwgdHlwZSlcbiAgICAgICAgcmV0dXJuIGdyb3VwLmxlbmd0aFxuICAgIH1cblxuICAgIGZpbGxFbXB0eVNwYWNlKGVtdHlDb3VudDogbnVtYmVyLCBzdGFydFBvc2l0aW9uOiBjYy5WZWMyLCB0eXBlOiBCdWJibGVUeXBlICkgeyAgICAgICAgXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29uZmlnLkJPQVJEX1dJRFRIOyB4KyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwVG9Eb3duID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjb25maWcuQk9BUkRfSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ib2FyZFt4XVt5XVxuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwVG9Eb3duKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZSAmJiBzdGVwVG9Eb3duID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWJibGUgPSBub2RlLmdldENvbXBvbmVudCgnQnViYmxlJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBnZXROZXdQb3NpdGlvbkJ5U3RlcChjYy52Mih4LCB5IC0gc3RlcFRvRG93biksIHRoaXMuc3RlcFgsIHRoaXMuc3RlcFkpXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LHQvtC90YPRgdCwXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uLmVxdWFscyhjYy52Mih4LCB5IC0gc3RlcFRvRG93bikpICYmIGVtdHlDb3VudCA+IGNvbmZpZy5DT1VOVF9UT19HRVRfQk9NQiAmJiB0eXBlICE9PSAnYm9tYicgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZS5pbml0VHlwZSgnYm9tYicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnViYmxlLm1vdmVUb1Bvc2l0aW9uKG5ld1Bvc2l0aW9uLCB0eXBlID09PSAnYm9tYicgPyAyIDogZW10eUNvdW50KVxuICAgICAgICAgICAgICAgICAgICBidWJibGUuaW5pdENvb3JkKGNjLnYyKHgsIHkgLSBzdGVwVG9Eb3duKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5IC0gc3RlcFRvRG93bl0gPSBub2RlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcFRvRG93bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QnViYmxlID0gdGhpcy5jcmVhdGVCdWJibGUoY2MudjIoeCwgY29uZmlnLkJPQVJEX0hFSUdIVCkpXG4gICAgICAgICAgICAgICAgY29uc3QgYnViYmxlID0gbmV3QnViYmxlLmdldENvbXBvbmVudCgnQnViYmxlJylcbiAgICAgICAgICAgICAgICBidWJibGUuaW5pdENvb3JkKGNjLnYyKHgsIGNvbmZpZy5CT0FSRF9IRUlHSFQgLSBzdGVwVG9Eb3duICsgaSkpXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVtjb25maWcuQk9BUkRfSEVJR0hUIC0gc3RlcFRvRG93biArIGldID0gbmV3QnViYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBnZXROZXdQb3NpdGlvbkJ5U3RlcChjYy52Mih4LCBjb25maWcuQk9BUkRfSEVJR0hUIC0gc3RlcFRvRG93biArIGkpLCB0aGlzLnN0ZXBYLCB0aGlzLnN0ZXBZKVxuICAgICAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LHQvtC90YPRgdCwXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb24uZXF1YWxzKGNjLnYyKHgsIGNvbmZpZy5CT0FSRF9IRUlHSFQgLSBzdGVwVG9Eb3duICsgaSkpICYmIGVtdHlDb3VudCA+IGNvbmZpZy5DT1VOVF9UT19HRVRfQk9NQiAmJiB0eXBlICE9PSAnYm9tYicpe1xuICAgICAgICAgICAgICAgICAgICBidWJibGUuaW5pdFR5cGUoJ2JvbWInKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidWJibGUubW92ZVRvUG9zaXRpb24obmV3UG9zaXRpb24sIHR5cGUgPT09ICdib21iJyA/IDIgOiBlbXR5Q291bnQgKyBpICogMiApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBoYW5kbGVCdWJibGVDbGljayhwb3NpdGlvbjogY2MuVmVjMiwgdHlwZTogQnViYmxlVHlwZSkge1xuICAgICAgICB0aGlzLm9uQnViYmxlQ2xpY2socG9zaXRpb24sIHR5cGUpO1xuICAgIH1cblxuICAgIGluaXRTdGVwKCkge1xuICAgICAgICB0aGlzLnN0ZXBYID0gKHRoaXMubm9kZS53aWR0aCAtIGNvbmZpZy5CT0FSRF9TSVpFICogMikgLyBjb25maWcuQk9BUkRfV0lEVEhcbiAgICAgICAgdGhpcy5zdGVwWSA9ICh0aGlzLm5vZGUuaGVpZ2h0IC0gY29uZmlnLkJPQVJEX1NJWkUgKiAyKSAvIGNvbmZpZy5CT0FSRF9IRUlHSFRcbiAgICB9XG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/types/types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b49dr1McxCHo6gLnsQllpg', 'types');
// scripts/types/types.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3R5cGVzL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bubble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e8c49UTsFKjL5kxek7bnbo', 'Bubble');
// scripts/Bubble.ts

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
var bubbleSpriteFrame_1 = require("./constants/bubbleSpriteFrame");
var getRandomType_1 = require("./utils/getRandomType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubbleSprites = new bubbleSpriteFrame_1.BubbleSpriteSet();
        _this.destroySound = null;
        _this.bombSound = null;
        _this.type = 'block_blue';
        return _this;
    }
    Bubble.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onKeyDown, this);
    };
    Bubble.prototype.initType = function (type) {
        this.sprite = this.getComponent(cc.Sprite);
        if (!type) {
            this.type = getRandomType_1.getRandomType();
            this.sprite.spriteFrame = this.bubbleSprites[this.type];
            return;
        }
        this.type = type;
        this.sprite.spriteFrame = this.bubbleSprites[type];
    };
    Bubble.prototype.initSize = function (size) {
        this.size = size;
        this.node.setScale(size / 100, size / 100);
    };
    Bubble.prototype.initCoord = function (coord) {
        this.coord = coord;
    };
    Bubble.prototype.onClick = function () {
        this.node.emit('bubble-click', this.coord, this.type);
    };
    Bubble.prototype.onKeyDown = function () {
        if (this.type === 'bomb') {
            cc.audioEngine.playEffect(this.bombSound, false);
        }
        else {
            cc.audioEngine.playEffect(this.destroySound, false);
        }
        var anim = this.getComponent(cc.Animation);
        anim.play('bubble_touch');
    };
    Bubble.prototype.setBubblePosition = function (position) {
        this.node.setPosition(position);
    };
    Bubble.prototype.moveToPosition = function (position, delay) {
        var _this = this;
        var time = setTimeout(function () {
            var move = cc.moveTo(0.5, position);
            _this.node.runAction(move);
        }, delay * 100);
    };
    Bubble.prototype.bubbleDestroy = function (delay) {
        var _this = this;
        var timer = setTimeout(function () {
            if (delay > 0) {
                cc.audioEngine.playEffect(_this.destroySound, false);
            }
            var anim = _this.getComponent(cc.Animation);
            anim.play('bubble_destroy');
            clearTimeout(timer);
            var timerToDestroy = setTimeout(function () {
                _this.node.destroy();
                clearTimeout(timerToDestroy);
            }, 200);
        }, delay * 100);
    };
    __decorate([
        property(bubbleSpriteFrame_1.BubbleSpriteSet)
    ], Bubble.prototype, "bubbleSprites", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bubble.prototype, "destroySound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bubble.prototype, "bombSound", void 0);
    Bubble = __decorate([
        ccclass
    ], Bubble);
    return Bubble;
}(cc.Component));
exports.default = Bubble;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0J1YmJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtRUFBNEU7QUFDNUUsdURBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBdUZDO1FBcEZVLG1CQUFhLEdBQW9CLElBQUksbUNBQWUsRUFBRSxDQUFDO1FBRzlELGtCQUFZLEdBQXdCLElBQUksQ0FBQztRQUd6QyxlQUFTLEdBQXdCLElBQUksQ0FBQztRQUV0QyxVQUFJLEdBQWUsWUFBWSxDQUFBOztJQTRFbkMsQ0FBQztJQXBFRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUdELHlCQUFRLEdBQVIsVUFBUyxJQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUFhLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FB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Q0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNlO0lBVHJCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RjFCO0lBQUQsYUFBQztDQXZGRCxBQXVGQyxDQXZGbUMsRUFBRSxDQUFDLFNBQVMsR0F1Ri9DO2tCQXZGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdWJibGVTcHJpdGVTZXQsIEJ1YmJsZVR5cGUgfSBmcm9tIFwiLi9jb25zdGFudHMvYnViYmxlU3ByaXRlRnJhbWVcIjtcbmltcG9ydCB7IGdldFJhbmRvbVR5cGUgfSBmcm9tIFwiLi91dGlscy9nZXRSYW5kb21UeXBlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEJ1YmJsZVNwcml0ZVNldClcbiAgICBwdWJsaWMgYnViYmxlU3ByaXRlczogQnViYmxlU3ByaXRlU2V0ID0gbmV3IEJ1YmJsZVNwcml0ZVNldCgpO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBkZXN0cm95U291bmQ6IGNjLkF1ZGlvQ2xpcCB8IG51bGwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBib21iU291bmQ6IGNjLkF1ZGlvQ2xpcCB8IG51bGwgPSBudWxsO1xuXG4gICAgdHlwZTogQnViYmxlVHlwZSA9ICdibG9ja19ibHVlJ1xuXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVcblxuICAgIHNpemU6IG51bWJlclxuXG4gICAgY29vcmQ6IGNjLlZlYzJcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIGluaXRUeXBlKHR5cGU/OiBCdWJibGVUeXBlKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGdldFJhbmRvbVR5cGUoKVxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJ1YmJsZVNwcml0ZXNbdGhpcy50eXBlXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuYnViYmxlU3ByaXRlc1t0eXBlXVxuICAgIH1cblxuICAgIGluaXRTaXplKHNpemU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzaXplIC8gMTAwLCBzaXplIC8gMTAwKVxuICAgIH1cblxuICAgIGluaXRDb29yZChjb29yZDogY2MuVmVjMikge1xuICAgICAgICB0aGlzLmNvb3JkID0gY29vcmRcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdCgnYnViYmxlLWNsaWNrJywgdGhpcy5jb29yZCwgdGhpcy50eXBlKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdib21iJykge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJvbWJTb3VuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRlc3Ryb3lTb3VuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltLnBsYXkoJ2J1YmJsZV90b3VjaCcpXG4gICAgfVxuXG4gICAgc2V0QnViYmxlUG9zaXRpb24ocG9zaXRpb246IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvc2l0aW9uKVxuICAgIH1cblxuICAgIG1vdmVUb1Bvc2l0aW9uKHBvc2l0aW9uOiBjYy5WZWMyLCBkZWxheTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBjYy5tb3ZlVG8oMC41LCBwb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKG1vdmUpO1xuICAgICAgICB9LCBkZWxheSAqIDEwMClcbiAgICB9XG5cbiAgICBidWJibGVEZXN0cm95KGRlbGF5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGVzdHJveVNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGFuaW0ucGxheSgnYnViYmxlX2Rlc3Ryb3knKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgICAgY29uc3QgdGltZXJUb0Rlc3Ryb3kgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVG9EZXN0cm95KVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9LCBkZWxheSAqIDEwMClcblxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TimerScoreView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpbWVyU2NvcmVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEOztJQWdCQSxDQUFDO0lBUkcsbUNBQVUsR0FBVixVQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFNLENBQUE7SUFDdEMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBYSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFJLEtBQUcsS0FBTyxDQUFBO0lBQ3hDLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0M7SUFOSCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZ0JsQztJQUFELHFCQUFDO0NBaEJELEFBZ0JDLENBaEIyQyxFQUFFLENBQUMsU0FBUyxHQWdCdkQ7a0JBaEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXJTY29yZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWxcblxuICAgIHJlbmRlclRpbWUgKHRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7dGltZX1gXG4gICAgfVxuXG4gICAgcmVuZGVyU2NvcmUgKHNjb3JlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gIGAke3Njb3JlfWBcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/getNewPositionByStep.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f38cfG/QL9AVpi7TIBTBdw5', 'getNewPositionByStep');
// scripts/utils/getNewPositionByStep.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewPositionByStep = void 0;
var config_1 = require("../constants/config");
var getNewPositionByStep = function (position, stepX, stepY) {
    return cc.v2(position.x * stepX + stepX / 2 + config_1.default.BOARD_SIZE, position.y * stepY + stepY / 2 + config_1.default.BOARD_SIZE);
};
exports.getNewPositionByStep = getNewPositionByStep;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL2dldE5ld1Bvc2l0aW9uQnlTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF3QztBQUVqQyxJQUFNLG9CQUFvQixHQUFHLFVBQUMsUUFBaUIsRUFBRSxLQUFhLEVBQUUsS0FBYTtJQUNsRixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxnQkFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLGdCQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDdEgsQ0FBQyxDQUFBO0FBRlksUUFBQSxvQkFBb0Isd0JBRWhDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbmZpZ1wiXG5cbmV4cG9ydCBjb25zdCBnZXROZXdQb3NpdGlvbkJ5U3RlcCA9IChwb3NpdGlvbjogY2MuVmVjMiwgc3RlcFg6IG51bWJlciwgc3RlcFk6IG51bWJlcikgPT4ge1xuICByZXR1cm4gY2MudjIocG9zaXRpb24ueCAqIHN0ZXBYICsgc3RlcFggLyAyICsgY29uZmlnLkJPQVJEX1NJWkUsIHBvc2l0aW9uLnkgKiBzdGVwWSArIHN0ZXBZIC8gMiArIGNvbmZpZy5CT0FSRF9TSVpFKVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/constants/bubbleSpriteFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd78c6V5YVdCtpBVqfsLGgkc', 'bubbleSpriteFrame');
// scripts/constants/bubbleSpriteFrame.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSpriteSet = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BubbleSpriteSet = /** @class */ (function () {
    function BubbleSpriteSet() {
        this.block_green = null;
        this.block_blue = null;
        this.block_purpure = null;
        this.block_yellow = null;
        this.block_red = null;
        this.bomb = null;
    }
    BubbleSpriteSet.prototype.get = function (type) {
        return this[type];
    };
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "block_green", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "block_blue", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "block_purpure", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "block_yellow", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "block_red", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], BubbleSpriteSet.prototype, "bomb", void 0);
    BubbleSpriteSet = __decorate([
        ccclass('BubbleSpriteSet')
    ], BubbleSpriteSet);
    return BubbleSpriteSet;
}());
exports.BubbleSpriteSet = BubbleSpriteSet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnN0YW50cy9idWJibGVTcHJpdGVGcmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUFBO1FBRUUsZ0JBQVcsR0FBMEIsSUFBSSxDQUFDO1FBRzFDLGVBQVUsR0FBMEIsSUFBSSxDQUFDO1FBR3pDLGtCQUFhLEdBQTBCLElBQUksQ0FBQztRQUc1QyxpQkFBWSxHQUEwQixJQUFJLENBQUM7UUFHM0MsY0FBUyxHQUEwQixJQUFJLENBQUM7UUFHeEMsU0FBSSxHQUEwQixJQUFJLENBQUM7SUFLckMsQ0FBQztJQUhDLDZCQUFHLEdBQUgsVUFBSSxJQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3REFDTztJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7dURBQ007SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOzBEQUNTO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5REFDUTtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7c0RBQ0s7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lEQUNBO0lBakJ4QixlQUFlO1FBRDNCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztPQUNkLGVBQWUsQ0FzQjNCO0lBQUQsc0JBQUM7Q0F0QkQsQUFzQkMsSUFBQTtBQXRCWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCB0eXBlIEJ1YmJsZVR5cGUgPSAnYmxvY2tfZ3JlZW4nIHwgJ2Jsb2NrX2JsdWUnIHwgJ2Jsb2NrX3B1cnB1cmUnIHwgJ2Jsb2NrX3llbGxvdycgfCAnYmxvY2tfcmVkJyB8ICdib21iJ1xuXG5cbkBjY2NsYXNzKCdCdWJibGVTcHJpdGVTZXQnKVxuZXhwb3J0IGNsYXNzIEJ1YmJsZVNwcml0ZVNldCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXG4gIGJsb2NrX2dyZWVuOiBjYy5TcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXG4gIGJsb2NrX2JsdWU6IGNjLlNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcbiAgYmxvY2tfcHVycHVyZTogY2MuU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxuICBibG9ja195ZWxsb3c6IGNjLlNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG4gIFxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxuICBibG9ja19yZWQ6IGNjLlNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcbiAgYm9tYjogY2MuU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICBnZXQodHlwZTogQnViYmxlVHlwZSk6IGNjLlNwcml0ZUZyYW1lIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZV07XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/searchNeighbor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fef95McQhLpIrwd5eX6d5R', 'searchNeighbor');
// scripts/utils/searchNeighbor.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNeighbor = void 0;
var config_1 = require("../constants/config");
var searchNeighbor = function (pos, visited, groupToRemove, type, board) {
    if (pos.x < 0 || pos.y < 0 || pos.x >= config_1.default.BOARD_WIDTH || pos.y >= config_1.default.BOARD_HEIGHT)
        return;
    var key = pos.x + "," + pos.y;
    if (visited.has(key))
        return;
    var node = board[pos.x][pos.y];
    if (!node)
        return;
    var bubble = node.getComponent('Bubble');
    if (bubble.type === type) {
        visited.add(key);
        groupToRemove.push(node);
        exports.searchNeighbor(cc.v2(pos.x + 1, pos.y), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x - 1, pos.y), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x, pos.y + 1), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x, pos.y - 1), visited, groupToRemove, type, board);
    }
    return groupToRemove;
};
exports.searchNeighbor = searchNeighbor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL3NlYXJjaE5laWdoYm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUF5QztBQUdsQyxJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQVksRUFBRSxPQUFvQixFQUFFLGFBQXdCLEVBQUUsSUFBZ0IsRUFBRSxLQUFtQztJQUNoSixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLFlBQVk7UUFBRSxPQUFPO0lBQ2xHLElBQU0sR0FBRyxHQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQUksR0FBRyxDQUFDLENBQUcsQ0FBQztJQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTztJQUU3QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFFbEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixzQkFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLHNCQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0Usc0JBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxzQkFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlFO0lBQ0QsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQyxDQUFDO0FBbEJXLFFBQUEsY0FBYyxrQkFrQnpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnViYmxlVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHMvYnViYmxlU3ByaXRlRnJhbWVcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbnN0YW50cy9jb25maWdcIjtcblxuXG5leHBvcnQgY29uc3Qgc2VhcmNoTmVpZ2hib3IgPSAocG9zOiBjYy5WZWMyLCB2aXNpdGVkOiBTZXQ8c3RyaW5nPiwgZ3JvdXBUb1JlbW92ZTogY2MuTm9kZVtdLCB0eXBlOiBCdWJibGVUeXBlLCBib2FyZDogQXJyYXk8QXJyYXk8Y2MuTm9kZSB8IG51bGw+PikgPT4ge1xuICBpZiAocG9zLnggPCAwIHx8IHBvcy55IDwgMCB8fCBwb3MueCA+PSBjb25maWcuQk9BUkRfV0lEVEggfHwgcG9zLnkgPj0gY29uZmlnLkJPQVJEX0hFSUdIVCkgcmV0dXJuO1xuICBjb25zdCBrZXkgPSBgJHtwb3MueH0sJHtwb3MueX1gO1xuICBpZiAodmlzaXRlZC5oYXMoa2V5KSkgcmV0dXJuO1xuXG4gIGNvbnN0IG5vZGUgPSBib2FyZFtwb3MueF1bcG9zLnldO1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICBjb25zdCBidWJibGUgPSBub2RlLmdldENvbXBvbmVudCgnQnViYmxlJyk7XG4gIGlmIChidWJibGUudHlwZSA9PT0gdHlwZSkge1xuICAgIHZpc2l0ZWQuYWRkKGtleSk7XG4gICAgZ3JvdXBUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54ICsgMSwgcG9zLnkpLCB2aXNpdGVkLCBncm91cFRvUmVtb3ZlLCB0eXBlLCBib2FyZCk7XG4gICAgc2VhcmNoTmVpZ2hib3IoY2MudjIocG9zLnggLSAxLCBwb3MueSksIHZpc2l0ZWQsIGdyb3VwVG9SZW1vdmUsIHR5cGUsIGJvYXJkKTtcbiAgICBzZWFyY2hOZWlnaGJvcihjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgdmlzaXRlZCwgZ3JvdXBUb1JlbW92ZSwgdHlwZSwgYm9hcmQpO1xuICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54LCBwb3MueSAtIDEpLCB2aXNpdGVkLCBncm91cFRvUmVtb3ZlLCB0eXBlLCBib2FyZCk7XG4gIH1cbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/searchLineVertical.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c62aaKxVCVNuIdmiqMmAKD2', 'searchLineVertical');
// scripts/utils/searchLineVertical.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBombField = exports.searchLineVertical = void 0;
var config_1 = require("../constants/config");
var searchLineVertical = function (pos, groupToRemove, board, direction) {
    if (pos.x < 0 || pos.y < 0 || pos.x >= config_1.default.BOARD_WIDTH || pos.y >= config_1.default.BOARD_HEIGHT)
        return;
    groupToRemove.push(board[pos.x][pos.y]);
    if (direction === 'up') {
        exports.searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up');
        return groupToRemove;
    }
    if (direction === 'down') {
        exports.searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down');
        return groupToRemove;
    }
    exports.searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up');
    exports.searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down');
    return groupToRemove;
};
exports.searchLineVertical = searchLineVertical;
var searchBombField = function (pos, groupToRemove, board, bombRadius) {
    var width = board.length;
    var height = board[0].length;
    for (var dx = -bombRadius; dx <= bombRadius; dx++) {
        for (var dy = -bombRadius; dy <= bombRadius; dy++) {
            var x = pos.x + dx;
            var y = pos.y + dy;
            if (x >= 0 && x < width && y >= 0 && y < height) {
                var node = board[x][y];
                if (node && !groupToRemove.includes(node)) {
                    groupToRemove.push(node);
                }
            }
        }
    }
    return groupToRemove;
};
exports.searchBombField = searchBombField;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL3NlYXJjaExpbmVWZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFFbEMsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEdBQVksRUFBRSxhQUF3QixFQUFFLEtBQW1DLEVBQUUsU0FBeUI7SUFDdkksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLGdCQUFNLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxZQUFZO1FBQUUsT0FBTztJQUNsRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkMsSUFBRyxTQUFTLEtBQUssSUFBSSxFQUFDO1FBQ3BCLDBCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsT0FBTyxhQUFhLENBQUE7S0FDckI7SUFDRCxJQUFHLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDdkIsMEJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN6RSxPQUFPLGFBQWEsQ0FBQTtLQUNyQjtJQUNELDBCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdkUsMEJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN6RSxPQUFPLGFBQWEsQ0FBQTtBQUN0QixDQUFDLENBQUE7QUFkWSxRQUFBLGtCQUFrQixzQkFjOUI7QUFFTSxJQUFNLGVBQWUsR0FBRyxVQUFDLEdBQVksRUFBRSxhQUF3QixFQUFFLEtBQW1DLEVBQUUsVUFBa0I7SUFDN0gsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRS9CLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNqRCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDakQsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFO2dCQUMvQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUE7QUFuQlksUUFBQSxlQUFlLG1CQW1CM0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25zdGFudHMvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hMaW5lVmVydGljYWwgPSAocG9zOiBjYy5WZWMyLCBncm91cFRvUmVtb3ZlOiBjYy5Ob2RlW10sIGJvYXJkOiBBcnJheTxBcnJheTxjYy5Ob2RlIHwgbnVsbD4+LCBkaXJlY3Rpb24/OiAndXAnIHwgJ2Rvd24nKSA9PiB7XG4gIGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwIHx8IHBvcy54ID49IGNvbmZpZy5CT0FSRF9XSURUSCB8fCBwb3MueSA+PSBjb25maWcuQk9BUkRfSEVJR0hUKSByZXR1cm47XG4gIGdyb3VwVG9SZW1vdmUucHVzaChib2FyZFtwb3MueF1bcG9zLnldKVxuICBpZihkaXJlY3Rpb24gPT09ICd1cCcpe1xuICAgIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICd1cCcpXG4gICAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbiAgfVxuICBpZihkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgLSAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICdkb3duJylcbiAgICByZXR1cm4gZ3JvdXBUb1JlbW92ZVxuICB9XG4gIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICd1cCcpXG4gIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgLSAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICdkb3duJylcbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJvbWJGaWVsZCA9IChwb3M6IGNjLlZlYzIsIGdyb3VwVG9SZW1vdmU6IGNjLk5vZGVbXSwgYm9hcmQ6IEFycmF5PEFycmF5PGNjLk5vZGUgfCBudWxsPj4sIGJvbWJSYWRpdXM6IG51bWJlcikgPT4ge1xuICBjb25zdCB3aWR0aCA9IGJvYXJkLmxlbmd0aDtcbiAgY29uc3QgaGVpZ2h0ID0gYm9hcmRbMF0ubGVuZ3RoO1xuXG4gIGZvciAobGV0IGR4ID0gLWJvbWJSYWRpdXM7IGR4IDw9IGJvbWJSYWRpdXM7IGR4KyspIHtcbiAgICBmb3IgKGxldCBkeSA9IC1ib21iUmFkaXVzOyBkeSA8PSBib21iUmFkaXVzOyBkeSsrKSB7XG4gICAgICBjb25zdCB4ID0gcG9zLnggKyBkeDtcbiAgICAgIGNvbnN0IHkgPSBwb3MueSArIGR5O1xuXG4gICAgICBpZiAoeCA+PSAwICYmIHggPCB3aWR0aCAmJiB5ID49IDAgJiYgeSA8IGhlaWdodCkge1xuICAgICAgICBjb25zdCBub2RlID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChub2RlICYmICFncm91cFRvUmVtb3ZlLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgZ3JvdXBUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmU7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------


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
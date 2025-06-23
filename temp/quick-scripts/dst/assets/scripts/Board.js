
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
        console.log('INIT', bubblePrefab);
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
        console.log('board', this.board);
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
    Board.prototype.getGroupToRemove = function (startPosition) {
        var _this = this;
        var startBubbleNode = this.board[startPosition.x][startPosition.y];
        if (!startBubbleNode)
            return;
        var startBubble = startBubbleNode.getComponent('Bubble');
        var visited = new Set();
        var groupToRemove = [];
        var searchNeighbor = function (pos) {
            console.log('pos');
            if (pos.x < 0 || pos.y < 0 || pos.x >= config_1.default.BOARD_WIDTH || pos.y >= config_1.default.BOARD_HEIGHT)
                return;
            var key = pos.x + "," + pos.y;
            if (visited.has(key))
                return;
            var node = _this.board[pos.x][pos.y];
            if (!node)
                return;
            var bubble = node.getComponent('Bubble');
            if (bubble.type === startBubble.type) {
                visited.add(key);
                groupToRemove.push(node);
                searchNeighbor(cc.v2(pos.x + 1, pos.y));
                searchNeighbor(cc.v2(pos.x - 1, pos.y));
                searchNeighbor(cc.v2(pos.x, pos.y + 1));
                searchNeighbor(cc.v2(pos.x, pos.y - 1));
            }
        };
        searchNeighbor(startPosition);
        return groupToRemove;
    };
    Board.prototype.removeGroup = function (group) {
        if (group.length < 2)
            return 0;
        for (var i = 0; i < group.length; i++) {
            var bubble = group[i].getComponent('Bubble');
            this.board[bubble.coord.x][bubble.coord.y] = null;
            bubble.bubbleDestroy(i);
        }
        this.fillEmptySpace(group.length);
        return group.length;
    };
    Board.prototype.fillEmptySpace = function (emtyCount) {
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
                    bubble.moveToPosition(newPosition, emtyCount);
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
                bubble.moveToPosition(newPosition, emtyCount + i * 2);
            }
        }
    };
    Board.prototype.handleBubbleClick = function (position) {
        this.onBubbleClick(position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF1QztBQUN2QyxxRUFBb0U7QUFDOUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFvSkM7UUFoSkcsV0FBSyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksS0FBSyxDQUFDLGdCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7UUFNcEksbUJBQWEsR0FBZ0MsY0FBUSxDQUFDLENBQUM7O0lBMEkzRCxDQUFDO0lBeElHLHdCQUFRLEdBQVIsVUFBUyxZQUF1QixFQUFFLGFBQTJCO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBRUQscUJBQUssR0FBTDs7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxJQUFNLElB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UyxHQW9KOUM7a0JBcEpvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbnN0YW50cy9jb25maWcnXG5pbXBvcnQgeyBnZXROZXdQb3NpdGlvbkJ5U3RlcCB9IGZyb20gJy4vdXRpbHMvZ2V0TmV3UG9zaXRpb25CeVN0ZXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGJ1YmJsZVByZWZhYjogY2MuUHJlZmFiXG5cbiAgICBib2FyZDogQXJyYXk8QXJyYXk8Y2MuTm9kZSB8IG51bGw+PiA9IG5ldyBBcnJheShjb25maWcuQk9BUkRfV0lEVEgpLmZpbGwobnVsbCkubWFwKCgpID0+IG5ldyBBcnJheShjb25maWcuQk9BUkRfSEVJR0hUKS5maWxsKG51bGwpKTtcblxuICAgIHN0ZXBYOiBudW1iZXJcblxuICAgIHN0ZXBZOiBudW1iZXJcblxuICAgIG9uQnViYmxlQ2xpY2s6IChwb3NpdGlvbjogY2MuVmVjMikgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIGluaXRHYW1lKGJ1YmJsZVByZWZhYjogY2MuUHJlZmFiLCBvbkJ1YmJsZUNsaWNrOiBWb2lkRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lOSVQnLCBidWJibGVQcmVmYWIpO1xuICAgICAgICB0aGlzLmluaXRTdGVwKClcbiAgICAgICAgdGhpcy5idWJibGVQcmVmYWIgPSBidWJibGVQcmVmYWJcbiAgICAgICAgdGhpcy5vbkJ1YmJsZUNsaWNrID0gb25CdWJibGVDbGlja1xuICAgICAgICB0aGlzLmNyZWF0ZUJvYXJkKClcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjb25maWcuQk9BUkRfV0lEVEg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb25maWcuQk9BUkRfSEVJR0hUOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ib2FyZFt5XT8uW3hdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheShjb25maWcuQk9BUkRfV0lEVEgpLmZpbGwobnVsbCkubWFwKCgpID0+IG5ldyBBcnJheShjb25maWcuQk9BUkRfSEVJR0hUKS5maWxsKG51bGwpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBjb25maWcuQk9BUkRfSEVJR0hUO1xuICAgICAgICBjb25zdCBzaXplWCA9IGNvbmZpZy5CT0FSRF9XSURUSDtcblxuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlQnViYmxlKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gbm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdib2FyZCcsIHRoaXMuYm9hcmQpO1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQnViYmxlKHBvc2l0aW9uOiBjYy5WZWMyKTogY2MuTm9kZSB7XG4gICAgICAgIGNvbnN0IG5ld0J1YmJsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlUHJlZmFiKVxuICAgICAgICBjb25zdCBidWJibGUgPSBuZXdCdWJibGUuZ2V0Q29tcG9uZW50KCdCdWJibGUnKVxuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbkJ5U3RlcCA9IGdldE5ld1Bvc2l0aW9uQnlTdGVwKHBvc2l0aW9uLCB0aGlzLnN0ZXBYLCB0aGlzLnN0ZXBZKVxuICAgICAgICBidWJibGUuaW5pdFR5cGUoKVxuICAgICAgICBidWJibGUuaW5pdENvb3JkKHBvc2l0aW9uKVxuICAgICAgICBidWJibGUuaW5pdFNpemUodGhpcy5zdGVwWCA+IHRoaXMuc3RlcFkgPyB0aGlzLnN0ZXBZICogMC44IDogdGhpcy5zdGVwWCAqIDAuOClcbiAgICAgICAgYnViYmxlLnNldEJ1YmJsZVBvc2l0aW9uKG5ld1Bvc2l0aW9uQnlTdGVwKVxuICAgICAgICBuZXdCdWJibGUub24oJ2J1YmJsZS1jbGljaycsIHRoaXMuaGFuZGxlQnViYmxlQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QnViYmxlKVxuICAgICAgICByZXR1cm4gbmV3QnViYmxlXG4gICAgfVxuXG4gICAgZ2V0R3JvdXBUb1JlbW92ZShzdGFydFBvc2l0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnViYmxlTm9kZSA9IHRoaXMuYm9hcmRbc3RhcnRQb3NpdGlvbi54XVtzdGFydFBvc2l0aW9uLnldXG4gICAgICAgIGlmICghc3RhcnRCdWJibGVOb2RlKSByZXR1cm5cbiAgICAgICAgY29uc3Qgc3RhcnRCdWJibGUgPSBzdGFydEJ1YmJsZU5vZGUuZ2V0Q29tcG9uZW50KCdCdWJibGUnKVxuXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBncm91cFRvUmVtb3ZlOiBjYy5Ob2RlW10gPSBbXVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaE5laWdoYm9yID0gKHBvczogY2MuVmVjMikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcycpO1xuICAgICAgICAgICAgaWYgKHBvcy54IDwgMCB8fCBwb3MueSA8IDAgfHwgcG9zLnggPj0gY29uZmlnLkJPQVJEX1dJRFRIIHx8IHBvcy55ID49IGNvbmZpZy5CT0FSRF9IRUlHSFQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke3Bvcy54fSwke3Bvcy55fWA7XG4gICAgICAgICAgICBpZiAodmlzaXRlZC5oYXMoa2V5KSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ib2FyZFtwb3MueF1bcG9zLnldO1xuICAgICAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZSA9IG5vZGUuZ2V0Q29tcG9uZW50KCdCdWJibGUnKTtcbiAgICAgICAgICAgIGlmIChidWJibGUudHlwZSA9PT0gc3RhcnRCdWJibGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgZ3JvdXBUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54ICsgMSwgcG9zLnkpKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hOZWlnaGJvcihjYy52Mihwb3MueCAtIDEsIHBvcy55KSk7XG4gICAgICAgICAgICAgICAgc2VhcmNoTmVpZ2hib3IoY2MudjIocG9zLngsIHBvcy55ICsgMSkpO1xuICAgICAgICAgICAgICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54LCBwb3MueSAtIDEpKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH07XG4gICAgICAgIHNlYXJjaE5laWdoYm9yKHN0YXJ0UG9zaXRpb24pXG4gICAgICAgIHJldHVybiBncm91cFRvUmVtb3ZlXG4gICAgfVxuXG5cbiAgICByZW1vdmVHcm91cChncm91cDogY2MuTm9kZVtdKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKGdyb3VwLmxlbmd0aCA8IDIpIHJldHVybiAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZSA9IGdyb3VwW2ldLmdldENvbXBvbmVudCgnQnViYmxlJylcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbYnViYmxlLmNvb3JkLnhdW2J1YmJsZS5jb29yZC55XSA9IG51bGxcbiAgICAgICAgICAgIGJ1YmJsZS5idWJibGVEZXN0cm95KGkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxsRW1wdHlTcGFjZShncm91cC5sZW5ndGgpXG4gICAgICAgIHJldHVybiBncm91cC5sZW5ndGhcbiAgICB9XG5cbiAgICBmaWxsRW1wdHlTcGFjZShlbXR5Q291bnQ6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbmZpZy5CT0FSRF9XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRvRG93biA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY29uZmlnLkJPQVJEX0hFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuYm9hcmRbeF1beV1cbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRvRG93bisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgJiYgc3RlcFRvRG93biA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnViYmxlID0gbm9kZS5nZXRDb21wb25lbnQoJ0J1YmJsZScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZ2V0TmV3UG9zaXRpb25CeVN0ZXAoY2MudjIoeCwgeSAtIHN0ZXBUb0Rvd24pLCB0aGlzLnN0ZXBYLCB0aGlzLnN0ZXBZKVxuICAgICAgICAgICAgICAgICAgICBidWJibGUubW92ZVRvUG9zaXRpb24obmV3UG9zaXRpb24sIGVtdHlDb3VudClcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlLmluaXRDb29yZChjYy52Mih4LCB5IC0gc3RlcFRvRG93bikpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSAtIHN0ZXBUb0Rvd25dID0gbm9kZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBUb0Rvd247IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0J1YmJsZSA9IHRoaXMuY3JlYXRlQnViYmxlKGNjLnYyKHgsIGNvbmZpZy5CT0FSRF9IRUlHSFQpKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1YmJsZSA9IG5ld0J1YmJsZS5nZXRDb21wb25lbnQoJ0J1YmJsZScpXG4gICAgICAgICAgICAgICAgYnViYmxlLmluaXRDb29yZChjYy52Mih4LCBjb25maWcuQk9BUkRfSEVJR0hUIC0gc3RlcFRvRG93biArIGkpKVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1bY29uZmlnLkJPQVJEX0hFSUdIVCAtIHN0ZXBUb0Rvd24gKyBpXSA9IG5ld0J1YmJsZVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZ2V0TmV3UG9zaXRpb25CeVN0ZXAoY2MudjIoeCwgY29uZmlnLkJPQVJEX0hFSUdIVCAtIHN0ZXBUb0Rvd24gKyBpKSwgdGhpcy5zdGVwWCwgdGhpcy5zdGVwWSlcbiAgICAgICAgICAgICAgICBidWJibGUubW92ZVRvUG9zaXRpb24obmV3UG9zaXRpb24sIGVtdHlDb3VudCArIGkqMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGhhbmRsZUJ1YmJsZUNsaWNrKHBvc2l0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMub25CdWJibGVDbGljayhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaW5pdFN0ZXAoKSB7XG4gICAgICAgIHRoaXMuc3RlcFggPSAodGhpcy5ub2RlLndpZHRoIC0gY29uZmlnLkJPQVJEX1NJWkUgKiAyKSAvIGNvbmZpZy5CT0FSRF9XSURUSFxuICAgICAgICB0aGlzLnN0ZXBZID0gKHRoaXMubm9kZS5oZWlnaHQgLSBjb25maWcuQk9BUkRfU0laRSAqIDIpIC8gY29uZmlnLkJPQVJEX0hFSUdIVFxuICAgIH1cblxuXG59XG4iXX0=
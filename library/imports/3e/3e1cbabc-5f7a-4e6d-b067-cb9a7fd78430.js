"use strict";
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
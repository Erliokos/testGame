
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
            var sprite_name = getRandomType_1.getRandomType();
            this.type = sprite_name;
            var sprite = this.bubbleSprites[sprite_name];
            this.sprite.spriteFrame = sprite;
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
        this.node.emit('bubble-click', this.coord);
    };
    Bubble.prototype.onKeyDown = function () {
        cc.audioEngine.playEffect(this.destroySound, false);
        console.log('KEY_DOWN');
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
        console.log('delay', delay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0J1YmJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtRUFBNEU7QUFDNUUsdURBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBbUZDO1FBaEZVLG1CQUFhLEdBQW9CLElBQUksbUNBQWUsRUFBRSxDQUFDO1FBRzlELGtCQUFZLEdBQXdCLElBQUksQ0FBQztRQUV6QyxVQUFJLEdBQWUsWUFBWSxDQUFBOztJQTJFbkMsQ0FBQztJQW5FRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUdELHlCQUFRLEdBQVIsVUFBUyxJQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLElBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDTixJQUFNLFdBQVcsR0FBRyw2QkFBYSxFQUFFLENBQUE7WUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUE7WUFDdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFD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QUM7Q0FuRkQsQUFtRkMsQ0FuRm1DLEVBQUUsQ0FBQyxTQUFTLEdBbUYvQztrQkFuRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQnViYmxlU3ByaXRlU2V0LCBCdWJibGVUeXBlIH0gZnJvbSBcIi4vY29uc3RhbnRzL2J1YmJsZVNwcml0ZUZyYW1lXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21UeXBlIH0gZnJvbSBcIi4vdXRpbHMvZ2V0UmFuZG9tVHlwZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShCdWJibGVTcHJpdGVTZXQpXG4gICAgcHVibGljIGJ1YmJsZVNwcml0ZXM6IEJ1YmJsZVNwcml0ZVNldCA9IG5ldyBCdWJibGVTcHJpdGVTZXQoKTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgZGVzdHJveVNvdW5kOiBjYy5BdWRpb0NsaXAgfCBudWxsID0gbnVsbDtcblxuICAgIHR5cGU6IEJ1YmJsZVR5cGUgPSAnYmxvY2tfYmx1ZSdcblxuICAgIHNwcml0ZTogY2MuU3ByaXRlXG5cbiAgICBzaXplOiBudW1iZXJcblxuICAgIGNvb3JkOiBjYy5WZWMyXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBpbml0VHlwZSh0eXBlPzogQnViYmxlVHlwZSkge1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgICAgaWYoIXR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZV9uYW1lID0gZ2V0UmFuZG9tVHlwZSgpXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBzcHJpdGVfbmFtZVxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5idWJibGVTcHJpdGVzW3Nwcml0ZV9uYW1lXVxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJ1YmJsZVNwcml0ZXNbdHlwZV1cbiAgICB9XG5cbiAgICBpbml0U2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2l6ZSAvIDEwMCwgc2l6ZSAvIDEwMClcbiAgICB9XG5cbiAgICBpbml0Q29vcmQoY29vcmQ6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5jb29yZCA9IGNvb3JkXG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ2J1YmJsZS1jbGljaycsIHRoaXMuY29vcmQpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bigpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRlc3Ryb3lTb3VuZCwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnS0VZX0RPV04nKTtcbiAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnYnViYmxlX3RvdWNoJylcbiAgICB9XG5cbiAgICBzZXRCdWJibGVQb3NpdGlvbihwb3NpdGlvbjogY2MuVmVjMikge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zaXRpb24pXG4gICAgfVxuXG4gICAgbW92ZVRvUG9zaXRpb24ocG9zaXRpb246IGNjLlZlYzIsIGRlbGF5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IGNjLm1vdmVUbygwLjUsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZSk7XG4gICAgICAgIH0sIGRlbGF5ICogMTAwKVxuICAgIH1cblxuICAgIGJ1YmJsZURlc3Ryb3koZGVsYXk6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZGVsYXknLCBkZWxheSk7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZihkZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGVzdHJveVNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGFuaW0ucGxheSgnYnViYmxlX2Rlc3Ryb3knKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgICAgY29uc3QgdGltZXJUb0Rlc3Ryb3kgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVG9EZXN0cm95KVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9LCBkZWxheSAqIDEwMClcbiAgICAgICAgXG4gICAgfVxuXG59XG4iXX0=
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
    GameController.prototype.handleBubbleClick = function (position) {
        var groupToRemove = this.board.getGroupToRemove(position);
        var points = this.board.removeGroup(groupToRemove);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLDZDQUF1QztBQU12QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStEQztRQTVERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBUXZCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUNwQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBaUIsSUFBSSxDQUFDOztJQThDMUMsQ0FBQztJQTVDRyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixRQUFpQjtRQUMvQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ0c7SUFaSixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBK0RsQztJQUFELHFCQUFDO0NBL0RELEFBK0RDLENBL0QyQyxFQUFFLENBQUMsU0FBUyxHQStEdkQ7a0JBL0RvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25zdGFudHMvY29uZmlnJ1xuaW1wb3J0IEdhbWVPdmVyVmlldyBmcm9tICcuL0dhbWVPdmVyVmlldyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWJibGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lU2NvcmVCb2FyZE5vZGU6IGNjLk5vZGVcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVPdmVyTm9kZTogY2MuTm9kZVxuXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHNjb3JlOiBTY29yZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogR2FtZU92ZXJWaWV3ID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5ib2FyZE5vZGUuZ2V0Q29tcG9uZW50KCdCb2FyZCcpXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVTY29yZUJvYXJkTm9kZS5nZXRDb21wb25lbnQoJ1RpbWVyJylcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMudGltZVNjb3JlQm9hcmROb2RlLmdldENvbXBvbmVudCgnU2NvcmUnKVxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlck5vZGUuZ2V0Q29tcG9uZW50KCdHYW1lT3ZlclZpZXcnKVxuICAgICAgICB0aGlzLmdhbWVPdmVyTm9kZS5vbigncmVzdGFydF9nYW1lJywgdGhpcy5yZXN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1RBUlRfR0FNRScpXG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdEdhbWUodGhpcy5idWJibGVQcmVmYWIsIHRoaXMuaGFuZGxlQnViYmxlQ2xpY2suYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy50aW1lci5pbml0VGltZXIoY29uZmlnLkdBTUVfVElNRSwgdGhpcy50aW1lVXAuYmluZCh0aGlzKSwgMSlcbiAgICAgICAgdGhpcy5zY29yZS5pbml0U2NvcmUoY29uZmlnLlNUQVJUX1NDT1JFKVxuICAgIH1cblxuICAgIGhhbmRsZUJ1YmJsZUNsaWNrKHBvc2l0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVG9SZW1vdmUgPSB0aGlzLmJvYXJkLmdldEdyb3VwVG9SZW1vdmUocG9zaXRpb24pXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuYm9hcmQucmVtb3ZlR3JvdXAoZ3JvdXBUb1JlbW92ZSlcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUaW1lQW5kU2NvcmUocG9pbnRzKVxuICAgIH1cblxuICAgIHRpbWVVcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ9CS0KDQldCc0K8g0JLQq9Co0JvQnicpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyLnNob3dHYW1lT3ZlcigpXG4gICAgfVxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuY2xlYXIoKVxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIuaGlkZUdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lQW5kU2NvcmUocG9pbnRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZS51cGRhdGVTY29yZShwb2ludHMgKiAxMDApXG4gICAgICAgIHRoaXMudGltZXIuYWRkVGltZShwb2ludHMpXG4gICAgfVxuXG5cblxufVxuXG4iXX0=
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
    BOARD_WIDTH: 8,
    BOARD_HEIGHT: 8,
    BOARD_SIZE: 40,
    GAME_TIME: 3,
    START_SCORE: 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnN0YW50cy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZTtJQUNiLFdBQVcsRUFBRSxDQUFDO0lBQ2QsWUFBWSxFQUFFLENBQUM7SUFDZixVQUFVLEVBQUUsRUFBRTtJQUNkLFNBQVMsRUFBRSxDQUFDO0lBQ1osV0FBVyxFQUFFLENBQUM7Q0FDZixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBCT0FSRF9XSURUSDogOCxcbiAgQk9BUkRfSEVJR0hUOiA4LFxuICBCT0FSRF9TSVpFOiA0MCxcbiAgR0FNRV9USU1FOiAzLFxuICBTVEFSVF9TQ09SRTogMCxcbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnN0YW50cy9idWJibGVTcHJpdGVGcmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUFBO1FBRUUsZ0JBQVcsR0FBMEIsSUFBSSxDQUFDO1FBRzFDLGVBQVUsR0FBMEIsSUFBSSxDQUFDO1FBR3pDLGtCQUFhLEdBQTBCLElBQUksQ0FBQztRQUc1QyxpQkFBWSxHQUEwQixJQUFJLENBQUM7UUFHM0MsY0FBUyxHQUEwQixJQUFJLENBQUM7SUFLMUMsQ0FBQztJQUhDLDZCQUFHLEdBQUgsVUFBSSxJQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3REFDTztJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7dURBQ007SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOzBEQUNTO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5REFDUTtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7c0RBQ0s7SUFkN0IsZUFBZTtRQUQzQixPQUFPLENBQUMsaUJBQWlCLENBQUM7T0FDZCxlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBbkJELEFBbUJDLElBQUE7QUFuQlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgdHlwZSBCdWJibGVUeXBlID0gJ2Jsb2NrX2dyZWVuJyB8ICdibG9ja19ibHVlJyB8ICdibG9ja19wdXJwdXJlJyB8ICdibG9ja195ZWxsb3cnIHwgJ2Jsb2NrX3JlZCdcblxuXG5AY2NjbGFzcygnQnViYmxlU3ByaXRlU2V0JylcbmV4cG9ydCBjbGFzcyBCdWJibGVTcHJpdGVTZXQge1xuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxuICBibG9ja19ncmVlbjogY2MuU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9KVxuICBibG9ja19ibHVlOiBjYy5TcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXG4gIGJsb2NrX3B1cnB1cmU6IGNjLlNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcbiAgYmxvY2tfeWVsbG93OiBjYy5TcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuICBcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSlcbiAgYmxvY2tfcmVkOiBjYy5TcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuXG4gIGdldCh0eXBlOiBCdWJibGVUeXBlKTogY2MuU3ByaXRlRnJhbWUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpc1t0eXBlXTtcbiAgfVxufVxuIl19
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

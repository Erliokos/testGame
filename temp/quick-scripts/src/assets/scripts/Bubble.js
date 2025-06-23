"use strict";
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
"use strict";
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
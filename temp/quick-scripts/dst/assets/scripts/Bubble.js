
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
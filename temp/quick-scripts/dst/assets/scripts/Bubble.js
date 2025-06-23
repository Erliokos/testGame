
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
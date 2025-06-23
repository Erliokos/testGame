
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
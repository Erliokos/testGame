
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
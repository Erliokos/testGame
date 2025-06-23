
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
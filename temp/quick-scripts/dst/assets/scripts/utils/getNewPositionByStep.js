
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
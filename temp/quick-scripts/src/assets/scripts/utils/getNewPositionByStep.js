"use strict";
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
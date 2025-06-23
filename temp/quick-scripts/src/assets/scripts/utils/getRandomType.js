"use strict";
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
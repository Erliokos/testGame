"use strict";
cc._RF.push(module, '9fef95McQhLpIrwd5eX6d5R', 'searchNeighbor');
// scripts/utils/searchNeighbor.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNeighbor = void 0;
var config_1 = require("../constants/config");
var searchNeighbor = function (pos, visited, groupToRemove, type, board) {
    if (pos.x < 0 || pos.y < 0 || pos.x >= config_1.default.BOARD_WIDTH || pos.y >= config_1.default.BOARD_HEIGHT)
        return;
    var key = pos.x + "," + pos.y;
    if (visited.has(key))
        return;
    var node = board[pos.x][pos.y];
    if (!node)
        return;
    var bubble = node.getComponent('Bubble');
    if (bubble.type === type) {
        visited.add(key);
        groupToRemove.push(node);
        exports.searchNeighbor(cc.v2(pos.x + 1, pos.y), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x - 1, pos.y), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x, pos.y + 1), visited, groupToRemove, type, board);
        exports.searchNeighbor(cc.v2(pos.x, pos.y - 1), visited, groupToRemove, type, board);
    }
    return groupToRemove;
};
exports.searchNeighbor = searchNeighbor;

cc._RF.pop();
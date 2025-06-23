"use strict";
cc._RF.push(module, 'c62aaKxVCVNuIdmiqMmAKD2', 'searchLineVertical');
// scripts/utils/searchLineVertical.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBombField = exports.searchLineVertical = void 0;
var config_1 = require("../constants/config");
var searchLineVertical = function (pos, groupToRemove, board, direction) {
    if (pos.x < 0 || pos.y < 0 || pos.x >= config_1.default.BOARD_WIDTH || pos.y >= config_1.default.BOARD_HEIGHT)
        return;
    groupToRemove.push(board[pos.x][pos.y]);
    if (direction === 'up') {
        exports.searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up');
        return groupToRemove;
    }
    if (direction === 'down') {
        exports.searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down');
        return groupToRemove;
    }
    exports.searchLineVertical(cc.v2(pos.x, pos.y + 1), groupToRemove, board, 'up');
    exports.searchLineVertical(cc.v2(pos.x, pos.y - 1), groupToRemove, board, 'down');
    return groupToRemove;
};
exports.searchLineVertical = searchLineVertical;
var searchBombField = function (pos, groupToRemove, board, bombRadius) {
    var width = board.length;
    var height = board[0].length;
    for (var dx = -bombRadius; dx <= bombRadius; dx++) {
        for (var dy = -bombRadius; dy <= bombRadius; dy++) {
            var x = pos.x + dx;
            var y = pos.y + dy;
            if (x >= 0 && x < width && y >= 0 && y < height) {
                var node = board[x][y];
                if (node && !groupToRemove.includes(node)) {
                    groupToRemove.push(node);
                }
            }
        }
    }
    return groupToRemove;
};
exports.searchBombField = searchBombField;

cc._RF.pop();
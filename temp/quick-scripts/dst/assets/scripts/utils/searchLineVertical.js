
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/searchLineVertical.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL3NlYXJjaExpbmVWZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFFbEMsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEdBQVksRUFBRSxhQUF3QixFQUFFLEtBQW1DLEVBQUUsU0FBeUI7SUFDdkksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLGdCQUFNLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxZQUFZO1FBQUUsT0FBTztJQUNsRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkMsSUFBRyxTQUFTLEtBQUssSUFBSSxFQUFDO1FBQ3BCLDBCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsT0FBTyxhQUFhLENBQUE7S0FDckI7SUFDRCxJQUFHLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDdkIsMEJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN6RSxPQUFPLGFBQWEsQ0FBQTtLQUNyQjtJQUNELDBCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdkUsMEJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN6RSxPQUFPLGFBQWEsQ0FBQTtBQUN0QixDQUFDLENBQUE7QUFkWSxRQUFBLGtCQUFrQixzQkFjOUI7QUFFTSxJQUFNLGVBQWUsR0FBRyxVQUFDLEdBQVksRUFBRSxhQUF3QixFQUFFLEtBQW1DLEVBQUUsVUFBa0I7SUFDN0gsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRS9CLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNqRCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDakQsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFO2dCQUMvQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUE7QUFuQlksUUFBQSxlQUFlLG1CQW1CM0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25zdGFudHMvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hMaW5lVmVydGljYWwgPSAocG9zOiBjYy5WZWMyLCBncm91cFRvUmVtb3ZlOiBjYy5Ob2RlW10sIGJvYXJkOiBBcnJheTxBcnJheTxjYy5Ob2RlIHwgbnVsbD4+LCBkaXJlY3Rpb24/OiAndXAnIHwgJ2Rvd24nKSA9PiB7XG4gIGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwIHx8IHBvcy54ID49IGNvbmZpZy5CT0FSRF9XSURUSCB8fCBwb3MueSA+PSBjb25maWcuQk9BUkRfSEVJR0hUKSByZXR1cm47XG4gIGdyb3VwVG9SZW1vdmUucHVzaChib2FyZFtwb3MueF1bcG9zLnldKVxuICBpZihkaXJlY3Rpb24gPT09ICd1cCcpe1xuICAgIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICd1cCcpXG4gICAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbiAgfVxuICBpZihkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgLSAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICdkb3duJylcbiAgICByZXR1cm4gZ3JvdXBUb1JlbW92ZVxuICB9XG4gIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICd1cCcpXG4gIHNlYXJjaExpbmVWZXJ0aWNhbChjYy52Mihwb3MueCwgcG9zLnkgLSAxKSwgZ3JvdXBUb1JlbW92ZSwgYm9hcmQsICdkb3duJylcbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJvbWJGaWVsZCA9IChwb3M6IGNjLlZlYzIsIGdyb3VwVG9SZW1vdmU6IGNjLk5vZGVbXSwgYm9hcmQ6IEFycmF5PEFycmF5PGNjLk5vZGUgfCBudWxsPj4sIGJvbWJSYWRpdXM6IG51bWJlcikgPT4ge1xuICBjb25zdCB3aWR0aCA9IGJvYXJkLmxlbmd0aDtcbiAgY29uc3QgaGVpZ2h0ID0gYm9hcmRbMF0ubGVuZ3RoO1xuXG4gIGZvciAobGV0IGR4ID0gLWJvbWJSYWRpdXM7IGR4IDw9IGJvbWJSYWRpdXM7IGR4KyspIHtcbiAgICBmb3IgKGxldCBkeSA9IC1ib21iUmFkaXVzOyBkeSA8PSBib21iUmFkaXVzOyBkeSsrKSB7XG4gICAgICBjb25zdCB4ID0gcG9zLnggKyBkeDtcbiAgICAgIGNvbnN0IHkgPSBwb3MueSArIGR5O1xuXG4gICAgICBpZiAoeCA+PSAwICYmIHggPCB3aWR0aCAmJiB5ID49IDAgJiYgeSA8IGhlaWdodCkge1xuICAgICAgICBjb25zdCBub2RlID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChub2RlICYmICFncm91cFRvUmVtb3ZlLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgZ3JvdXBUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmU7XG59XG4iXX0=
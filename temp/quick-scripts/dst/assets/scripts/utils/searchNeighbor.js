
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/searchNeighbor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL3NlYXJjaE5laWdoYm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUF5QztBQUdsQyxJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQVksRUFBRSxPQUFvQixFQUFFLGFBQXdCLEVBQUUsSUFBZ0IsRUFBRSxLQUFtQztJQUNoSixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLFlBQVk7UUFBRSxPQUFPO0lBQ2xHLElBQU0sR0FBRyxHQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQUksR0FBRyxDQUFDLENBQUcsQ0FBQztJQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTztJQUU3QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFFbEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixzQkFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLHNCQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0Usc0JBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxzQkFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlFO0lBQ0QsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQyxDQUFDO0FBbEJXLFFBQUEsY0FBYyxrQkFrQnpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnViYmxlVHlwZSB9IGZyb20gXCIuLi9jb25zdGFudHMvYnViYmxlU3ByaXRlRnJhbWVcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbnN0YW50cy9jb25maWdcIjtcblxuXG5leHBvcnQgY29uc3Qgc2VhcmNoTmVpZ2hib3IgPSAocG9zOiBjYy5WZWMyLCB2aXNpdGVkOiBTZXQ8c3RyaW5nPiwgZ3JvdXBUb1JlbW92ZTogY2MuTm9kZVtdLCB0eXBlOiBCdWJibGVUeXBlLCBib2FyZDogQXJyYXk8QXJyYXk8Y2MuTm9kZSB8IG51bGw+PikgPT4ge1xuICBpZiAocG9zLnggPCAwIHx8IHBvcy55IDwgMCB8fCBwb3MueCA+PSBjb25maWcuQk9BUkRfV0lEVEggfHwgcG9zLnkgPj0gY29uZmlnLkJPQVJEX0hFSUdIVCkgcmV0dXJuO1xuICBjb25zdCBrZXkgPSBgJHtwb3MueH0sJHtwb3MueX1gO1xuICBpZiAodmlzaXRlZC5oYXMoa2V5KSkgcmV0dXJuO1xuXG4gIGNvbnN0IG5vZGUgPSBib2FyZFtwb3MueF1bcG9zLnldO1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICBjb25zdCBidWJibGUgPSBub2RlLmdldENvbXBvbmVudCgnQnViYmxlJyk7XG4gIGlmIChidWJibGUudHlwZSA9PT0gdHlwZSkge1xuICAgIHZpc2l0ZWQuYWRkKGtleSk7XG4gICAgZ3JvdXBUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54ICsgMSwgcG9zLnkpLCB2aXNpdGVkLCBncm91cFRvUmVtb3ZlLCB0eXBlLCBib2FyZCk7XG4gICAgc2VhcmNoTmVpZ2hib3IoY2MudjIocG9zLnggLSAxLCBwb3MueSksIHZpc2l0ZWQsIGdyb3VwVG9SZW1vdmUsIHR5cGUsIGJvYXJkKTtcbiAgICBzZWFyY2hOZWlnaGJvcihjYy52Mihwb3MueCwgcG9zLnkgKyAxKSwgdmlzaXRlZCwgZ3JvdXBUb1JlbW92ZSwgdHlwZSwgYm9hcmQpO1xuICAgIHNlYXJjaE5laWdoYm9yKGNjLnYyKHBvcy54LCBwb3MueSAtIDEpLCB2aXNpdGVkLCBncm91cFRvUmVtb3ZlLCB0eXBlLCBib2FyZCk7XG4gIH1cbiAgcmV0dXJuIGdyb3VwVG9SZW1vdmVcbn07XG4iXX0=
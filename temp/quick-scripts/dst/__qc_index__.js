
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Board');
require('./assets/scripts/Bubble');
require('./assets/scripts/GameController');
require('./assets/scripts/GameOverView');
require('./assets/scripts/Score');
require('./assets/scripts/Timer');
require('./assets/scripts/TimerScoreView');
require('./assets/scripts/constants/bubbleSpriteFrame');
require('./assets/scripts/constants/config');
require('./assets/scripts/types/types');
require('./assets/scripts/utils/getNewPositionByStep');
require('./assets/scripts/utils/getRandomType');

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
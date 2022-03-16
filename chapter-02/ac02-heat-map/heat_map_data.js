"use strict";
/// <reference path="./types/HeatMapTypes.d.ts"/>
/// <reference path="./types/HeatMapTypes.d.ts"/>
exports.__esModule = true;
var lodash = require("lodash");
var data = {
    batterHotZones: [[1, 2, 5, 3, 5, 7, 4]],
    pitcherHotZones: [[3, 5, 3, 2, 5, 2, 5]]
};
function findMatch(bzone, pzone) {
    return lodash.intersectionWith(bzone, pzone);
}
data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);
console.log(data.coordinateMap);

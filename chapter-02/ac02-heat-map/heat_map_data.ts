/// <reference path="./types/HeatMapTypes.d.ts"/>
/// <reference path="./types/HeatMapTypes.d.ts"/>

import lodash = require("lodash");
import heat = require("HeatMapTypes")


let data: heat.Pitcher = {
    batterHotZones: [[1,2,5,3,5,7,4]],
    pitcherHotZones: [[3,5,3,2,5,2,5]],
}

function findMatch(bzone: Array<Array<number>>, pzone: Array<Array<number>>) {
    return lodash.intersectionWith(bzone, pzone);
}

data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);

console.log(data.coordinateMap)
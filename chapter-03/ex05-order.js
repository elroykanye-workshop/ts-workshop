"use strict";
exports.__esModule = true;
exports.orderFactory = void 0;
var orderFactory = function () {
    var id = 0;
    return function (color, size, qty) {
        var orders = [];
        for (var i = 0; i < qty; i++) {
            orders.push({ id: id++, color: color, size: size });
        }
        return orders;
    };
};
exports.orderFactory = orderFactory;
var createOrder = (0, exports.orderFactory)();
var orderOne = createOrder("red", "M", 4);
console.log(orderOne);
var orderTwo = createOrder("blue", "S", 7);
console.log(orderTwo);

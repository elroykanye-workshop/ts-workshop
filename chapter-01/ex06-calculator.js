var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
var operations = [
    [Operator.Add, function (x, y) { return x + y; }],
    [Operator.Subtract, function (x, y) { return x - y; }],
    [Operator.Multiply, function (x, y) { return x * y; }],
    [Operator.Divide, function (x, y) {
            if (y === 0)
                throw new Error("Division by zero error");
            return x / y;
        }],
    [Operator.Modulo, function (x, y) { return x % y; }]
];
var calculator = function (first, second, op) {
    var tup = operations.find(function (t) { return t[0] === op; });
    if (tup == undefined)
        throw new Error("Operator ".concat(op, " not defined in operations"));
    var res = tup[1](first, second);
    return res;
};
console.log(calculator(4, 3, Operator.Add));
console.log(calculator(4, 3, Operator.Subtract));
console.log(calculator(4, 3, Operator.Multiply));
console.log(calculator(4, 3, Operator.Divide));
//console.log(calculator(4, 0, Operator.Divide))
console.log(calculator(4, 3, Operator.Modulo));

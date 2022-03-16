enum Operator {
    Add = "add",
    Subtract = "subtract",
    Multiply = "multiply",
    Divide = "divide",
    Modulo = "modulo",
}

type Operation = (x: number, y: number) => number;
const operations: [Operator, Operation][] = [
    [Operator.Add, (x: number, y: number) => x + y],
    [Operator.Subtract, (x: number, y: number) => x - y],
    [Operator.Multiply, (x: number, y: number) => x * y],
    [Operator.Divide, (x: number, y: number) => {
        if(y === 0) throw new Error("Division by zero error")
        return x/y
    }],
    [Operator.Modulo, (x: number, y: number) => x % y]
];

const calculator = function(first: number, second: number, op: Operator) {
    
    const tup = operations.find(t => t[0] === op);
    if(tup == undefined) throw new Error(`Operator ${op} not defined in operations`);

    const res = tup[1](first, second);

    return res;
}

console.log(calculator(4, 3, Operator.Add))
console.log(calculator(4, 3, Operator.Subtract))
console.log(calculator(4, 3, Operator.Multiply))
console.log(calculator(4, 3, Operator.Divide))
//console.log(calculator(4, 0, Operator.Divide))
console.log(calculator(4, 3, Operator.Modulo))
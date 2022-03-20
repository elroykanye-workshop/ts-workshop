/*
Function Expressions
Function expressions differ from function declarations in that they can be assigned
to variables, used inline, or invoked immediately – an immediately invoked function
expression or IIFE. Function expressions can be named or anonymous. Let's look at a
few examples:
*/
const myFunction9 = function(name: string = "World") {
    return `Hello ${name}`
}

console.log(myFunction9("Function Expression"))
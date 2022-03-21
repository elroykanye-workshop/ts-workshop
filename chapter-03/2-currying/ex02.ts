/*
Previously, we used arrow syntax to describe a function body without braces or the
return keyword. The function returns the result of the single expression in the
body. This function expects two parameters and can be rewritten as curried functions
with a single parameter each:
*/
const addTwoNumbers20 = function(a: number): (b: number) => number {
    return function(b: number): number {
        return a + b;
    }
}

const addTwoNumbers2 = (a: number): (
    (b: number) => number) => (b:number) : number => a + b;

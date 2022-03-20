/*
Optional Parameters
One important difference from JavaScript is that TypeScript function parameters
are only optional if we postfix them with ?. The function in the previous example,
myFunction, expects an argument. Consider the case where we don't specify
any arguments:
*/

function myFunction4(name?: string): string {
    return `Hello ${name}`
}

const message4 = myFunction4();

console.log(message4)
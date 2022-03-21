/*
Currying (named after Haskell Brooks Curry, the mathematician after whom the
Haskell, Brooks, and Curry programming languages are also named) is the act of
taking a function (or a formula in mathematics) and breaking it down into individual
functions, each with a single parameter.
*/
const addTwoNumbers = (a: number, b: number): number => a + b;
console.log(addTwoNumbers(3, 4));

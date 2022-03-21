/*
Function expressions can be used to create anonymous functions, that is, functions
that do not have names. This is impossible with function declarations. Anonymous
functions are often used as callbacks to native functions. For example, consider the
following code snippet with the Array.filter function:
*/

export const numbers = [1, 6, 3, 7, 3, ,8, 4, 4,2, ]
const filtered  = numbers.filter(function(val) {
    return val < 3;
});

console.log(filtered);

/*
An arrow function removes the function keyword and puts a "fat arrow" or =>
between the parameter list and the function body.
*/
const numbers12 = [1, 6, 3, 7, 3, ,8, 4, 4,2];
const filtered12 = numbers12.filter((n) => n < 4);
console.log(filtered12);
/*
When an arrow function has a single parameter and the type can be inferred, we
can make our code slightly more concise by omitting the parentheses around the
parameter list. Finally, our filter function may look like this:
*/
const numbers13 = [1, 6, 3, 7, 3, ,8, 4, 4,2];
const filtered13 = numbers13.filter(n => n < 4);
console.log(filtered13);
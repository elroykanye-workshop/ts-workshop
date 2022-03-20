/*
Function Parameters
A parameter is a placeholder for a value that is passed into the function. Any
number of parameters can be specified for a function. As we are writing TypeScript,
parameters should have their types annotated. Let's change our function so that it
requires a parameter and returns something:
*/
function myFunction3(name: string): string {
    return `Hello ${name}`;
}

const message3 = myFunction3("World");
console.log(message3);
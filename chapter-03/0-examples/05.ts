/*
Default Parameters
In the preceding example, the name parameter has been made optional and since
it never got a value, we printed out Hello undefined!. A better way to do this
would be to give name a default value, as shown here:
*/

function myFunction5(name: string = "World"): string {
    return `Hello ${name}`
}

const message5 = myFunction5();
console.log(message5)
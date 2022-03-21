/*
When a function is declared (be it a function statement, expression,
or arrow function), it encloses any variables in a higher scope. This is called a
closure. Any function can be a closure. A closure is simply a function that has
enclosed variables.
*/
const outer = (): void => {
    
    const hello = 'Hello';

    const inner = (): void => {
        const world = 'world!';
        console.log(`${hello} ${world}`);
    }
    inner();
    console.log(`${hello} ${world}`);
}

outer();
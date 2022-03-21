/*
We can fix ReferenceError by adding let world; to the
outer function:
*/
const outer2 = (): void => {
    
    const hello = 'Hello';
    let world; 

    const inner = (): void => {
        const world = 'world!';
        console.log(`${hello} ${world}`);
    }
    inner();
    console.log(`${hello} ${world}`);
}

outer2();
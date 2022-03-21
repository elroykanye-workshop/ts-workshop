/*
We can drop const from the inner declaration:
*/

const outer3 = (): void => {
    
    const hello = 'Hello';
    let world; 

    const inner = (): void => {
        world = 'world!';
        console.log(`${hello} ${world}`);
    }
    inner();
    console.log(`${hello} ${world}`);
}

outer3();
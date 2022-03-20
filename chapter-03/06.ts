/*
Rest Parameters
The spread operator (...) may be used as the final parameter to a function. This will
take all arguments passed into the function and place them in an array. Let's look at
an example of how this works:
*/
function readBook(title: string, ...chapters: number[]): void {
    console.log(`Starting to read ${title}...`);
    chapters.forEach(ch => {
        console.log(`Reading chapter ${ch}`);
    });
    console.log(`Done reading`)
}

readBook("The TypeScript Workshop", 1, 2, 3,);
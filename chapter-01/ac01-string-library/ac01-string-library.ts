/*
Activity 1.01: Creating a Library for Working with Strings

Your task is to create a series of simple functions that will help you do some
common operations on strings. Some of the operations are already supported in the
standard JavaScript library, but you will use them as a convenient learning exercise,
both of JavaScript internals and TypeScript as a language.
*/
function toTitleCase(str: string): string {
    const words = str.split(/\s{1,}/)
        .map(function(word) {
            let refWord = word[0].toUpperCase();
            for(let i = 1; i < word.length; i++) {
                refWord += word[i].toLowerCase();
            }
            return refWord;
        });
        console.log(words)
    return words.join(" ");
}

function countWords(str: string): number {
    return toWords(str).length;
}

function toWords(str: string): string[] {
    return str.split(/\s{1,}|-|_/);
}

function repeat(str: string, count: number): string {
    let rep = "";
    for (let i = 1; i <= count; i++) {
        rep += str;
    };
    return rep;
}

function isAlpha(str: string): boolean {
    if(str.length < 1) return false;
    const matches = str.match(/[A-Za-z\s{0,}]/g)
    if(!matches) return false;
    return matches.length == str.length;
}

function isBlank(str: string): boolean {
    if(str.length < 1) return true;
    return /^\s+$/.test(str);
}



let sampleStr = "Elroy Kanye 21 Old Boy"

console.log(isAlpha("Elroy Kanye"))
const arrOne = [7, 6, 8, 9, 2, 25];
const arrTwo = [6, 8, 9, 2, 25];
const arrThree = [6, 8, 9, 2, 25, 7];

function arrCompare(a1: number[], a2: number[]): boolean {
    if(a1.length != a2.length) return false;
    a1.sort();
    a2.sort();

    for (let i = 0; i < a1.length; i++) {
        if(a1[i] !== a2[i]) return false;
    }
    return true;
}

console.log(
    `Àre ${arrOne} and ${arrTwo} equal?`,
    arrCompare(arrOne, arrTwo)
)

console.log(
    `Are ${arrOne} and ${arrThree} equal?`,
    arrCompare(arrOne, arrThree)
)

console.log(
    `Are ${arrTwo} and ${arrThree} equal?`,
    arrCompare(arrTwo, arrThree)
)
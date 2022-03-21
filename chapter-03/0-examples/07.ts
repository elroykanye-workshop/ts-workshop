function paritySort(...numbers: number[]) : {evens: number[], odds: number[]} {
    return {
        evens: numbers.filter(n => n % 2 === 0),
        odds: numbers.filter(n => n % 2 === 1),
    };
}

const {evens, odds} = paritySort(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(evens)
console.log(odds)
const values = [8, 42, 99, 161];
let total = 0;
for(let i = 0; i < values.length; i++) {
    total += values[i];
}

const average = total/values.length;
const squareDiffs = [];
for(let i = 0; i < values.length; i++) {
    squareDiffs.push(Math.pow((values[i] - average), 2));
}

total = 0;
for(let i = 0; i < squareDiffs.length; i++) {
    total += squareDiffs[i];
}
const stdDev = Math.sqrt( total / squareDiffs.length );

console.log(`
Average = ${average}
Standard Deviation = ${stdDev}
    `
);

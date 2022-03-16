interface Person {
    firstName: string;
    lastName: string;
}

let count = 0;

function getFullName(person: Person) {
    count++;
    return `${person.firstName} ${person.lastName}`;
}

const programmers: Person[] = [
    { firstName: "Elroy" , lastName: "Kanye"},
    { firstName: 'Donald', lastName: 'Knuth'},
    { firstName: 'Barbara', lastName: 'Liskow'},
    { firstName: 'Lars', lastName: 'Bak'},
    { firstName: 'Guido', lastName: 'Van Rossum'},
    { firstName: 'Anders', lastName: 'Hejslberg'},
    { firstName: 'Edsger', lastName: 'Dijkstra'},
    { firstName: 'Brandon', lastName: 'Eich'},
];

function naiveSortPersons(persons: Person[]): Person[] {
    return persons.sort((first, second) => {
        const firstFullName = getFullName(first);
        const secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    })
}
function shwartzSort(persons: Person[]): Person[] {
    const personTuples: [Person, string][] = persons.map(p => [p, getFullName(p)]);
    personTuples.sort((first, second) => first[1].localeCompare(second[1]));
    return personTuples.map((pTuple) => pTuple[0]);

}

count = 0;
const sortedNaive = naiveSortPersons(programmers);
console.log(sortedNaive)
console.log(`When called using the naive approach, the function was called ${count} times.`)

count = 0;
const sortedShwartz = shwartzSort(programmers);
console.log(sortedShwartz);
console.log(`When called using the shwartz approach, the function was called ${count} times.`)


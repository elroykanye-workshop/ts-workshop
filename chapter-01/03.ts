interface User {
    firstName: string;
    lastName: string;
    age: number;
}
const elroykanye: User = {
    firstName: "Elroy",
    lastName: "Kanye",
    age: 21,
}

function showFullName(person: User) {
    console.log(`${person.firstName} ${person.lastName}`);
}

console.log(elroykanye)
const daysInWeek = 7;
const myname = "Elroy Kanye";
const isRaining = true;
const today = new Date();
const months = ["Jan", "Feb", "Mar"];
const notDefined = undefined;
const nothing = null;
const add3 = (x: number, y: number) => x + y;
const calc = {
    add3,
    res: add3(3,4)
}

const everything = [daysInWeek, myname, isRaining, today, months, notDefined, nothing, add3, calc];
for (const something of everything) {
    const type = typeof something;
    console.log(something, type);
}

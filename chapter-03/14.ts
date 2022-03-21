const person = {
    name: "Ahmed",
    sayHello: function () {
        return `Hello, ${this.name}!`
    }
}

console.log(person.sayHello())
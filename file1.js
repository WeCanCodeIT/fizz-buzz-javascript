let greeting = "Hello World"

const printGreetingToConsole = function () {
    console.log(greeting);
}

const jsonExamplePerson = {
    name: "Ben",
    age: 42,
    favoriteBook: "Eloquent JavaScript",
    celebrateBirthday: function () {
        this.age += 1;
    }
}

export default class Person {
    constructor(name, age, favoriteBook) {
        this.name = name;
        this.age = age;
        this.favoriteBook = favoriteBook;
    }

    celebrateBirthday() {
        this.age += 1;
    }
}

// export const ben = new Person("Ben", 31, "Good Omens")
// export const bosco = new Person("Bosco", 11, "Zen and the Art of Motorcycle Maintenance")
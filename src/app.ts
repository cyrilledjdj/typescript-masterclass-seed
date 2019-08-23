
// Object literal
// const myObj = {
//     myMethod() {
//         console.log(this)
//     }
// }

// function myFunction(...text: string[]) {
//     console.log(this, ...text)
// }

// myFunction.call('myObj')
// myFunction.call(myObj, 'ABC', 'DEF')
// myFunction.apply(myObj, ['ABC', 'DEF'])

// const bindFunction = myFunction.bind(myObj);
// bindFunction('ABC', 'DEF', 'GHI');
// bindFunction('CEF', 'DDEFEF', 'WED');

// class MyClass {
//     myMethod() {
//         const foo = 123;
//         console.log('1', this, foo)
//         setTimeout(() => {
//             console.log('2', this, foo);
//         });
//         setTimeout(function () {
//             console.log('3', this, foo);
//         });
//     }
// }

// const myInstance = new MyClass();

// myInstance.myMethod();

// const ele = document.querySelector('.click')

// function handleClick(this: HTMLAnchorElement, event: Event) {
//     event.preventDefault();
//     console.log(this.href);
// }

// ele.addEventListener('click', handleClick, false);

// const person = {
//     name: 'Todd',
//     age: 27
// }


// type Person = typeof person;

// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// const personName = getProperty(person, 'name')
// console.log(personName)

// interface Person2 extends Person {

// }

// const anotherPerson: Person = {
//     age: 30,
//     name: 'John'
// }

// const anotherPerson2: Person2 = {
//     age: 30,
//     name: 'John'
// }

// console.log(person, anotherPerson)

// typeof [];

// interface Person { name: string, age: number }

// interface ReadOnlyPerson { readonly name: string, readonly age: number }

// const person: Person = {
//     name: '',
//     age: 0
// };

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P]
// }
// function freeze<T>(obj: T): MyReadonly<T> {
//     return Object.freeze(obj);
// }

// const newPerson = freeze(person);

// interface Person { name: string, age: number }

// interface PartialPerson {
//     name?: string;
//     age?: number;
// }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// }

// function updatePerson(person: Person, prop: Partial<Person>) {
//     return { ...person, ...prop }
// }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// };

// console.log(updatePerson(person, { name: 'James' }))

interface Person { name: string, age: number }

type MyRequired<T> = {
    readonly [P in keyof T]-?: T[P];
};

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age} years old.`
}

const person: Person = {
    name: 'Todd',
    age: 2
};

console.log(printAge(person));

//Object literal

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

const person = {
    name: 'Todd',
    age: 27
}


type Person = typeof person;
interface Person2 extends Person {

}

const anotherPerson: Person = {
    age: 30,
    name: 'John'
}

const anotherPerson2: Person2 = {
    age: 30,
    name: 'John'
}

console.log(person, anotherPerson)

typeof [];

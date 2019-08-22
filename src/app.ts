
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

class MyClass {
    myMethod() {
        const foo = 123;
        console.log('1', this, foo)
        setTimeout(() => {
            console.log('2', this, foo);
        });
        setTimeout(function () {
            console.log('3', this, foo);
        });
    }
}

const myInstance = new MyClass();

myInstance.myMethod();
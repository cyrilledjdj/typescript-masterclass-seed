
//Object literal

const myObj = {
    myMethod() {
        console.log(this)
    }
}

function myFunction(...text: string[]) {
    console.log(this, ...text)
}

myFunction.call('myObj')
myFunction.call(myObj, 'ABC', 'DEF')
myFunction.apply(myObj, ['ABC', 'DEF'])

const bindFunction = myFunction.bind(myObj);
bindFunction('ABC', 'DEF', 'GHI');
bindFunction('CEF', 'DDEFEF', 'WED');
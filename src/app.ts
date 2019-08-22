function myFunction() {
    console.log(this)
}

myFunction();

//Object literal

const myObj = {
    myMethod() {
        console.log(this)
    }
}

myObj.myMethod();

new myFunction();

//Classes

class MyClass {
    myMethod() {
        console.log('Class:::', this)
    }
}
new MyClass().myMethod();
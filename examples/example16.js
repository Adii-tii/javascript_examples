//arrow functions
//while declaring func as a variable we were declaring the name of the func twice. To avoid that we use arrow functions.

const addNumbers = (a,b) => {
    return Number(a) + Number(b);
}

console.log(addNumbers(10, 20));

const printNumber = a => console.log(a);

printNumber(100);
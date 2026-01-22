//array functions
//1. forEach : executes a provided function once for each array element.

user.forEach( usr => {
    console.log("name: ", usr.name);
});

// an array is essentially an object with diff methods associated with it. in this case we use the method for each that takes a function as an argument and that function is executed for each element of the array.

//example of how forEach works internally :
/** function forEach(functionToExecute){
    for(let i=0; i<this.length; i++){
        functionToExecute(this[i]);
    }
} */


//2. map : creates a new array populated with the results of calling a provided function on every element in the calling array.

const ages = user.map( usr => usr.age);
console.log("ages: ", ages);

//3. filter : creates a new array with all elements that pass the test implemented by the provided function.

const validAges = user.filter(usr => usr.age > 20);
console.log("the person with valid age is: ", validAges);
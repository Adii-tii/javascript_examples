//functions in JS
//rule of thumb : make a function when you need to repeat it more than twice.

//Type 1 : Function Declaration
function addNumbers(a,b){
    Number(a) != NaN && Number(b) != NaN ? console.log(Number(a) + Number(b)) : console.log("Invalid input passed!");
}

addNumbers(10, "20J"); //b in NaN even after type conversion
addNumbers(10, "20"); // runs fine

let result = addNumbers(5, 15); 
console.log(result); //this will be undefined as the function does not return any value.

//storing the return value is optional if the function returns a value.


let num1 = 10;
let num2 = 20;

//values passed to the function are copied and not referenced.
function incrementNumbers(num1, num2){
    num1++;
    num2++;
}

console.log("Before incrementing: ", num1, num2); //10 20
incrementNumbers(num1, num2);
console.log("After incrementing: ", num1, num2); // 10 20 

function subtractNumbers(a, b){
    return a - b;
}

subtractNumbers(20);
console.log(subtractNumbers(20)); //NaN
//When a function is called with fewer arguments than defined parameters, the missing parameters are assigned the value undefined.
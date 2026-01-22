// the operator ... is called rest operator when collecting values.

function sum(...nums){
    let sum = 0;
    let i = 0;
    while(i < nums.length){
        sum += nums[i];
        i++;
    }
    return sum;
}

let result1 = sum(10,20,30);
let result2 = sum(5,15,25,35,45);

console.log(result1);
console.log(result2);

//sum takes numbers as arguments, there can be any number of arguments.
//So to handle that we use rest operator '...' before the param name nums. This collects all the arguments passed into an array named nums.
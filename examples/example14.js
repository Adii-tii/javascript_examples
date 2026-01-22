function addNumbers(a, b){
    b = b ?? 0;
    a = a ?? 0;

    return Number(a) + Number(b);
}

console.log(addNumbers(10)); //10
console.log(addNumbers(undefined, 20)); //20
console.log(addNumbers(10, 20)); //30


//using default parameters

function addNumbers2(a = 0, b = 0){
    console.log("a:", a, "b:", b);
    return Number(a) + Number(b);
}

console.log(addNumbers2(undefined, 20));
//while loop

let i = 5;
while(i > 0){
    console.log(i);
    i--;
}

do{
    console.log(i);
} while(i > 0);

// The while loop checks the condition before executing the loop body. If the condition is false at the start, the body will not execute at all.
// The do-while loop executes the body first and then checks the condition. Therefore, the body will execute at least once regardless of the condition.
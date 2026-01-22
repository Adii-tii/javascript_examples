//for loop
for(let i = 0; i < 5; i++){
    console.log(i);
}


let j;
for(j = 5; false; j++){
    console.log(j);
}

// the for loop above will not execute because the condition is false at the start. S1 -> S2 -> body -> S3 -> S2 -> body -> S3 ...

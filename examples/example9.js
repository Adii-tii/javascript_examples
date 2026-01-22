let x = 10;

switch(x){
    case 10:
        console.log("x is 10");
        break;
    case 20:
        console.log("x is 20");
        break;
    default:
        console.log("x is neither 10 nor 20");
}

//without break statement, all cases after the matched case will also execute. In order to exit the switch block after executing the matched case, we use the break statement.  
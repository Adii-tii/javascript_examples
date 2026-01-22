let userRole = "admin";
let isAuthenticated = true;
let userAge = 25;

let userRole2 = "user";
let isAuthenticated2 = true;
let userAge2 = 20;

function adminLogin(role, authenticated, age){
    if(!authenticated){
        console.log("Please Log in.");
    }
    else if(authenticated && role === "admin"){
        console.log("Welcome to the Dashboard!");
    }
    else if(authenticated && role === "user" && age >= 18){
        console.log("Access Denied");
    }
}

adminLogin(userRole, isAuthenticated, userAge);
adminLogin(userRole2, isAuthenticated2, userAge2);
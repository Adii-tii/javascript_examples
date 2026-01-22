// key value pairs separted by colon
// pairs separated by comma
// enclosed in curly braces {}

let user = {
    name : "aditi",
    age : 20
}

console.log("name of the user is : ", user.name); //dot notation
console.log("age of the user is: ",user["age"]); //bracket notation
console.log(user);

//obj within obj.

let allUsers = {
    user1: {
        name: "aditi",
        age: 20
    },
    user2: {
        name: "karan",
        age: 25
    }
}

console.log("name of user1 is: ", allUsers.user1.name);
console.log("name of user2 is: ", allUsers.user2.name);
console.log(allUsers);

console.log(JSON.stringify(allUsers,null,2)); //converts object to string format

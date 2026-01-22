const handleSignup = (obj) =>{
    const {username, email, ...metadata} = obj;
    return {username, isAdmin: false, metadata};
}


const user1 = {
    username: "Aditi Avinash Sable",
    email: "sableaditi@gmail.com",
    age: 21,
    password: "abcd1234",
    country: "India",
    zipcode: "411033"
}

const newUser = handleSignup(user1);
console.log(newUser);
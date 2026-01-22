const user = {
    age : 21,
    name : function(){
        console.log("age is: ", this.age);
        console.log(this === user);
    }
}

user.name();

//name here is a function which is a value of key name. So to access that function we can simply call name as user.name()

//but if we wish to access age inside that function we can use the keyword 'this' which refers to the current object 'user' here. So this.age refers to age prop of the user obj.

let age = 34;
const user2 = {
    age : 21,
    name: () => {
        console.log("age is: ", this.age); //here this does not refer to user2 obj as arrow functions do not have their own 'this'. So it refers to the global object which does not have age prop.
        console.log(this === user);
    }
}

user2.name();
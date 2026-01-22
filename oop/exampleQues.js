const user = {
    age : 21,
    name : function printAge(){
        console.log("age is: ", this.age);
        console.log(this === user);
    }
}

user.name();

//name here is a function which is a value of key name. So to access that function we can simply call name as user.name()

//but if we wish to access age inside that function we can use the keyword 'this' which refers to the current object 'user' here. So this.age refers to age prop of the user obj.
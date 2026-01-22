//The ... operator in JavaScript is called the spread operator when expanding values.

const exampleObject = {
    name: "Aditi",
    age: 21,
    hobbies: ["reading", "traveling", "coding"]
}

const {name, ...restProps} = exampleObject;

console.log(name);
console.log(restProps);

//Here we used the spread operator '...' to collect the remaining properties of the object into a new object named restProps after extracting the name property.


//So restProps will be an object containing age and hobbies properties. THIS IS CALLED DESTRUCTING. 

const names = ["aditi", "karan", "neha"];
const petNames = ["tommy", "bruno", "magic"];

const allNames = [...names, ...petNames];

console.log(allNames);
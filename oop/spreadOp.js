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

const exampleObject2 = exampleObject; //this creates a reference to the same obj in memory
console.log(exampleObject2 ===  exampleObject);

const exampleObject3 = {...exampleObject}; //this is the right way to clone an object.
console.log(exampleObject3 == exampleObject); //false because different objects in memory

//  IMP : Primitives are compared by value BUT ojects are compared by reference.


let obj1 = {a : 10, b : 20};
let obj1copy = {...obj1, b : 20};
let obj1copy2 = {...obj1, c : 30};

console.log(obj1copy);
console.log(obj1copy2);

//Here we cloned obj1 into obj1copy and obj1copy2 using spread operator. In obj1copy we kept b same as in obj1 but in obj1copy2 we added a new property c.
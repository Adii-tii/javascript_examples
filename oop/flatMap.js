const user = [
    [
        {
            name: "aditi",
            age : 20
        },
        {
            name: "karan",
            age : 25
        }
    ],
    [
        {
            name: "neha",
            age: 22
        },
        {
            name: "rahul",
            age: 30
        }
    ]
]


user.flatMap((p,i) => p.map(person => person.name)).forEach(nameStr => console.log(nameStr));

console.log("----using flat()----");
//flatMap flattens the array by one level.
console.log(user.flat());
user.flat().map((p,i) => p.name).forEach(nameStr => console.log(nameStr));
//this works fine as well
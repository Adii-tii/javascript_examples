/**Operators
1. Arithmetic Operators like +, -, *, /, %
2. Assignment Operators like =, +=, -=, *=, /=
3. Comparison Operators like ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators like &&, ||, ! (and, or, not)
5. Bitwise Operators like &, |, ^, ~, <<, >>, >>> 
6. coalescing Operator (??)

== is loose equality operator that is it performs type coercion before comparing the two values
for instance '5 == 5' is true (because js converts string '5' to number 5 before comparison)
whereas === is strict equality operator for instance '5 === 5' is false because one is string and other 
is number.

The same is not true for comparasion operators. the operands are always assumed to be numbers.
**/

let a = 5;
let b = '5';
console.log("a == b ", a == b);
console.log("a === b", a === b);


//changes
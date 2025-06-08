/* 
Variable Declaration and Initialization :: ==>

Variables are used to store data values. In JavaScript, we can declare variables using `var`, `let`, or `const`.
*/


/* 1. var (old way) :: ==> It's used to declare a variable that can be re-assigned later. It's function-scoped or globally-scoped, meaning it can be accessed anywhere within the function or globally if declared outside any function.

Here 1. Re-declaring and 2. Re-assigning a variable using `var` is allowed, which can lead to unexpected behavior if not managed carefully.

 Re-declaring  ==> ✅
 Re-assigning  ==> ✅
*/

var firstName = 'Shubhajit'; // Declaring a variable using var   
console.log(firstName); // Output :: Shubhajit
lastName = 'Sarkar'; // Re-assigning the variable   
console.log(lastName); // Output :: Sarkar




/* 2. let :: ==> It's used to declare a block-scoped variable that can be re-assigned later. It is limited to the block in which it is defined, making it more predictable than `var`.

Here 1. Re-declaring a variable using `let` is not allowed, but re-assigning  is allowed.

Re-declaring  ==> ❌
Re-assigning  ==> ✅
*/  

let age = 25; // Declaring a variable using let
console.log(age); // Output :: 25
age = 30; // Re-assigning the variable
console.log(age); // Output :: 30



/* 3. const :: ==> It's used to declare a block-scoped variable
 that cannot be re-assigned. It is also limited to the block in which it is defined. However, if the variable is an object or array, its properties or elements can still be modified.

 Here 1. Re-declaring a variable using `const` is not allowed, and 2. Re-assigning a variable using `const` is also not allowed.

Re-declaring  ==> ❌
Re-assigning  ==> ❌
*/

const pi = 3.14; // Declaring a constant using const
console.log(pi); // Output :: 3.14

/* ERROR :: After reassigning the constant variable.
pi = 3.14159; ==> This will throw an error because we cannot re-assign a constant
console.log(pi); ==> Uncommenting this line will throw an error: "TypeError: Assignment to constant variable."
*/

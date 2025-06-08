
/* 
Different types of Printing in Browsers(3 main) :: ==>

1. console.log()

2. console.warn()

3. console.error()

Also there is also other methods like console.info(), console.debug(), console.table() etc. But these are the main three methods used for printing in the browser console. We will cover them in the later as it's not important.
*/



// console.log() :: ==> It's used for general purpose output. it's commonly used when displaying data or debugging during development

console.log('Hello World!') // It's a general message


/* console.warn() ::  ==> It's used for warning of messages. Sometimes it's used for showing something unexpected but not necessarily an error. We can use it to alert the user about something that might need attention but isn't critical. Typically it's shows in yellow color in the console in the developer tolls.
*/

console.warn('This is warning!') // It's a warning message


/* console.error() :: ==> It's used for error messages. It's typically used to indicate that something has gone wrong in the code or application. It can be used to log exceptions or errors that need to be addressed. Usually, it shows in red color in the console in the developer tools.
*/
console.error('This is a ERROR message!') // It's an ERROR message



// Printing messages in JavaScript :: ==>
// We can print messags using single quotes or double quotes. Both are valid in JavaScript.


console.log('This is a message with single quotes'); // This is a message with single quotes

console.log("This is a message with double quotes"); // This is a message with double quotes


// We can also use backticks (``) to create template literals, which allow for multi-line strings and string interpolation.


console.log(`This is a message with backticks.`); // This is a message with backticks.
   
let fullName = 'Shubhajit';
console.log(`Hello, ${fullName}!`); // Hello, Shubhajit!

/* Template literals :: ==> 
Template literals are a way to create strings in JavaScript that can span multiple lines and include embedded expressions. They are enclosed by backticks (``) instead of single or double quotes. This allows for easier string formatting and interpolation.

Rules for using template literals :: ==>
1. Use backticks (``) to create a template literal.
2. You can include variables and expressions inside the template literal using the ${} syntax.  

*/

// Example of template literals with multi-line string and interpolation
let firstName = 'Shubhajit';    
let lastName = 'Sarkar';
let greeting = `Hello, my name is ${firstName} ${lastName}.`


// Comment in JavaScript ::  ==>  Comments are used to explain the code and make it more readable. They are ignored by the JavaScript engine and do not affect the execution of the code.

/*Type of comments in JavaScript :: ==>
1. Single-line comment  2. Multi-line comment 
*/


// Single-line comment :: ==>
// This is a single-line comment. It starts with two forward slashes (//) and continues until the end of the line.


/* 
Multi-line comment :: 
This is a multi-line comment. It starts with a forward slash and an asterisk and ends with an asterisk and a forward slash .Thus we can add multi-line comment.
*/
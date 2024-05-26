//Comment
console.log('Hello World')
//Assigning multiple variables at once
let firstName = 'Alex', lastName = 'Xu';
const interestRate = 3;
//interestRate = 1;
//Const cannot be changed
console.log(interestRate)

//Primitives: strings, numbers, booleans, undefined, null
let name = 'Alex';
console.log(name);
let age = 16;
let isApproved = true;
let one = undefined;
//let firstName; works same
let two = null;
//Clears values

//Reference types: object, array, function
let person = {
    name: 'Alex',
    age: 16
};
//Dot notation
person.name = 'John';
//Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person)

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 5
console.log(selectedColors)
console.log(selectedColors[0])
console.log(selectedColors.length)

//Functions
//Performing a task
function greet(name, lastName) {
    //          ^parameter
    console.log('Hello ' + name + ' ' + lastName);
}
greet(name, 'Xu');
//     ^argument
greet('Mary');

//Calculating a value
function square(number) {
    return number * number;
}

//2 function calls (log is also one)
console.log(square(2));





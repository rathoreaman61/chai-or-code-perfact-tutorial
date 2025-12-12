//Variable Declaration and Initialization

//////////////////////////////////////////////////var keyword ///////////////////////////////////////////////////////


//var use to declare variable and this variable can be re-declared and updated.
// and its scope is function-scoped.
// before ES6 version of JavaScript used var keyword to declare variable.and its value can be changed.
// after ES6 version of JavaScript let and const keywords are introduced to declare variable.

//note: it is a good practice to use let and const instead of var to avoid scope-related issues.
// avoid using var in modern JavaScript code.
//example of var
var city = 'New York';
console.log(city); // Output: New York

city = 'Los Angeles'; // Updating the variable
console.log(city); // Output: Los Angeles

var city = 'Chicago'; // Re-declaring the variable
console.log(city); // Output: Chicago

var name = 'aman',age = 22;

console.log(`Name = ${name}, age = ${age}`);

function greet(){
console.log(`hello ${name}`);
} greet();;

//what is ECMAScript & Es6?
//ECMAScript is a scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262.
//ES6(ECMAScript 2015) is the sixth edition of the ECMAScript language specification standard.
//It was released in June 2015 and introduced several new features and enhancements to JavaScript, 
// including let and const keywords for variable declaration.



///////////////////////////////////////////////////////let keyword ///////////////////////////////////////////////////////
//let use to declare variable and this variable can be updated but cannot be re-declared in the same scope.
// and its scope is block-scoped.
//example of let
let country = 'USA';
country = 'Canada'; // Updating the variable
console.log(country); // Output: Canada

function countryname() {
    let country = 'India'; 
    console.log(country); // Output: India
}
countryname();   

///////////////////////////////////////////////////////const keyword ///////////////////////////////////////////////////////
//const use to declare variable and this variable cannot be updated or re-declared.
// and its scope is block-scoped.
//example of const
const pi = 3.14;
console.log(pi); // Output: 3.14

//pi = 3.14159; // This will throw an error: Assignment to constant variable.

function showPi() {
    const pi = 3.14159; 
    console.log(pi); // Output: 3.14159
}
showPi();   

//Note: While the value of a const variable cannot be changed through reassignment,
// if the const variable holds an object or array, the contents of that object or array can still be modified.
const numbers = [1, 2, 3];
numbers.push(4); // Modifying the contents of the array
console.log(numbers); // Output: [1, 2, 3, 4]           



///////////////////////////////////////////////////////Summary ////////////////////////////////////////////////////////
//1. var is function-scoped, while let and const are block-scoped.
//2. var can be re-declared and updated, let can be updated but not re-declared, and const cannot be updated or re-declared.
//3. It is recommended to use let and const in modern JavaScript to avoid scope-related issues associated with var.                         
///////////////////////////////////////////////////////End /////////////////////////////////////////////////////////


const finalValue = 100;
let mutableValue = 50;
var globalValue = 10;

console.table([finalValue, mutableValue, globalValue]);
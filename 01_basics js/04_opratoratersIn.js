//Oprators in JavaScript

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Arthmatic oprators in js /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
let a = 10;
let b = 5;

console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);
console.log("The value of a % b is ", a % b);
console.log("The value of a ** b is ", a ** b);//exponentiation

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Assignment Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//Assignment operators are used to assign values to variables.

let c1 = 10;
c1 += 5; // c1 = c1 + 5
console.log("The value of c1 after += is ", c1);

let d1 = 10;
d1 -= 3; // d1 = d1 - 3
console.log("The value of d1 after -= is ", d1);

let e1 = 10;
e1 *= 2; // e1 = e1 * 2
console.log("The value of e1 after *= is ", e1);

let f1 = 10;
f1 /= 2; // f1 = f1 / 2
console.log("The value of f1 after /= is ", f1);

let g1 = 10;
g1 %= 3; // g1 = g1 % 3
console.log("The value of g1 after %= is ", g1);

              

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Comparison Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//Comparison operators are used to compare two values and return a boolean result (true or false).

let x = 10;
let y = 5;

console.log("Is x equal to y? ", x == y); // Equal
console.log("Is x not equal to y? ", x != y); // Not equal
console.log("Is x greater than y? ", x > y); // Greater than
console.log("Is x less than y? ", x < y); // Less than
console.log("Is x greater than or equal to y? ", x >= y); // Greater than or equal
console.log("Is x less than or equal to y? ", x <= y); // Less than or equal

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Logical Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//Logical operators are used to combine multiple boolean expressions.

let p = true;
let q = false;                                  
console.log("p AND q: ", p && q); // AND
console.log("p OR q: ", p || q); // OR
console.log("NOT p: ", !p); // NOT

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ String Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//String operators are used to manipulate strings.

let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2; // Concatenation
console.log("Concatenated String: ", str3);

let str4 = "Hello";
str4 += ", JavaScript!"; // Append
console.log("Appended String: ", str4);             
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Ternary Operator /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//The ternary operator is a shorthand way of writing an if-else statement.  
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Can you vote? ", canVote); 
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Type Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//Type operators are used to check the type of a variable or object.

let var1 = 42;
console.log("Type of var1: ", typeof var1); // Typeof

let arr = [1, 2, 3];
console.log("Is arr an instance of Array? ", arr instanceof Array); // Instanceof

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Unary Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ˉ//
//Unary operators operate on a single operand to produce a new value.

let num = 5;
console.log("Incremented num: ", ++num); // Increment
console.log("Decremented num: ", --num); // Decrement
console.log("Unary plus of num: ", +num); // Unary plus
console.log("Unary minus of num: ", -num); // Unary minus
console.log("Logical NOT of true: ", !true); // Logical NOT

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Special Operators /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ˉˉˉˉˉ//
//Special operators perform specific operations that don't fit into other categories.

let obj = { name: "Aman", age: 25 };
console.log("Accessing name using optional chaining: ", obj?.name); // Optional chaining

let value = null;
console.log("Using nullish coalescing operator: ", value ?? "Default Value"); // Nullish coalescing

let a2 = 1, b2 = 2;
console.log("Using comma operator: ", (a2 += 1, b2 += 1, a2 + b2)); // Comma operator

let arr2 = [1, 2, 3];
delete arr2[1];
console.log("Array after delete operator: ", arr2); // Delete
// 🔍 3. Comparison Operators

// Compare करने के लिए (true / false):

// ==   // Equal (value only)
// ===  // Strict equal (value + type)
// !=   // Not equal
// !==  // Strict not equal
// >    // Greater than
// <    // Less than
// >=   // Greater than or equal
// <=   // Less than or equal

// 🧠 4. Logical Operators

// Conditions combine करने के लिए:

// &&   // AND
// ||   // OR
// !    // NOT

// 🧩 5. Bitwise Operators

// Binary level operations:

// &   |   ^   ~   <<   >>   >>>

// 🔠 6. String Operators

// Strings के साथ काम:

// +    // Concatenation
// +=   // Append

// ❓ 7. Conditional (Ternary) Operator

// Shortcut if–else:

// condition ? value1 : value2

// 🧪 8. Type Operators

// Data type check करने के लिए:

// typeof   // Type बताता है
// instanceof // Object instance check

// 🔁 9. Unary Operators

// Single operand पर काम करते हैं:

// ++   // Increment
// --   // Decrement
// +    // Unary plus
// -    // Unary minus
// !    // Logical NOT

// 🧱 10. Special Operators
// ?.   // Optional chaining
// ??   // Nullish coalescing
// ,    // Comma operator
// delete
// new



// Basic types - declaring variables with their data types
var age = 30;
var firstName = "Joseph";
var isStudent = true;
// Type inference
var lastName = "Peterson";
var height = 1.85;
// Any and Unknown
var anything;
anything = 1;
anything = "Hello";
console.log(anything.length);
anything = true; // all these assignment statements are valid because of the any type
// Unknown type
var maybe;
maybe = "This is a great coding lesson";
// console.log(maybe.length);// This will throw an error because maybe is of type unknown
if (typeof maybe === "string") {
    console.log(maybe.length);
}
// Arrays
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Jane", "Joe"];
// Tuples
var friend = ["Peter", 46];
console.log(age, firstName, lastName, numbers.length);

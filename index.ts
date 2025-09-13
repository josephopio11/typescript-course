// Basic types - declaring variables with their data types
let age: number = 30;
let firstName: string = "Joseph";
let isStudent: boolean = true;

// Type inference
let lastName = "Peterson";
let height = 1.85;

// Any and Unknown
let anything: any;
anything = 1;
anything = "Hello";
console.log(anything.length);
anything = true; // all these assignment statements are valid because of the any type

// Unknown type
let maybe: unknown;
maybe = "This is a great coding lesson";
// console.log(maybe.length);// This will throw an error because maybe is of type unknown

if (typeof maybe === "string") {
  console.log(maybe.length);
}

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Joe"];

// Tuples
let friend: [string, number] = ["Peter", 46];

console.log(age, firstName, lastName, numbers.length);

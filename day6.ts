// Generics, Utility types, and Final

// Generics
// Without generics

function identity(arg: any): any {
  return arg;
}

let output = identity("Joseph");

console.log(output);

function identity2<T>(arg: T): T {
  return arg;
}

let output1 = identity2<string>("Microphone");
let output2 = identity2(3);
let output3 = identity2(true);

console.log(output1);
console.log(output2);
console.log(output3);

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("welcome");
loggingIdentity([1, 2, 3, 4, 5]);

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const numbers = [10, 20, 30, 40];
const firstNum = getFirstElement(numbers);
console.log(`The first number in the list is ${firstNum}`);

// Please print out the first item of this list
const items = ["Apple", "Banana", "Microsoft"];

const emptyList: any = [];
const anItem = getFirstElement(emptyList);
console.log(`The first item in the list is ${anItem}`);

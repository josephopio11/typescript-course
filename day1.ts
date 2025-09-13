let tagLine: string = "Here are my details";
let personName: string = "Joseph";
let personAge: number = 33;
let lovesCoding: boolean = true;
let hatesFood: null = null;
let isPolitical: undefined = undefined;

let enemies: any;

enemies = 3;
enemies = enemies + 1;

// Arrays and lists
let friends: string[] = ["Michael", "Dwight", "Jim", "Pam", "Ryan", "Andy"];
let workingHours: number[] = [8, 8, 8, 8, 8, 8];

// Tuples
let friend: [string, number] = ["Peter", 46];

let person = {
  personName,
  personAge,
  lovesCoding,
  hatesFood,
  isPolitical,
};

console.log(tagLine);
console.table(person);

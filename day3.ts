console.log("This is Day 3 TypeScript file.");

class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`Vehicle Info: ${this.year} ${this.make} ${this.model}`);
  }

  getDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getAnnualSalary(): number {
    return this.salary * 12;
  }
}

const emp = new Employee("Alice", 5000);
console.log(`Employee Name: ${emp.name}`);
console.log(`Annual Salary: ${emp.getAnnualSalary()}`);

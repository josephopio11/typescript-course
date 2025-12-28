// Enums

/*
 * Admin
 * Editor
 * Subscriber
 * Banned
 */

// Numeric Enum
enum OrderStatus {
  Pending, // 0
  Shipped, // 1
  Delivered,
  Cancelled,
}

let myOrderStatus: OrderStatus = OrderStatus.Shipped;

console.log(`My order status is: ${myOrderStatus}`);

function processOrder(status: OrderStatus) {
  if (status === OrderStatus.Pending) {
    console.log("Your purchase is pending");
  }
}

processOrder(myOrderStatus);

// String Enum
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Subscriber = "SUBSCRIBER",
  Banned = "BANNED",
}

let currentUserRole: UserRole = UserRole.Subscriber;
console.log(currentUserRole);

// Union types

let userId: string | number;

userId = "USR-109289";
console.log(`Current user ID is: ${userId}`);
console.log(`The id is of type ${typeof userId}`);

userId = 98120;
console.log(`User ID has been changed to ${userId}`);
console.log(`The new id is of type ${typeof userId}`);

// Intersection types
interface Draggable {
  drag(): void;
  title: string;
}

interface Resizable {
  resize(): void;
  info?: string | string[];
}

type UIWidget = Draggable & Resizable;

let widget: UIWidget = {
  title: "UI Widget mods",
  info: "This is just random information",
  drag: () => console.log("Dragging..."),
  resize: () => console.log("Resizing..."),
};

// Writing a function that accepts union types:

function printItems(items: string | string[]) {
  if (typeof items === "string") {
    // Typescript will know that the items input are a string
    console.log(items);
  } else {
    items.forEach((item) => console.log(item));
  }
}

let purchase = "tomato";

console.log("=======================================");
console.log("Single item");
printItems(purchase);
console.log("=======================================");

let shopping_list = ["apple", "banana", "microsoft"];

console.log("=======================================");
console.log("List of items");
printItems(shopping_list);
console.log("=======================================");

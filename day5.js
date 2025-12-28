// Enums
/*
 * Admin
 * Editor
 * Subscriber
 * Banned
 */
// Numeric Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var myOrderStatus = OrderStatus.Shipped;
console.log("My order status is: ".concat(myOrderStatus));
function processOrder(status) {
    if (status === OrderStatus.Pending) {
        console.log("Your purchase is pending");
    }
}
processOrder(myOrderStatus);
// String Enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Subscriber"] = "SUBSCRIBER";
    UserRole["Banned"] = "BANNED";
})(UserRole || (UserRole = {}));
var currentUserRole = UserRole.Subscriber;
console.log(currentUserRole);
// Union types
var userId;
userId = "USR-109289";
console.log("Current user ID is: ".concat(userId));
console.log("The id is of type ".concat(typeof userId));
userId = 98120;
console.log("User ID has been changed to ".concat(userId));
console.log("The new id is of type ".concat(typeof userId));
var widget = {
    title: "UI Widget mods",
    info: "This is just random information",
    drag: function () { return console.log("Dragging..."); },
    resize: function () { return console.log("Resizing..."); },
};
// Writing a function that accepts union types:
function printItems(items) {
    if (typeof items === "string") {
        // Typescript will know that the items input are a string
        console.log(items);
    }
    else {
        console.log(typeof items);
        items.forEach(function (item) { return console.log(item); });
    }
}
var purchase = "tomato";
console.log("=======================================");
console.log("Single item");
printItems(purchase);
console.log("=======================================");
var shopping_list = ["apple", "banana", "microsoft"];
console.log("=======================================");
console.log("List of items");
printItems(shopping_list);
console.log("=======================================");

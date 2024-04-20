// Program to determine if a user can purchase a product based on their age and budget.

let age = 20;
let budget = 100;
let productPrice = 70;

if (
 (age >= 18 && budget >= productPrice) ||
 (age < 18 && budget >= productPrice)
) {
 console.log("You can purchase the product.");
} else {
 console.log("Sorry, you cannot purchase the product.");
}

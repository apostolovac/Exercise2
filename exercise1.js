/* Program that determines if a user meets the eligibility criteria
for a discount based on their age and membership status. */

let age = 20;
let isMember = true;

if ((age >= 18 && isMember) || isMember) {
 console.log("Congratulations! You are eligible for the discount.");
} else {
 console.log("Sorry, you are not eligible for the discount.");
}

//Program to determine if a given number is even or odd.

function checkEvenOdd(number) {
 if (number % 2 === 0) {
  return `${number} is even`;
 } else {
  return `${number} is odd`;
 }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));

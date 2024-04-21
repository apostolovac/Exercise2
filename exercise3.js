//function to calculate a student's letter grade based on their score and total score.

let score = 78;
let totalScore = 100;

function gradeCalc(score, totalScore) {
 const percentage = (score / totalScore) * 100;

 if (score >= 90 && score <= 100) {
  return `You got a grade A (${percentage}%)`;
 } else if (score >= 80 && score < 90) {
  return `You got a grade B (${percentage}%)`;
 } else if (score >= 70 && score < 80) {
  return `You got a grade C (${percentage}%)`;
 } else if (score >= 60 && score < 70) {
  return `You got a grade D (${percentage}%)`;
 } else {
  return `You got a grade F (${percentage}%)`;
 }
}
console.log(gradeCalc(score, totalScore));

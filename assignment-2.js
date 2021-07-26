const user = prompt("Lets play the sum game.\nPlease enter your name");
const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter second number"));
const answer = num1 + num2;
document.getElementById("title").textContent =
  "Hi, " + user + " the sum of " + num1 + " and " + num2 + " is " + answer;

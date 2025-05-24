let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let currentYear = new Date().getFullYear();
let yearOfBirth = currentYear - userAge;
console.log("Hello " + userName + ", you were born in the year " + yearOfBirth + ".");
alert("Hello " + userName + ", you were born in the year " + yearOfBirth + ".");
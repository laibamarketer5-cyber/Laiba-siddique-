
let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Fail");
}



let number = 12;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}




let tableNumber = 5;

console.log("Multiplication Table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of first " + n + " natural numbers = " + sum);

let a = 25;
let b = 40;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest Number: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest Number: " + b);
} else {
    console.log("Largest Number: " + c);
}
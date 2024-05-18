// Task 5
document.write("<h1>Chapter 5</h1>>");

var x = 3;
var y = 5;
console.log(x + y, x - y, x * y, x / y, x % y);
document.write("The sum of " + x + " + " + y + " is 8 <br>" +
"The sub of " + x + " - " + y + " is -2 <br>" +
"The mul of " + x + " * " + y + " is 15 <br>" +
"The div of " + x + " / " + y + " is 0.6 <br>" +
"The mod of " + x + " % " + y + " is 3 <br> <hr>" 
);

// console.log(x - y);
// document.write("The sum of 3 - 5 is -2 <br>");
// console.log(x * y);
// document.write("The sum of 5 * 3 is 15 <br>");
// console.log(x / y);
// document.write("The sum of 5 / 3 is 0.6 <br>");
// console.log(x % y);
// document.write("The sum of 3 % 5 is 3 <br>");

// // Subtraction
// var x = 5;
// var y = 3;
// console.log(x - y);
// document.write("The sum of 5 - 3 is 2 <br>");

// // Multiplication
// var x = 5;
// var y = 3;
// console.log(x * y);
// document.write("The sum of 5 * 3 is 15 <br>");

// // Division
// var x = 15;
// var y = 3;
// console.log(x / y);
// document.write("The sum of 15 / 3 is 5 <br>");

// // Modulus
// var x = 15;
// var y = 4;
// console.log(x % y);
// document.write("The sum of 15 % 4 is 3 <br>");

var num;
console.log(num);
document.write("Value after variable declaration is " + num + "<br>");

var num = 5;
var num1 = 7;
console.log(num);
document.write("Initial value: " + num + "<br>");
num++;
console.log(num);
document.write("Value after increment is: " + num + "<br>");
var num3 = num + num1;
console.log(num3);
document.write("Value after addition is: " + num3);
num3--
console.log(num3);
document.write("“Value after decrement is: " + num3 + "<br>");

var num4 = 0;
var num5 = 3;
var num6 = num4 / num5;
document.write("The remainder is :" + num6 + "<br>");

var ticketPrice = 600;
var person = 5;
var totalCost = ticketPrice * person;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR" + "<br> <hr>");

document.write("<h1>Table of 4 </h1><br>");
var tableNum = 4;
var counter = 1;
var incre = 1;
document.write(tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br>" +
tableNum + "x" + counter++ + "=" + tableNum*incre++ + "<br> <hr>" 
);

var item1 = 650;
var item2 = 100;
var shippingCharges = 100;
var item1And3 = item1 * 3;
var item2And7 = item2 * 7;
var total = item1And3 + item2And7 + shippingCharges;
console.log(total);
document.write(
"<h1>Shopping Chart</h1> <br>" +
"Price of item1 is " + item1 + "<br>" +
"Quantum of item 1 is 3 <br>" +
"Price of item2 is " + item2 + "<br>" +
"Quantum of item 2 is 7 <br>" +
"Shiiping charges " + shippingCharges + "<br>" +
"Total cost of your order is " + total + "<hr>"
);

var totalMarks = 980;
var obtainMarks = 804;
var num = 100;
var percen = obtainMarks / totalMarks * num;
document.write(
"Total marks: " + totalMarks + "<br>" +
"Marks obtained: " + obtainMarks + "<br>" + 
"Percentage: " + percen + "<hr>"
); 

var usDollar = 10;
var saudiRiyal = 25;
var usConverToPkr = 278.14;
var saudiConverToPkr = 74.16;
var total = (usDollar * usConverToPkr) + (saudiRiyal * saudiConverToPkr);
console.log(total);
document.write(
"<h1>Currency in PKR</h1> <br>" +
"Total Currency in PKR " + total + "<hr>"
);

var x = 5;
var y = 10;
var z = 5 * 10 / 2;
console.log(z);


var currentYear = 2024;
var birthYear = 2001;
var age = currentYear - birthYear;
console.log(age);
document.write(
"<h1>Age Calculator</h1> <br>" +
"Current Year: " + currentYear + "<br>" +
"Birth Year: " + birthYear + "<br>" +
"Your Age is: " + age +"<hr>"
);

var radius = 20;
var pi = 3.142;
var circumference = 2 * 3.142 * radius;
var Area = pi * (radius,2);
console.log(circumference , Area);
document.write(
"<h1>The Geometrizer</h1>" + "<br>" +
"Radius of a circle is: " + radius + "<br>" +
"The circumference is: " + circumference + "<br>" +
"The Area is: " + Area + "<hr>"
);

var snake = "Prince buiscuit";
var currentAge = 23;
var maxAge = 65;
var amountOfSnakesPerDay = 3;
var remAge = maxAge - currentAge;
var total = remAge * 3;
console.log(total);
document.write(
"<h1>The Lifetime Supply Calculator</h1>" + "<br>" +
"Favourite Snake: " + snake + "<br>" +
"Current age: " + currentAge + "<br>" +
"Estimated Maximum Age: " + maxAge + "<br>" +
"Amount of snakes per day: " + amountOfSnakesPerDay + "<br>" +
"You will need " + total + snake + " to last you until the ripe old age of " + maxAge  
);
// document.write("<h1>Chapter 10 and 11</h1>");

// // Question 1
// var city = prompt("Enter your city name");
// if(city === "karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Hello")
// }

// // Question 2
// var gender = prompt("What's your gender?")
// if(gender === "male"){
//     alert("Good Morning Sir.")
// }
// else{
//     alert("Good Morning Ma’am.")
// }

// // Question 3
// var signal = prompt("Signal color");
// if(signal === "red"){
//     alert("Must stop")
// }
// else if(signal === "yellow"){
//     alert("Ready to move")
// }
// else if(signal === "green"){
//     alert("Move now")
// }
// else{
//     alert("wrong color")
// }

// // Question 4
// var fuel = +prompt("Remaining Fuel in a car(in litres)");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }

// // Question 5
// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// else if(c === 13){
// alert("condition 2 is true");
// }

// else if(++c < 14){
// alert("condition 3 is true");
// }

// else if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// var car = "small";
// var cat = "big";
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Question 6
// var marks1 = +prompt("Subject 1");
// var marks2 = +prompt("Subject 2");
// var marks3 = +prompt("Subject 3");
// var totalMarks = 300;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = obtainedMarks * totalMarks / 100;
// if (percentage >= "GreaterThan or equal to 80") {
//     alert("grade = A");
// } 
// else if (percentage >= "GreaterThan or equal to 70") {
//     alert("grade = B" )
// } 
// else if (percentage >= "GreaterThan or equal to 60") {
//     alert("grade = C" )
// } 
// else if (percentage < 60) {
//     alert("Fail")
// } 

// Question 7
// var secretNumber = +prompt("Guess a Number");
// var guessNumber = 5;
// if(secretNumber === guessNumber){
//     alert("Bingo! Correct answer.")
// }
// else if(secretNumber === +1){
//     alert("Close enough to the correct answer.")
// }

// Question 8
// var num = +prompt("What's your number");
// if(num%3 === 0){
//     alert("The Answer is " + num);
// }
// else{
//     alert("The num is not divisible by 3")
// }

// Question 9
// var num = +prompt("What's your Number");
// if(num < 0){
//     alert("Number is Negative")
// }
// else{
//     alert("Number is Positive")
// }

// Question 10
var weather = +prompt("Weather Temperature");
if(weather > 40){
    alert("It is too hot outside.")
}
else if(weather > 30){
    alert("The Weather today is Normal.")
}
else if(weather > 20){
    alert("Today’s Weather is cool.")
}
else if(weather > 10){
    alert("OMG! Today’s weather is so Cool.")
}
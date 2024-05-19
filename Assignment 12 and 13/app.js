document.write("<h1>Chapter 12 and 13</h1>");

// Question 1
var input = +prompt("Enter a character");
if(input === 0){
    alert("Input is a Number")
}
else if(input >=65 && input <=90){
    alert("Input is an uppercase letter");
}
else if(input >= 97 && input <= 122){
    alert("input is an lowercase letter");
}
else{
    alert("Input is not a number or letter");
}

// Question 2
var num1 = +prompt("Enter first integer");
var num2 = +prompt("Enter second integer");
if(num1 > num2){
    alert("The larger integer is num1");
}
else if(num2 > num1){
    alert("The larger integer is num2");
}
else{
    alert("The integers are equal");
}

// Question 3
var num3 = parseInt(+prompt("Enter a number?"));
if(num3 > 0){
    alert("The number is positive");
}
else if(num3 < 0){
    alert("The number is negative")
}
else{
    alert("The number is zero")
}

// Question 4
var vowel = prompt("Enter a vowel Alphabet");
if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
    alert("True");
}
else{
    alert("False");
}

// Question 5
var userPassword = prompt("Enter a Password");
var Password = "rockingram";
if(userPassword === Password){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect password")
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// Question 7
var time = prompt("Enter time in 24 hours clock format");
if(time >= "6am" && time <= "12am"){
    alert("Good Morning!")
}
else if(time >= "12am" && time <= "7pm"){
    alert("Good Afternoon");
}
else if(time >= "7pm" && time <= "12pm"){
    alert("Good Evening")
}
else{
    alert("Good Night")
}

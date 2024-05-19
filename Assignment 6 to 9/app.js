document.write("<h1>Chapter 6 to 9</h1>");

// Questipon 1
var a = 10;
console.log(a);
++a;
console.log(a);
a++;
console.log(a);
--a;
console.log(a);
a--;
console.log(a);
document.write(
"Result:" + "<br>" + 
"The value of a is" + a + "<br>" + "<br>" +
"The value of ++a is " + ++a + "<br>" + 
"Now the value of a is " + a + "<br>" + "<br>" +
"The value of a++ is " + a++ + "<br>" +
"Now the value of a++ is " + a + "<br>" + "<br>" +
"The value of --a is " + --a + "<br>" +
"Now the value of a is " + a + "<br>" + "<br>" +
"The value of a-- is " + a-- + "<br>" +
"Now the value of a is " + a + "<br> <hr>"
);

// Question 2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
console.log(result);
document.write(
"a is " + a + "<br>" +
"b is " + b + "<br>" +
"result is " + result + "<hr>"
);

// Question 3
var name = prompt("What's your name?");
if(name === "Ramsha"){
    alert("Hello");
}

// Question 6
var subj1 = prompt("Enter Subject 1 name?");
var subj2 = prompt("Enter Subject 2 name?");
var subj3 = prompt("Enter Subject 3 name?");
var totalMarks = 100;
var obtainedMarks1 = +prompt("Enter obtained marks for subj 1");
var obtainedMarks2 = +prompt("Enter obtained marks for subj 2");
var obtainedMarks3 = +prompt("Enter obtained marks for subj 3");
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = totalObtainedMarks / (totalMarks * 3) * 100;
alert(`Total Marks: ${totalObtainedMarks}/${totalMarks * 3}\r\nPercentage: ${percentage.toFixed(2)}%`);

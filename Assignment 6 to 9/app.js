document.write("<h1>Chapter 6 to 9</h1>");

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

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
console.log(result);
document.write(
"a is " + a + "<br>" +
"b is " + b + "<br>" +
"result is " + result + "<hr>"
);

var subj1 =  Science;
var subj2 = Math;
var subj3 = Urdu;
var totalMarksOfSubj1 = 100;
var totalMarksOfSubj2 = 100;
var totalMarksOfSubj3 = 100;
var obtMarks1 = 54;
var obtMarks2 = 54;
var obtMarks3 = 48;
var totalMarksOfSubj = totalMarksOfSubj1 + totalMarksOfSubj2 + totalMarksOfSubj3;
console.log(totalMarksOfSubj);
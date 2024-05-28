document.write("<h1>Chapter 14 to 16</h1>")

// Question 1
var studentNames = [];
console.log([]);

// Question 2
// let studentNames = newArray();



// Question 3
var strArrays = ["Ramsha", "Rubina", "Rida", "Amna"];
console.log(strArrays);

// Question 4
var numArrays = [1, 2, 3, 4, 5];
console.log(numArrays);

// Questiojn 5
var booleanArrays = ["True", "False", "True"];
console.log(booleanArrays);

// Question 6
var mixedArrays = [1, "True", 3, "Java", "False", "Python", "7"];
console.log("mixedArrays");

// Question 7
var educationQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
console.log(educationQualification);
document.write("<h1>Qualifications:</h1>" + "<br>" )
document.write("<ol>")
document.write("<li>"+educationQualification[0] +"</li>")
document.write("<li>"+educationQualification[1] +"</li>")
document.write("<li>"+educationQualification[2] +"</li>")
document.write("<li>"+educationQualification[3] +"</li>")
document.write("<li>"+educationQualification[4] +"</li>")
document.write("<li>"+educationQualification[5] +"</li>")
document.write("<li>"+educationQualification[6] +"</li>")
document.write("<li>"+educationQualification[7] +"</li>")
document.write("</ol>")

// Question 10
var stuScores = [320, 230, 480, 120];
stuScores.sort((a,b) => a-b);
console.log(stuScores);
document.write(
"Score of students" + stuScores + "<br>" +
"Ordered score of students" + stuScores + "<br>" + "<br>"
);

// Question 11
var cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
var selectedCities = [];
selectedCities = cities.slice(0, 3);
console.log(selectedCities);
document.write(
"<b>Cities list:</b> " + "<br>" + cities + "<br>" + "<br>" +
"<b>Selected cities list</b>" + "<br>" + selectedCities + "<br>" + "<br>"
);

// Question 12
var arr = ["This", "is", "my", "cat."];
console.log(arr);
var string = ("This is my cat.");
console.log(string);
document.write("<b>Array: </b>" + "<br>" + arr + "<br>");
document.write("<b>String: </b>" + "<br>" + string + "<br>" + "<br>");

// Question 13
var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());

// Question 14
var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
lifoArray.reverse();
console.log(lifoArray.shift());
console.log(lifoArray.shift());
console.log(lifoArray.shift());
console.log(lifoArray.shift());

// Question 15
var phoneManufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"];
document.write("<select>")
document.write("<option>"+phoneManufactures[0]+"</option>")
document.write("<option>"+phoneManufactures[1]+"</option>")
document.write("<option>"+phoneManufactures[2]+"</option>")
document.write("<option>"+phoneManufactures[3]+"</option>")
document.write("<option>"+phoneManufactures[4]+"</option>")
document.write("</select>")

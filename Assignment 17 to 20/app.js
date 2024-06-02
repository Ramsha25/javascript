document.write("<h1>Chapter 17 to 20</h1>");

// Question 1
var multiDiamArray = [];
var multiDiamArray = [[], [], [], [], [],];
console.log(multiDiamArray);

// Question 2
var matrix = [[0, 1, 2 , 3], [1, 0, 1, 2], [2, 1, 0, 1]];
console.log(matrix);
document.write(
matrix[0] + "<br>" +
matrix[1] + "<br>" +
matrix[2] + "<br>" + "<br>"
);

// Question 3
for(var i = 0; i <= 9; i++){
    console.log(i);
    document.write(i + "<br>" );
}

// Question 4
// var tableNumber = +prompt("Enter a number to show its multiplication table");
// var tableLength = +prompt("Enter length multiplication table");
// for(var i = 1; i<=tableLength; i++){
//     console.log(tableNumber + "x" + i + "=" + i*tableNumber);
//     document.write(
//         tableNumber + "x" + i + "=" + i*tableNumber + "<br>" + "<br>"   
//     );
// }

// Question 5
var fruits = ["Apple", "banana", "Mango", "orange", "strawberry"];
for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
    document.write(fruits[i] + "<br>");
}

// Question 8
var a = [24, 53, 78, 91, 12];
var largest = a[0];
for(var i=1; i<=a.length; i++){
    if(a[i] > largest){
        largest = a[i]
    }
}
document.write("Array items " + a +"<br>");
document.write("The largest number is " + largest + "<br>" + "<br>");

// Question 9
var a = [24, 53, 78, 91, 12];
var smallest = a[0];
for(var i=1; i<=a.length; i++){
    if(a[i] < smallest){
        largest = a[i]
    }
}
document.write("Array items " + a +"<br>");
document.write("The smallest number is " + smallest + "<br>" + "<br>");

// Question 10
for(var i=1; i<=100; i++){
    if(i%5 === 0)
    console.log(i);
}
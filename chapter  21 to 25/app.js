// Task 1
var user1 = prompt("Enter your first name");
var user2 = prompt("Enter your second name");
var fullname = user1 + " " + user2
alert(fullname);

// Task 2
var mobile = prompt("Enter your favorite mobile phone model");
var mobLength = mobile.length;
alert(mobLength);
document.write(
"My favorite phone is: " + mobile + "<br>" +
"Length of string: " + mobLength
);

// Task 3
function findIndex(){
    var word = "Pakistani";
    var letter = "n";
    var index = word.indexOf(letter);
    alert("Index of " + letter + " is " + index);
    document.write(
    "String: " + word + "<br>" +
    "Index of " + letter + " is: " + index  
)
}
findIndex();

// Task 4
function findLastIndex(){
    var word = "Hello World";
    var letter = "l";
    var index = word.lastIndexOf(letter);
    alert("Last Index of " + letter + " is " + index);
    document.write(
        "String: " + word + "<br>" +
        "Index of " + letter + " is: " + index  
    )
}
findLastIndex();

// Task 5
function findcharAt(){
    var word = "Pakistani";
    var character = word.charAt(3);
    alert("Character at index 3 is : " + character);
    document.write(
        "String: " + word + "<br>" +
        "Character at index 3 is: " + character
    )
}
findcharAt();

// Task 6
var user1 = "Ramsha";
var user2 = "Raheem";
var fullname = user1 + " " + user2
alert(fullname);

// Task 7
var city = "Hyderabad";
var replacement = city.replace("Hydera" , "Islama");
alert(replacement);
document.write("City: " + city + "<br>" +
    "After replacement: " + replacement 
)

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
alert(replace);
document.write(
    "Original message is: " + message + "<br>" +
    "New message is: " + replace
)

// Task 9
var str = "472";
var num = Number(str);
alert(num);
document.write("Value " + str + "<br>" + "Type: " + typeof str + "<br>" +
    "Value " + num + "<br>" + "Type: " + typeof num 
) 

// Task 10 
var user = prompt("Enter sommething");
var upperCase = user.toUpperCase();
alert(upperCase);
document.write(
    "User input: " + user + "<br>" +
    "Upper Case: " + upperCase
)

// Task 11
var user = prompt("Enter sommething");
var titleCase = user.totitlecase();
alert(titleCase);
document.write(
    "User input: " + user + "<br>" +
    "Title Case: " + titleCase
)

// Task 12
var num = 35.36;
var NumStr = num.toString();
var result = NumStr.replace("." , "");
alert(result);

// Task 13
function validUsername(){
    var userName = prompt("Enter Password")
    var specialSymbol = ["@", ".",",","!"]
    for(var i=0; i<specialSymbol.length; i++){
        if(userName.indexOf(specialSymbol[i] !== -1)){
            alert("Please enter a valid password")
        }
        break;
    }
}
validUsername();

// Task 16
let university = "University of Karachi";
let arrUniversity = university.split(" ");
alert(arrUniversity);
document.write("<ul>")
document.write("<li>" + arrUniversity + "</li>")
document.write("</ul>")

// Task 17
var word = "Pakistan";
var alphabet = word.charAt(7);
alert(alphabet);
document.write("User input: " + word + "<br>" +
    "Last character of input is: " + alphabet
)


document.write("<h1>Nested loop</h1>");

// Task 1
for(var i=0; i<5; i++){
    for(var j=0; j<5; j++){
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>");

// Task 2
for(var i=1; i<=6; i++){
    for(var j=1; j<=i; j++){
        document.write("*")
    }
    document.write("<br>");
}
document.write("<br>");

// Task 3
for(var i=6; i>=1; i--){
    for(var j=1; j<=i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>")

// Task 4
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        document.write(j)
    }
    document.write("<br>")
}
document.write("<br>")

// Task 5
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        document.write(i)
    }
    document.write("<br>")
}
document.write("<br>")

// Task 6
for(var i=1; i<=5; i++){
    for(var j=1; j<=5; j++){
        document.write(i +"x"+ j + "=" + i*j + "<br>")
    }
   document.write("<br>")
}

// Task 7
document.write("<h1>Time</h1>")
for(var i=1; i<=12; i++){
    for(var j=1; j<=12; j++){
        document.write(i + ":" + j + "<br>")
    }
    document.write("<br>")
}

// Task 8
for(var i=1; i<=rows; i++){
    for(var space=1; space<=(rows-1); space++){
        for(var j=1; j<=i; j++){
            document.write("*");
        }
    }
    document.write("<br>")
}
let num1 = 60
let ausgabe1 = ""

// Aufgabe 1

if(num1 < 20){
    ausgabe1 = "mini"
}
else if(20<=num1 && num1<=50){
    ausgabe1 = "medium"
}
else if(num1 > 50){
    ausgabe1 = "Large"
}

console.log("Num1: ",num1,"->", ausgabe1)

// Aufgabe 2
let num2 = 7
let ausgabe2 = ""

if(num2 <= 7){
    ausgabe2 = "mini"
}
else if(7<num2 && num2<=90){
    ausgabe2 = "medium"
}
else if(num2 > 90){
    ausgabe2 = "Large"
}

console.log("Num2: ",num2," -> ", ausgabe2)
// 1.
let r1 = Math.floor(Math.random()*100)
let r2 = Math.floor(Math.random()*100)

console.log(r1,r2)

// 2.
if(r1 < r2 && r1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

// 3.
if(r1 < 30 || r2 < 30){
    console.log("Eine der beiden ist kleiner als 30")
}

// 4.
if(r1 < 50 && r2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}
let s = "A A C T";
let A = 0;
let C = 0;
let G = 0;
let T = 0;

let characters = s.split(" ");

for (let i = 0; i < characters.length; i++) {
    if (characters[i] == "A") 
    {
        A += 1;
    } 
    
    else if (characters[i] == "C") 
    {
        C += 1;
    } 
    
    else if (characters[i] == "G") 
    {
        G += 1;
    } 
    
    else if (characters[i] == "T") 
    {
        T += 1;
    }
}

console.log(A); 
console.log(C); 
console.log(G); 
console.log(T);

let input = "11010010"
let bitfolge = input.split("")
let ergebnis = "";

for(let i = 0; i < input.length; i++)
{
    if(bitfolge[i] == "0")
    {
        ergebnis += '1'
    }

    else
    {
        ergebnis += '0'
    }
}

console.log(ergebnis)
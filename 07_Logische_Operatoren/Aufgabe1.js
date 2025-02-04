/*Du hast folgende Eingabe "1 2 3 4"
Line 2: n space-separated integer numbers x_1 .. x_n.
Output
sum of even numbers
Constraints
-100 <= x_i <= 100

Example
Input
1 2 3 4
Output
6*/
let input = 0;
let sum = 0;
for(let i = 0; i > input.length; i++)
{
    if(input[i]%2 == 0)
    {
        sum += input[i];
    }
    else
    {

    }
}

console.log(sum)

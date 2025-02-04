function add(a,b){return a+b}
function subtract(a,b){return a-b}
function mulitply(a,b){return a*b}
function supercalculation(a,b){return (a+b)/2*a}
function printEasterDate(year){

    N = year - 1900

    A = N%19

    B = (7 * A + 1) / 19

    M = (11 * A + 4 - B)%29

    Q = N / 4

    W = (N + Q + 31 - M)%7

    P = 25 - M - W

    if(p>0)
    {
       return parseInt(P)+". April"
    }
    else
    {
        return parseInt(-1*P)+". März"
    }
}
console.log(printEasterDate(2024))
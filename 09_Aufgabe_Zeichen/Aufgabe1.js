let output = 0;

for(let i = 0; i <= 222; i++)
{
    if(i%5 == 0)
    {
        output += "Foo"
    }
    else if(i%7 == 0)
    {
        output += "Bar"
    }
    else if(i%5 && i%7 == 0)
    {
        output += "FooBar"
    }
    else
    {
        output += i;
    }

    console.log(output)
}
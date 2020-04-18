var average; 
var n1 = prompt("Enter num 1");
var n2 = prompt("Enter num 2");
var n3 = prompt("Enter num 3");
var n4 = prompt("Enter num 4");

function AvgPrice(n1,n2,n3,n4)
{
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    n4 = Number(n4);

    average = ((n1 + n2 + n3 + n4) / 4);
    return average;
}




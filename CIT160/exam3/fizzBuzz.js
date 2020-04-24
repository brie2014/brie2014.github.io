function doIt () {
    let number = [30];
    document.getElementById("number").innerHTML = number.toString();
    document.getElementById("output").innerHTML = fizzBuzz(number);
    }

function fizzBuzz (integer) {
    let output = "";
for (i=1; i <=integer; i++)
    {
        if (i%3==0 && i%5==0) {
            output += "FizzBuzz" + "<br>";
            }
        else if (i%3==0) {
        output += "Fizz" + "<br>";
        }
        else if (i%5==0) {
            output += "Buzz" + "<br>";
            }
    }
return output;
}
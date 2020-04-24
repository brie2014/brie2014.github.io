/*
Input
Get two integer numbers from text fields
num1
num2
Processing
Find sum of integers
If both numbers greater than 15 or sum greater than 15, output "True"
Else, output "False"

Output
Display output: True or False
*/

function fifteen () {
//Input
let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);
//Processing
let sum = num1 + num2; 
let output; 
if ((num1 > 15 && num2 > 15) || sum > 15) {
    output = "True"
}
else {
    output = "False"
}

//Output
document.getElementById("output").innerHTML= output
}
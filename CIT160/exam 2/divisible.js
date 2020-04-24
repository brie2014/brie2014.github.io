/*
Problem: find and output all integers between start and end integers inclusive, that are evenly divisible by divisor. 
Input
get start, end, and divisor

Processing
run loop through numbers 
use modulus operation to find integers that have remainder of zero
store all integers that have remainder of zero in output

Output
display integers between start and end (inclusive) that are evenly divisible by divisor
*/
function divisible() {
//Input
let start = parseInt(document.getElementById("start").value);
let end = parseInt(document.getElementById("end").value);
let divisor = parseInt(document.getElementById("divisor").value); 

//Processing
let output="";
for (let i = start; i <= end; i++) {
   let remainder = i % divisor;
    if (remainder == 0) {
        output+= i + " "; 
    }
}
//Output
document.getElementById("list").innerHTML= output
}
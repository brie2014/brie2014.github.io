// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input:
get values from array
Processing:
find length of array
add values in first position 0 and last position of array
Output:
return sum of first and last values
*/
//Test array and on click function
function doIt () {
let numbers = [-1.2, 2.3, 3.4, 4.5, 5.6];
document.getElementById("array").innerHTML = numbers.toString();
document.getElementById("output").innerHTML = addEnds(numbers);
}

//Returns sum of first and last
function addEnds(list) {
  let sum = list[0] + list[list.length-1]; 
	return sum.toFixed(2);
}

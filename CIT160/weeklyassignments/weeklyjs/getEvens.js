// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: 
get values from array
Processing:
decide if number is even
count number of evens (store in loop)
Output: 
return number of even numbers
*/

//Test array and on-click function
function doIt () {
let numbers = [1, 2, 3, 4, 5, 6, 7, 2, 2, 2];
document.getElementById("array").innerHTML = numbers.toString();
document.getElementById("output").innerHTML = countEvens(numbers);
}

//Finds middle of array
function countEvens(list) {
	let evens=0;
	for (i=0; i < list.length; i++) {
	if (list[i] % 2 == 0) {
		evens++; 
		}
	}
	return evens;
}
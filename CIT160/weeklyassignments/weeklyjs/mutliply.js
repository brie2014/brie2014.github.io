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
let list = [1, 2, 3, 4, 5, 6, 7, 2, 2, 2];
let factor = 3; 
document.getElementById("array").innerHTML = list.toString();
document.getElementById("factor").innerHTML = factor;
document.getElementById("output").innerHTML = multiply(list, factor);
}

//Finds middle of array
function multiply(list, multiplier) {
	let products = "";
	for (i=0; i < list.length; i++) {
		let answer = list[i] * multiplier; 
		products+= answer + ", "; 
		}
	return products;
}
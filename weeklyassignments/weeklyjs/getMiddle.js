// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: 
get values from array
Processing:
decide if even or odd
find middle number
Output: 
return middle number
*/

//Test array and on-click function
function doIt () {
let numbers = [-1.2, 2.3, 3.4, 4.5], 5.6;
document.getElementById("array").innerHTML = numbers.toString();
document.getElementById("output").innerHTML = getMiddle(numbers);
}

//Finds middle of array
function getMiddle(list) {
	if (list.length % 2 == 1) {
	let mid = list[list.length >>> 1];
		return mid;}
	else {
		let upper = list[list.length >>> 1];
		let lower = list[(list.length >>> 1)-1]; ;
		let mid = (upper + lower)/2;
		return mid ; 
	}
}
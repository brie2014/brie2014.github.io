// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: 
get integer from user
Processing: 
compute sum of all odd integers between 1 and the user's integer, inclusive; use loop to get it to run through and add all odd integers
Output:display sum of all odd integers between 1 and the user's integer, inclusive
*/

function oddSum() {
	//Input
	let n = parseInt(document.getElementById("number").value); 
	
	//Processing
	let sum = 0;
	for (let i=1; i<=n; i+=2) {
		sum += i
	}
	
	//Output
	document.getElementById("output").innerHTML = "The sum of all odd integers from 1 to your number, inclusive is: ";
	document.getElementById("sumOfOdd").innerHTML = sum;
}
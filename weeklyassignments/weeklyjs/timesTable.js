// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: 
get integer from 1 to 10 from user
Processing: 
compute times table from 1 to 12 of the user's integer, inclusive; use loop to get it to run through and add all odd integers
Output:
display times table of user's integer
*/

function timesTable() {
	//Input
	let n = parseInt(document.getElementById("integer").value); 
	let timestable = ""; 
	//Processing
	for (let i=1; i<=12; i++) { 
		timestable += n + " x " + i + " = " + n*i + "<br>" 
	}
	
	//Output
	document.getElementById("output").innerHTML = timestable; 
}
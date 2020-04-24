// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: get two numbers from different input boxes and label them x and y
Processing: add two numbers together and store in sum
Output: Display sum on document
*/

function addNumbers() {
	//Input
	let x = parseFloat(document.getElementById("number1").value);
	let y = parseFloat(document.getElementById("number2").value);
	//Processing
	let sum = x + y;
	//Output
	document.getElementById("output").innerHTML=sum;
	
}
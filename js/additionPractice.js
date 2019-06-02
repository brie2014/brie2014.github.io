/*Defining Table
Display two random positive integers of max values of 100 along with the addition symbol (+) use math objects 
Math.floor Returns the largest integer less than or equal to a number.
Math.random Returns a pseudo-random number between 0 and 1.
Input: 
get answer that user input
Processing: compute answer to displayed problem
compare to user input
Output: 
If correct, display “Correct! Good job.” 
If not correct, display “Sorry. That is incorrect.” 
*/
let randomNumber1 = Math.floor(Math.random() * 100 + 1);
let randomNumber2 = Math.floor(Math.random() * 100 + 1);

document.getElementById("additionProblem").innerHTML= randomNumber1 + "+" + randomNumber2;

	//Input
function checkSum() {
	let answer = document.getElementById("answer").value;
	let feedback;

	//Processing
		let sum = randomNumber1 + randomNumber2;
		if (answer == sum) {
		 feedback = "Correct! Good job.";
		}
		else if (answer == "") {
			feedback = "Please enter answer."
		}

		else {
		feedback = "Sorry. That is incorrect."
		}

	//Output
		document.getElementById("output").innerHTML= feedback;
	
}
//Code for New Problem button: reload page to generate new problem

function reloadPage() {
	window.location.reload(true);
}

// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;
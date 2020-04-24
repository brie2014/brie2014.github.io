// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: get city, state, and zip code from 3 input text fields
Processing: concantenate inputs together into one line
Output: 
display one line of output of the address in standard U.S. format (city, state zipcode)
*/
function myAddress() {
	//Input
	let street = document.getElementById("yourStreet").value;
	let city = document.getElementById("yourCity").value;
	let state = document.getElementById("yourState").value;
	let zipcode = document.getElementById("yourZipcode").value;
	//Processing
	let address = "You live at: <br/>" + street + "<br/>" + city + ", " + state + " " + zipcode + "."; 
	//Output
	document.getElementById("output").innerHTML = address;
}
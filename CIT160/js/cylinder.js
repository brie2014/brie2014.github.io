// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: get radius (r) of cylinder 
get height (h) of cylinder
Processing: compute volume V=πr^2 * h
Output:display volume in cubic units
*/

function cylinderVolume() {
	//Input
	let r = parseFloat(document.getElementById("radius").value); 
	let h = parseFloat(document.getElementById("height").value); 
	
	//Processing
	let volume = Math.PI * Math.pow(r,2) * h //volume in cubic centimeters
	let liters = volume/1000 //1000 cubic centimeters=1 liter

	//Output
	document.getElementById("output").innerHTML = "The volume of your cylinder is approximately " + liters.toFixed(2) + " liters.";
}
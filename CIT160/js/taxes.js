// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: 
get hours worked (hrs)  
get hourly wage (wage)
Processing: 
compute gross pay (hours times wage)
take out tax by multiplying gross pay by 0.85 aka 85% (100%-15%)
Output:display pay after taxes in dollars
*/

function payAfterTaxes() {
	//Input
	let hrs = parseFloat(document.getElementById("hours").value); 
	let wage = parseFloat(document.getElementById("wage").value); 
	
	//Processing
	let pay = 0.85 * (hrs * wage)

	//Output
	document.getElementById("output").innerHTML = "Your pay after taxes is $" + pay.toFixed(2) + ".";
}
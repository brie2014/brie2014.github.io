// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
first function: function doFV() called from the onclick 
Input: 
Get principal, annual rate, number of years, and number of periods per year from user inputd

Processing:
Call the second function: function computeFutureValue(principal, annualRate, years, periodsPerYear)   
futureValue = a (1 + r)^n
Return futureValue to first function

Output: 
Display value returned by computeFutureValue to the screen for the user to see
*/
	
function doFV() {
	let p = document.getElementById('principal').value; 
	let r = document.getElementById('rate').value; 
	let y = document.getElementById('years').value;
	let periods = document.getElementById('periods').value;
	let futureValue = computeFutureValue(p, r, y, periods); 
	document.getElementById('output').innerHTML = "Anticipated future value: $" + futureValue.toFixed(2);

}

function computeFutureValue (principal, annualRate, years, periodsPerYear) {
let r = annualRate/periodsPerYear;
let n = years*periodsPerYear;
let fV = principal * Math.pow((1 + r),n)
return fV; 
	
}
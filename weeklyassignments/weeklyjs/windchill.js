// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Use two functions: function doInputOutput() AND function windChill(tempF, speed)
first function- function (doInputOutput) called from the onclick 
Input: 
Get a temperature from the first text field
Get a wind speed from the second text field

Processing:
Call the second function- function windChill(tempF, speed)
			Take a temperature in Fahrenheit as a parameter and take a wind speed in miles per hour as a parameter
			Determine IF we can define the wind chill factor based upon the maximum temperature constraint (50°F) and minimum wind speed constraint (3 mph). If the input parameters do not meet those constraints, then the function should return "N/A" which means "Not Applicable".
			Calculate the wind chill factor as a temperature in Fahrenheit
			Return the wind chill factor in Fahrenheit
Store the value returned by windChill in a variable

Output: 
Display value returned by windChill to the screen for the user to see
*/
	
function doInputOutput() {
	let t = document.getElementById('temp').value; 
	let s = document.getElementById('speed').value; 
	let windchill = windChill(t, s); 
	document.getElementById('output').innerHTML = windchill;

}

function windChill(tempF, speed) {
	if (tempF < 50 && speed > 3) {
		// f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
		let wc = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed, 0.16) + 0.4275*tempF*Math.pow(speed,0.16)
		return wc.toFixed(2) + "&deg;" + "F"; 
	}
	else {
	  return "N/A";
	}
}
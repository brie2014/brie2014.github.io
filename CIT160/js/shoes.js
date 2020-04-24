// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: get weather from user (hot, rain, snow, cool)
Processing: run through if statements to get correct footwear 
hot=sandals
rain=galoshes
snow=boots
cool=shoes
(Could be done with if else statements or switch)
Output: Display correct footwear for user
*/

function getShoe() {
	//Input
	let weather = document.getElementById("weather").value;
	let footwear;

	//Processing
		if (weather == "hot") {
		 footwear = "sandals";
	}
	else if (weather == "rain") {
		 footwear = "galoshes";
	}
	else if (weather == "snow") {
		 footwear = "boots";
	}
	else if (weather == "cool") {
		 footwear = "shoes";
	}
	else {
		footwear = "error"
	}
 
	//Output
	if (footwear == "error") {
		document.getElementById("output").innerHTML= "Please select your weather.";
	}
	else {
	document.getElementById("output").innerHTML= "Put on some " + footwear + ".";
	}
	
}
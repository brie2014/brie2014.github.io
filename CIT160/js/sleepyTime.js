/*Defining Table
Input: 
get day and month from computer clock
Processing: check day and month against compound conditions (weekday, weekend, holiday)
Holidays-Jan 1: New Years, Jul 4: Independence Day, Dec 25 Christmas

Output: 
If if Saturday, Sunday, or holiday, display "Sleep in."
If weekday and not a holiday, display "Get Up!"  
*/
setInterval(sleepyTime, 100)

	//Input: declare variables, get dates from computer
function sleepyTime() {
let d = new Date(); // new Date object
let dayOfWeek = d.getDay; //days of week Sunday=0, Monday=1, etc.
let decision;
let monthDay = (today.getMonth()+1) + "/" +  today.getDate();
let holiday = (monthDay=="1/1" || monthDay=="7/4" || monthDay=="12/25");
let day = new Array(7); //assigning each day a name
  day[0] = "Sunday"
  day[1] = "Monday"
  day[2] = "Tuesday"
  day[3] = "Wednesday"
  day[4] = "Thursday"
  day[5] = "Friday"
  day[6] = "Saturday"
	
	//Processing: decide what to display
	if ((dayOfWeek ==0 || dayOfWeek ==6) || holiday) {
		decision = "Sleep in."
			}
	else {
		decision = "Get up!"
	}
	let specialMessage;
	if (holiday) {
		specialMessage = "Happy Holiday!"
	}
	else {
		specialMessage= "Have a great day!"
	}
	
	//Output: show day of week, special message, decision, and date
	document.getElementById("dofw").innerHTML = day[d.getDay()] + ". " + specialMessage;
	document.getElementById('decision').innerHTML = decision;
	document.getElementById('todayIs').innerHTML = "Today is " + monthDay + "." ;

}


// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: 
data from table
Processing: 
process each data row to find the oldest running temple
store name of temple and year; compare to next year to see if it is older (less); if less, replace the year and name of temple; loop through all temples
Output:
display name of oldest running temple
*/
	//Input
	let table = document.getElementById('templeData')
	let compareYear = parseInt(table.rows[1].cells[1].innerHTML);
	let rows = document.getElementById('templeData').rows.length;
	//Processing
	for (let i=1; i<=rows; i++) {  
		let templeYear = parseInt(table.rows[i].cells[1].innerHTML); 
		if (templeYear <= compareYear) {
			compareYear = parseInt(table.rows[i].cells[1].innerHTML);
			let templeName = table.rows[i].cells[0].innerHTML; 
			//Output
    document.getElementById("output").innerHTML = "Oldest Operating Temple: " + "<br>" + templeName; }
}
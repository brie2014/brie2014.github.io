// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: get first name from input box
Processing: 
concantenate the output-scripture with the first name replacing any proper names and store in scripture
Output: 
display scripture with name in it on document
*/
function inTheScriptures() {
	//Input
	let firstName = document.getElementById("yourName").value;
	//Processing
	let scripture = "1 Nephi 3:7 And it came to pass that I, " + firstName +", said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them."
	//Output
	document.getElementById("output").innerHTML = scripture;
}
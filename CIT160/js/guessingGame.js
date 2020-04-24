// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table 
Input: 
get guess from user
Processing: 
decide if guess is too high, too low, or correct
count number of guesses using loop
Output:
send message about guess (too high, too low, correct)
display number of guesses
*/

function func4() {
    var d = "Please enter an integer between 1 and 100.";
    var b = Math.floor(Math.random() * 100 + 1);
    var c;
    let i = 0
  do {
        c = parseInt(prompt(d));
      if (c < b) {
      d = "Too low. Please enter another integer.";
            }
      else if (c > b) {
d = "Too high. Please enter another integer.";
}
		 i++;
      } while (c != b);
  d = c + " is correct!";
   //Output
		document.getElementById("output").innerHTML = d;
		document.getElementById("guesses").innerHTML = "It took you " + i + " guesses.";
}
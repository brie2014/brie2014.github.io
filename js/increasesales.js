// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
Input: 
get subtotal from user
Processing: 
if subtotal is greater than $50 and if today is Tuesday or Wednesday, subtract 10% from subtotal for new subtotal
add 6% to subtotal for sales tax to get total
Output: 
Display total 
*/

	//Input

   function finalTotal() {
		let subtotal = parseFloat(document.getElementById("sale").value);
        let total;
		 		let discount;
        let dayOfWeek = new Date().getDay();
			document.getElementById("todayIs").innerHTML= dayOfWeek; 
     //Processing
        if ((subtotal > 50) && (dayOfWeek == 2 || dayOfWeek == 3)) {
             total = subtotal * 0.9 * 1.06;
						discount = subtotal * 0.1
					document.getElementById("todayIs").innerHTML= "Congratulations! You get 10% off of your subtotal for spending more than $50 on a Tuesday or Wednesday!";
				}
        else {
					total = subtotal * 1.06;
					discount = 0
					document.getElementById("todayIs").innerHTML= "No discount today. Spend more than $50 on Tuesdays or Wednesdays to receive 10% off your entire subtotal.";
				}
             
			//Output
        document.getElementById("output").innerHTML= "Total (with tax): $" + total.toFixed(2);		
		 document.getElementById("newSubtotal").innerHTML= "New Subtotal: $" + (subtotal - discount).toFixed(2)
		 document.getElementById("savings").innerHTML= "Savings: $" + discount.toFixed(2);
			
		}
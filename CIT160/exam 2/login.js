/*
Input
get username, password, and integer

Processing
Use && to check to see if: 
Username field is not blank 
AND the password text field equals "shaZam" 
AND if the third textbox's integer value is between 1 and 7 inclusive. 

Output
Display welcome message "Welcome aboard USERNAME" if all three criteria are true
-must display it # of times indicated by integer input (use loop)
-username must be in all caps .toUpperCase()
Display "Access Denied" if any criteria not true

*/

function login () {
//Input
let un = document.getElementById("username").value;
let pw = document.getElementById("password").value;
let num = document.getElementById("count").value; 
let message="";
//Processing
if (un!="" && pw=="shaZam" && (num<=7 && num >=1)) {
    for (i=1; i <= num; i++) {
    message +=" Welcome aboard " + un.toUpperCase() + "<br>";
    }
}
else {
    message = "Access Denied";
}

//Output
document.getElementById("message").innerHTML=message
}
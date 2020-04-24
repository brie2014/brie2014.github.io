/*
Input: 
get first name (firstName)
get last name (lastName)

Processing: 

Output:
display concatenation of last name, first name

*/

function fullName() {
//Input
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

//Output
    document.getElementById("nameRecord").innerHTML = lastName + ", " + firstName;
}
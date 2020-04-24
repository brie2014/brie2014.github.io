
function doIt () {
    let numbers = [6, 7, 9, 10, 1, 2];
    document.getElementById("numbers").innerHTML = numbers.toString();
    document.getElementById("output").innerHTML = getNextToLast(numbers);
    }

function getNextToLast (list) {
let ntl=list[list.length-2];
return ntl; 
}
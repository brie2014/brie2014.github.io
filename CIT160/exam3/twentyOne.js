function doIt () {
    let numbers = [6, 1, 2, 10, 2];
    document.getElementById("numbers").innerHTML = numbers.toString();
    document.getElementById("output").innerHTML = twentyOne(numbers);
    }

function twentyOne (hand) {
    let sum = 0;
    for (let i=0; i <= hand.length-1; i++) {
        sum += hand[i]; 
    }

    if (sum > 21) {
        return "bust";
    }
    else {
        return sum; 
    }
}
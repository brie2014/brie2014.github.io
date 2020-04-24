/*
Input: get width (w) and length (l)
must be able to use real numbers-use Parsefloat
Processing: compute number of acres w*l/43560
Output: display result in number of acres with one decimal point
*/

function getAcres() {
    //Input
    let w = parseFloat(document.getElementById("width").value);
    let l = parseFloat(document.getElementById("length").value);

    //Processing
    let acres = (w * l) / 43560;

    //Output
    document.getElementById("output").innerHTML = acres.toFixed(1) + " acres";
}
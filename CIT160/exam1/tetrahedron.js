/*
Input: get side length (a)
Processing: compute volume of tetrahedron v = Math.pow(a,3) / (6 * Math.SQRT2)
Output: display volume (no units necessary)
*/

function computeVolume() {
    //Input
    let a = parseFloat(document.getElementById("length").value);

    //Processing
    let v = Math.pow(a,3) / (6 * Math.SQRT2);

    //Output
    document.getElementById("volume").innerHTML = v;
}
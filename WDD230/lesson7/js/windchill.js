//Caluculate Windchill using elements from a page
let t = document.getElementById('currentTemp').textContent;
let s = document.getElementById('windspeed').textContent;
document.getElementById('windchill').textContent = windChill(t, s);


function windChill(tempF, speed) {
	if (tempF <= 50 && speed >= 3) {
        let wc = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed, 0.16) + 0.4275*tempF*Math.pow(speed,0.16)
        return wc.toFixed(1); 
    }
	else {
	  return "N/A";
		}
}

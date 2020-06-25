//Menu button toggle
const hambutton=document.querySelector('.ham');
const mainnav=document.querySelector('.responsive');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});


//Date in this format Wednesday, 24 July 2020
let today = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = weekdays[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById('currentdate').innerHTML=date;

//API Font Load
WebFont.load({
  google: {
    families: [
       'Bitter',
       'Abril Fatface',
       'Merriweather'
    ]
  }
});

//Range Value on Storm Report Form
function adjustSeverity(severity) {
  document.getElementById("severityValue").innerHTML = severity;
}

//Weather Summary API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

//Weather Forecast API
const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let day = 0;

        fiveDayForecast.forEach(forecast => {
          let d = new Date(forecast.dt_txt);
          document.getElementById('forecast' + [day+1]).textContent = forecast.main.temp;
          document.getElementById('dayofweek' + [day+1]).textContent = weekdays[d.getDay()];

          const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
          const desc = forecast.weather[0].description; 
          document.getElementById('icon' + [day+1]).setAttribute('src', imagesrc);
          document.getElementById('icon' + [day+1]).setAttribute('alt', desc);

          day++;
        })
        
       
    });


//Pancake Banner 
if (today.getDay()==5) { 
    document.querySelector(".pancake-banner").style.display = 'block';
}
else {
    document.querySelector(".pancake-banner").style.display = 'none';
}



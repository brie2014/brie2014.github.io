//Weather Summary API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        document.getElementById('currentTemp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('currentIcon').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png');
        document.getElementById('currentIcon').setAttribute('alt', jsObject.weather[0].description);
        
    });

//Weather Forecast API
const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let day = 0;

        fiveDayForecast.forEach(forecast => {
          let d = new Date(forecast.dt_txt);
          document.getElementById('forecast' + [day+1]).textContent = forecast.main.temp.toFixed(0);
          document.getElementById('dayofweek' + [day+1]).textContent = weekdays[d.getDay()];

          const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
          const desc = forecast.weather[0].description; 
          document.getElementById('icon' + [day+1]).setAttribute('src', imagesrc);
          document.getElementById('icon' + [day+1]).setAttribute('alt', desc);

          day++;
        })
        
       
    });

    //Rental Vehicles Button
    document.getElementById("rental-btn").onclick = function () {location.href = "rentals.html";
    ;}
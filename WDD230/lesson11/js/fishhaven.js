//Weather Summary API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('currentTemp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('highTemp').textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

//Weather Forecast API
const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=248a434ae5aa7fbe3c86086c0b05cb60&units=imperial';

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
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

//Creating event List from JSON file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const cities = jsonObject['towns'];
        const sodaSprings = cities.filter(city => (
            city.name == "Fish Haven"));
        const listofevents = sodaSprings[0].events;
        listofevents.forEach(event => {
            let eventList = document.createElement('p');
            eventList.textContent = event;
            document.querySelector('div.events').appendChild(eventList);
        })
    });    
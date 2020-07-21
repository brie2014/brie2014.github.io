//Fetching data and creating elements for each rental vehicle

const requestURL = 'https://brie2014.github.io/WDD230/scoots/data/vehicles.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    
    const vehicles = jsonObject['vehicles'];
    for (let i = 0; i < vehicles.length; i++ ) {
      let section = document.createElement('section');

      let vehicle = document.createElement('h4');
      vehicle.textContent = vehicles[i].type;

      let picture = document.createElement('img');
      picture.setAttribute('src', vehicles[i].image);
      picture.setAttribute('alt', vehicles[i].type); 


      section.appendChild(vehicle);
      section.appendChild(picture);

      document.querySelector('div.rental-pics').appendChild(section);
    }
  });
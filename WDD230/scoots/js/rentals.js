//Fetching and creating elements for prophet page

const requestURL = 'https://brie2014.github.io/WDD230/scoots/data/vehicles.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    
    const vehicles = jsonObject['vehicles'];
    for (let i = 0; i < vehicles.length; i++ ) {
      let row = document.createElement('tr');
      let type = document.createElement('td'); 
      let rh = document.createElement('td'); 
      let rf = document.createElement('td'); 
      let wh = document.createElement('td'); 
      let wf = document.createElement('td'); 

      type.textContent = vehicles[i].type;
      rh.textContent = vehicles[i].res-half;
      rf.textContent = vehicles[i].res-full;
      wh.textContent = vehicles[i].walk-half;
      wf.textContent = vehicles[i].walk-full;

      row.appendChild(type);
      row.appendChild(rh);
      row.appendChild(rf);
      row.appendChild(wh);
      row.appendChild(wf);
      document.querySelector('table.rentals-table').appendChild(row);

    }
  });

  /*      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order); */
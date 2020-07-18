//Fetching and creating elements for prophet page

const requestURL = 'https://brie2014.github.io/WDD230/scoots/data/vehicles.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    
    const vehicles = jsonObject['vehicles'];
    for (let i = 0; i < vehicles.length; i++ ) {
      let card = document.createElement('div');

      let vehicle = document.createElement('h3');
      vehicle.textContent = vehicles[i].type;

      let picture = document.createElement('img');
      image.setAttribute('src', prophets[i].image);
      image.setAttribute('alt', prophets[i].type); 


      let table = document.createElement('table');

      let peoplerow = document.createElement('tr');
      let peoplelabel = document.createElement('td'); 
      let people = document.createElement('td'); 

      let rhrow = document.createElement('tr');
      let rhlabel = document.createElement('td'); 
      let rh = document.createElement('td'); 

      let rfrow = document.createElement('tr');
      let rflabel = document.createElement('td'); 
      let rf = document.createElement('td');

      let whrow = document.createElement('tr');
      let whlabel = document.createElement('td'); 
      let wh = document.createElement('td');

      let wfrow = document.createElement('tr');
      let wflabel = document.createElement('td');
      let wf = document.createElement('td'); 

      peoplelabel.textContent = 'Max People';
      rhlabel.textContent = 'Half-Day (3hrs) with Reservation';
      rflabel.textContent = 'Full-Day with Reservation';
      whlabel.textContent = 'Half-Day (3hrs) Walk-in';
      wflabel.textContent = 'Full-Day Walk-in';
      vehicle.textContent = vehicles[i].type;
      people.textContent = vehicles[i].persons;
      rh.textContent = vehicles[i].reshalf;
      rf.textContent = vehicles[i].resfull;
      wh.textContent = vehicles[i].walkhalf;
      wf.textContent = vehicles[i].walkfull;

      peoplerow.appendChild(peoplelabel);
      peoplerow.appendChild(people);
      rhrow.appendChild(rhlabel);
      rhrow.appendChild(rh);
      rfrow.appendChild(rflabel);
      rfrow.appendChild(rf);
      whrow.appendChild(whlabel);
      whrow.appendChild(wh);
      wfrow.appendChild(wflabel);
      wfrow.appendChild(wf);

      table.appendChild(peoplerow);
      table.appendChild(rhrow);
      table.appendChild(rfrow);
      table.appendChild(whrow);
      table.appendChild(wfrow);

      card.appendChild(vehicle);
      card.appendChild(picture);
      card.appendChild(table);
      card.setAttribute('class', 'container');

      document.querySelector('div.rental-cards').appendChild(card);
      


    }
  });

  /*      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order); 
      
      let row1 = document.createElement('tr');
      let peoplelabel = document.createElement('td'); 
      let rhlabel = document.createElement('td'); 
      let rflabel = document.createElement('td'); 
      let whlabel = document.createElement('td'); 
      let wflabel = document.createElement('td'); 

      peoplelabel.textContent = 'Max People';
      rhlabel.textContent = 'Half-Day (3hrs) with Reservation';
      rflabel.textContent = 'Full-Day with Reservation';
      whlabel.textContent = 'Half-Day (3hrs) Walk-in';
      wflabel.textContent = 'Full-Day Walk-in';


      let row2 = document.createElement('tr'); 
      let people = document.createElement('td'); 
      let rh = document.createElement('td'); 
      let rf = document.createElement('td'); 
      let wh = document.createElement('td'); 
      let wf = document.createElement('td'); 

      people.textContent = vehicles[i].persons;
      rh.textContent = vehicles[i].reshalf;
      rf.textContent = vehicles[i].resfull;
      wh.textContent = vehicles[i].walkhalf;
      wf.textContent = vehicles[i].walkfull;

      row2.appendChild(vehicle);
      row2.appendChild(people);
      row2.appendChild(rh);
      row2.appendChild(rf);
      row2.appendChild(wh);
      row2.appendChild(wf);

      document.querySelector('table.rentals-table').appendChild(table);



                  <table class="rentals-table">
                    <tr id="vehicle">
                        <td></td>
                    </tr>
                    <tr id="people">
                        <td>Max People</td>
                    </tr>
                    <tr id="rh">
                        <td>Half-Day (3hrs)</td>
                    </tr>
                    <tr id="rf">
                        <td>Full-Day</td>
                    </tr>
                    <tr id="wh">
                        <td>Half-Day (3hrs)</td>
                    </tr>
                    <tr id="wf">
                        <td>Full-Day</td>
                    </tr>
            </table>





                  
      */


      /* horizontal table
      let row1 = document.createElement('tr');
      let peoplelabel = document.createElement('td'); 
      let rhlabel = document.createElement('td'); 
      let rflabel = document.createElement('td'); 
      let whlabel = document.createElement('td'); 
      let wflabel = document.createElement('td'); 

      peoplelabel.textContent = 'Max People';
      rhlabel.textContent = 'Reserved Half-Day';
      rflabel.textContent = 'Reserved Full-Day';
      whlabel.textContent = 'Walk-in Half-Day';
      wflabel.textContent = 'Walk-in Full-Day';

      row1.appendChild(peoplelabel);
      row1.appendChild(rhlabel);
      row1.appendChild(rflabel);
      row1.appendChild(whlabel);
      row1.appendChild(wflabel);


      let row2 = document.createElement('tr'); 
      let people = document.createElement('td'); 
      let rh = document.createElement('td'); 
      let rf = document.createElement('td'); 
      let wh = document.createElement('td'); 
      let wf = document.createElement('td'); 

      people.textContent = vehicles[i].persons;
      rh.textContent = vehicles[i].reshalf;
      rf.textContent = vehicles[i].resfull;
      wh.textContent = vehicles[i].walkhalf;
      wf.textContent = vehicles[i].walkfull;

      row2.appendChild(people);
      row2.appendChild(rh);
      row2.appendChild(rf);
      row2.appendChild(wh);
      row2.appendChild(wf);

      table.appendChild(row1);
      table.appendChild(row2);
      card.appendChild(vehicle);
      card.appendChild(table);
      card.setAttribute('class', 'container');

      document.querySelector('div.rental-cards').appendChild(card);
      
      */

      /*Vertical Table
      let peoplerow = document.createElement('tr');
      let peoplelabel = document.createElement('td'); 
      let people = document.createElement('td'); 

      let rhrow = document.createElement('tr');
      let rhlabel = document.createElement('td'); 
      let rh = document.createElement('td'); 

      let rfrow = document.createElement('tr');
      let rflabel = document.createElement('td'); 
      let rf = document.createElement('td');

      let whrow = document.createElement('tr');
      let whlabel = document.createElement('td'); 
      let wh = document.createElement('td');

      let wfrow = document.createElement('tr');
      let wflabel = document.createElement('td');
      let wf = document.createElement('td'); 

      peoplelabel.textContent = 'Max People';
      rhlabel.textContent = 'Half-Day (3hrs) with Reservation';
      rflabel.textContent = 'Full-Day with Reservation';
      whlabel.textContent = 'Half-Day (3hrs) Walk-in';
      wflabel.textContent = 'Full-Day Walk-in';
      vehicle.textContent = vehicles[i].type;
      people.textContent = vehicles[i].persons;
      rh.textContent = vehicles[i].reshalf;
      rf.textContent = vehicles[i].resfull;
      wh.textContent = vehicles[i].walkhalf;
      wf.textContent = vehicles[i].walkfull;

      peoplerow.appendChild(peoplelabel);
      peoplerow.appendChild(people);
      rhrow.appendChild(rhlabel);
      rhrow.appendChild(rh);
      rfrow.appendChild(rflabel);
      rfrow.appendChild(rf);
      whrow.appendChild(whlabel);
      whrow.appendChild(wh);
      wfrow.appendChild(wflabel);
      wfrow.appendChild(wf);

      table.appendChild(peoplerow);
      table.appendChild(rhrow);
      table.appendChild(rfrow);
      table.appendChild(whrow);
      table.appendChild(wfrow);

      card.appendChild(vehicle);
      card.appendChild(table);
      card.setAttribute('class', 'container');

      document.querySelector('div.rental-cards').appendChild(card);
      */
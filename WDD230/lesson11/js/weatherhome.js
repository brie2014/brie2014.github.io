//Fetching and creating elements for home page
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const seidtowns = towns.filter(city => (
            city.name == "Preston" || city.name == "Fish Haven" || city.name == "Soda Springs"));

        seidtowns.forEach(town => {
            let townCard = document.createElement('section');
                townCard.classList.add("townCard")
            let townInfo = document.createElement('div');
                townInfo.classList.add("town-info")
                let townName = document.createElement('h2');
                let motto = document.createElement('p');
                    motto.classList.add('town-motto');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let avgRain = document.createElement('p');
            let townPic = document.createElement('div');
                townPic.classList.add("town-pic")
                let image = document.createElement('img');

            townName.textContent = town.name;
            motto.textContent = '"' + town.motto + '"'; 
            year.textContent = 'Founded in: ' + town.yearFounded
            pop.textContent = 'Current Population: ' + town.currentPopulation;
            avgRain.textContent = 'Average Rainfall: ' + town.averageRainfall +' in.';
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.name);

            townInfo.appendChild(townName);
            townInfo.appendChild(motto);
            townInfo.appendChild(year);
            townInfo.appendChild(pop);
            townInfo.appendChild(avgRain);
            townCard.appendChild(townInfo);
            townPic.appendChild(image);
            townCard.appendChild(townPic);
            document.querySelector('div.card-container').appendChild(townCard);
        });
    });
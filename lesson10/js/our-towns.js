const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                let card = document.createElement('div');
                let information = document.createElement('div');
                let townname = document.createElement('h3');
                let motto = document.createElement('div');
                let yearfounded = document.createElement('p');
                let population = document.createElement('p');
                let annualrain = document.createElement('p');
                let img = document.createElement('img');

                townname.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                motto.setAttribute("class", "motto");
                yearfounded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                annualrain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                img.setAttribute("src", "./images/" + towns[i].photo);
                img.setAttribute("alt", "Photo of " + towns[i].name);
                information.setAttribute("class", "information");


                card.appendChild(information);
                information.appendChild(townname);
                information.appendChild(motto);
                information.appendChild(yearfounded);
                information.appendChild(population);
                information.appendChild(annualrain);
                card.appendChild(img);

                document.querySelector('section.ourtowns').appendChild(card);
            }
        }
    });
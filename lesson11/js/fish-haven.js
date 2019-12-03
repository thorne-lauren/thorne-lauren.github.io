const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsWeatherObject) => {
        console.log(jsWeatherObject);

        document.getElementById('currentTemp').textContent = jsWeatherObject.main.temp;
        document.getElementById('currentDescription').textContent = jsWeatherObject.weather[0].description;
        document.getElementById('high').textContent = jsWeatherObject.main.temp_max;
        document.getElementById('humidity').textContent = jsWeatherObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsWeatherObject.wind.speed;

        var t = parseInt(document.getElementById("currentTemp").textContent);

        var s = parseInt(document.getElementById("windSpeed").textContent);

        var w = Math.pow(s, 0.16);

        var f = 35.74 + (0.6215 * t) - (35.75 * w) + (0.4275 * t * w);

        var chill = f.toFixed(0);

        document.getElementById("output").innerHTML = chill;

    });

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsForecastObject) => {
        console.log(jsForecastObject);

        let dayNum = 1;
        for (i=0; i<jsForecastObject.list.length; i++){
            let date = jsForecastObject.list[i].dt_txt;

            if (date.includes('18:00:00')) {
                let day = new Date(date);
                let dayOption = {weekday: 'short'};
                let weekday = day.toLocaleDateString('en-US', dayOption);
                let displayDay = 'day' + dayNum + 'fc';
                document.getElementById(displayDay).textContent = weekday;
                
                const imagesrc = 'https://openweathermap.org/img/w/' + jsForecastObject.list[i].weather[0].icon + '.png';
                const desc = jsForecastObject.list[i].weather[0].description;
                
                
                let imgDay = 'day' + dayNum + 'img';
                document.getElementById(imgDay).setAttribute('src', imagesrc);
                document.getElementById(imgDay).setAttribute('alt', desc);

                let tempDay = 'day' + dayNum + 'temp';
                document.getElementById(tempDay).textContent = jsForecastObject.list[i].main.temp;

                dayNum += 1;
           } 
           
        }
       
    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        const fish = towns[1];

        let ul = document.createElement('ul');

        for (let i=0; i < fish.events.length; i++){
            let li = document.createElement('li');
            li.textContent = fish.events[i];
            ul.appendChild(li);
        }      

        document.querySelector('#events').appendChild(ul);


    });
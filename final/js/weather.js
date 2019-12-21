const seattleWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5786882&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(seattleWeatherURL)
    .then((response) => response.json())
    .then((jsWeatherObject) => {
        console.log(jsWeatherObject);

        document.getElementById('seattleWeather').textContent = jsWeatherObject.weather[0].description + " " + jsWeatherObject.main.temp;
    });

const laWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(laWeatherURL)
    .then((response) => response.json())
    .then((jsWeatherObject) => {
        console.log(jsWeatherObject);

        document.getElementById('laWeather').textContent = jsWeatherObject.weather[0].description + " " + jsWeatherObject.main.temp;
    });

const atlantaWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=4671576&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(atlantaWeatherURL)
    .then((response) => response.json())
    .then((jsWeatherObject) => {
        console.log(jsWeatherObject);

        document.getElementById('atlantaWeather').textContent = jsWeatherObject.weather[0].description + " " + jsWeatherObject.main.temp;
    });

    
const bostonWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=4317656&units=imperial&APPID=8af58a06e9106579cf73a2cbb2b72752';

fetch(bostonWeatherURL)
    .then((response) => response.json())
    .then((jsWeatherObject) => {
        console.log(jsWeatherObject);

        document.getElementById('bostonWeather').textContent = jsWeatherObject.weather[0].description + " " + jsWeatherObject.main.temp;
    });

    


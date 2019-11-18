var t = parseInt(document.getElementById("currentTemp").innerText);

var s = parseInt(document.getElementById("windSpeed").innerText);

var w = Math.pow(s, 0.16);

var f = 35.74 + (0.6215 * t) - (35.75 * w) + (0.4275 * t * w);

var chill = f.toFixed(0);

document.getElementById("output").innerHTML = chill;

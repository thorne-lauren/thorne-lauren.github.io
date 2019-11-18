var today = new Date();
var day = today.getDay();
var b = document.getElementById("banner");

if (day != 5) {
    b.style.display = 'none';
}

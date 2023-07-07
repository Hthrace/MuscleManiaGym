var map = L.map('map').setView([35.99196243584344, -78.90399663866292], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([35.9919518102072, -78.90408856734395]).addTo(map);


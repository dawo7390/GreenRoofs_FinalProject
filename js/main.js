
var mymap = L.map('mapID').setView([40.69, -73.97], 10);

//add tile layer...replace project id and accessToken with your own
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{40.69}/{-73.97}/{y}.png?access_token={pk.eyJ1IjoiZGF3bzczOTAiLCJhIjoiY2w3cXIweXJjMDdpNzQxbzB5Zjdhajc4YiJ9.qPWM7J5wt_NNdCy-NxRuJw}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapID'
}).addTo(mymap);



//LEAFLET MAP

//Create BaseMap
let map = L.map('map').setView([40.69, -73.97], 10);
var NYCmap = L.tileLayer('https://api.mapbox.com/styles/v1/dawo7390/cl9zygbct000114ofk5m565pk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF3bzczOTAiLCJhIjoiY2w3cXIweXJjMDdpNzQxbzB5Zjdhajc4YiJ9.qPWM7J5wt_NNdCy-NxRuJw', {
  maxZoom: 18,
  attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
});

//Highlight Boroughs
NYCmap.addTo(map)
$.getJSON("data/nyc.geojson", function(response){ //create a Leaflet GeoJSON layer and add it to the map
    L.geoJson(response).addTo(map);
});

//Create GreenRoof Popup markers
$.get('data/GreenRoofData2016_20180917.csv', function(csvString) {
    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;  // Use PapaParse to convert string to array of objects
    for (var i in data) {
      var row = data[i];
      var marker = L.marker([row.ycoord, row.xcoord], {
        opacity: 1,
        icon: L.icon({
            iconUrl: 'img/images/marker-icon.png',
            iconSize: [25, 38]})
      }).bindPopup(row.address);
      marker.addTo(map);
    }

  });
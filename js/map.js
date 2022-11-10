// //LEAFLET MAP
"use strict";
var mapFunction = {}; //declares fucntion holder

//declaring function 1
mapFunction.addPopups = function (feature, layer) {
  if (feature.properties && feature.properties.address) {
    layer.bindPopup("<b>Address:</b>" + feature.properties.address);
  }
}

//declaring function 2
mapFunction.pointToCircle =function (feature, latlng) {
  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "green",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);
  return circleMarker;
}
window.onload=function(){
//execute
    let map = L.map('map').setView([40.69, -73.97], 10);
    var NYCmap = L.tileLayer('https://api.mapbox.com/styles/v1/dawo7390/cl9zygbct000114ofk5m565pk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF3bzczOTAiLCJhIjoiY2w3cXIweXJjMDdpNzQxbzB5Zjdhajc4YiJ9.qPWM7J5wt_NNdCy-NxRuJw', {
    maxZoom: 18,
    attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
    }).addTo(map);
    $.getJSON("data/nyc.geojson", function(response){ //create a Leaflet GeoJSON layer and add it to the map
        L.geoJson(response).addTo(map);
    });
    // bikeThefts is the variable name we difined in Bike_Thefts_2011.js file. 
    var greenLayerGroup = L.geoJSON(mygeojson, {
    onEachFeature: mapFunction.addPopups,
    pointToLayer: mapFunction.pointToCircle
    });

    var clusters = L.markerClusterGroup();
    clusters.addLayer(greenLayerGroup);
    map.addLayer(clusters);
    //mapObject.addLayer(bikesLayerGroup);
    map.fitBounds(greenLayerGroup.getBounds());
}
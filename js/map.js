// //LEAFLET MAP
"use strict";
var mapFunction = {}; //declares fucntion holder
//MAKE POPUPS AND ADD TEXT
mapFunction.addPopups = function (feature, layer) {
  if (feature.properties && feature.properties.address) {
    layer.bindPopup("<b>Address: </b>" + feature.properties.address+ 
                    "<br><b>Cost Estimate: </b> $"+feature.properties.COST_ESTIMATE+"</br>"+ //TODO figure out why toFixed(2) does not work to round
                    "<b>Income Bracket: </b> "+ feature.properties.MEDHINC_CAT+ 
                    "<br><b>Percentage Green Roof: </b>"+ ((((feature.properties.gr_area/feature.properties.bldg_area)* 100) / 100).toFixed(2)*100)+"%"+"</br)")
  }
};
//MAKES MARKERS SMALL GREEN CIRCLES
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
};
window.onload=function(){
    //CREATE BASEMAP
    let map = L.map('map').setView([40.69, -73.97], 10);
    var NYCmap = L.tileLayer('https://api.mapbox.com/styles/v1/dawo7390/cl9zygbct000114ofk5m565pk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF3bzczOTAiLCJhIjoiY2w3cXIweXJjMDdpNzQxbzB5Zjdhajc4YiJ9.qPWM7J5wt_NNdCy-NxRuJw', {
        maxZoom: 18,
        attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
        }).addTo(map);
    //CREATE BUROUGH HIGHLIGHTS
    $.getJSON("data/nyc.geojson", function(response){ 
        L.geoJson(response).addTo(map);
    });
    //READ DATA FOR MARKERS
    var greenLayerGroup = L.geoJSON(mygeojson, {
        onEachFeature: mapFunction.addPopups,
        pointToLayer: mapFunction.pointToCircle
    });
    //CREATE CLUSTERING EFFECT
    var clusters = L.markerClusterGroup();
    clusters.addLayer(greenLayerGroup);
    map.addLayer(clusters);
    map.fitBounds(greenLayerGroup.getBounds());
};
//insert code here!
var map;
var dataStats = {};
var minValue;

//step 1 create map
function createMap(){

    //create the map
    map = L.map('map', {
        center: [0, 0],
        zoom: 2
    });

    //add OSM base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //call getData function
    getData(map);
};

function pointToLayer(feature, latlng, attributes){
    //Determine which attribute to visualize with proportional symbols
    var attribute = attributes[0];
    console.log(attribute)
    //create marker options
    var options = {
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
 
    //For each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);

    //Give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);

    //create circle marker layer
    var layer = L.circleMarker(latlng, options);

    //build popup content string
    var popupContent = createPopupContent(feature.properties, attribute);
    //bind the popup to the circle marker    



    layer.bindPopup(popupContent, {  offset: new L.Point(0,-options.radius)    });
    //return the circle marker to the L.geoJson pointToLayer option
    return layer;
};

function getData(map){
    L.geoJSON(FeatureCollection).addTo(map);
}



$(document).ready(createMap);
//insert code here!
var map;
var dataStats = {};
var minValue;

//step 1 create map
function createMap(){

    var map = L.map('map').setView([38.57, -94.71], 4);

    L.tileLayer('http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Imagery © <a href="http://cloudmade.com">CloudMade</a>'}).addTo(map);

    var featureStyle = {
        "color": "#ff7800",
        "weight": 5, 
        "opacity": 0.2
    };

    var geojsonLayer = new L.GeoJSON.AJAX("NYCcounties.geojson");       
    geojsonLayer.addTo(map);

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

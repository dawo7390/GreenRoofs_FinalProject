
let map = L.map('mapID').setView([40.69, -73.97], 10);

var NYCmap = L.tileLayer('https://api.mapbox.com/styles/v1/dawo7390/cl9zygbct000114ofk5m565pk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF3bzczOTAiLCJhIjoiY2w3cXIweXJjMDdpNzQxbzB5Zjdhajc4YiJ9.qPWM7J5wt_NNdCy-NxRuJw', {
  maxZoom: 18,
  attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
});

NYCmap.addTo(map)
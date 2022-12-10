'use strict';

// Define our 3 elements as contant variables
const i = document.getElementById("helpIcon");
const w = document.getElementById("helpWindow");
const wClose = document.getElementById("helpWindowClose");

// Create bool to store if learn more is open, and set it to false
let isOpen = false;

// Create an event listener to check if the user has clicked on learn more
i.addEventListener("click", function () {
    // If the prompt was open, close it by changing the icon, 
    //      moving the promp below the background, and setting isOpen as false
    if (isOpen === true) {
        i.innerHTML = "Learn More"
        w.style.zIndex = (-1);
        isOpen = false;
    // If the prompt was closed, open it by changing the icon, 
    //      moving the promp above the rest of the site, and setting isOpen as true
    } else {
        i.innerHTML = "Exit"
        w.style.zIndex = (9999);
        isOpen = true;
    };
});

// Add text to fill the help prompt here!
// Title
w.innerHTML = "<font size='+3'><b>Exploring Green Roof Development in New York City</b>"
w.innerHTML += "<br><b>Ben Woods, Caleb Shmitz, and Cameron McKeeby.</b> Final Project for <a href= 'https://www.colorado.edu/geography/morteza-karimzadeh' target='_blank'>Dr. Karimzadeh's</a>&nbsp;<a href='https://www.colorado.edu/geography/' target='_blank'>GEOG</a>&nbsp;<a href='https://experts.colorado.edu/display/coursename_GEOG-4043' target='_blank'>4043 Advanced Geovisualization</a>"
w.innerHTML += "<br>dawo7390@colorado.edu, casc1806@colorado.edu, camc3014@colorado.edu"
//Why is this Important?
w.innerHTML += "<br><br><font size='+1'><b>Why are Green Roofs Important?</b></font"
w.innerHTML += "<br>Greenroof development is becoming more popular in urban areas around the country and buildings that include green roofs have tangible benefits for the economy, environment, and physical health of individuals. As our population continues to increase, so will our urban areas and infrastructure. By incorporating greenroofs into urban environments, the city will see economic, environmental, and health  benefits. However, it is important to understand the pros and cons of what it means to implement a green roof in a new space. "
w.innerHTML += "<br><font size='-1'><b>    Economy</b></font"
w.innerHTML += "<br>Improve property values<a href='https://www.nrdc.org/sites/default/files/commercial-value-green-infrastructure-report.pdf'target='_blank'><sup>[1]</sup></a>"
w.innerHTML += "<br>Heavily sought after in the housing market."
w.innerHTML += "<br>Improve In New York, green roof tax abatement is implemented, so that each square foot of green roof can get a rebate of $5.23, up to $200,000 per project values<a href='https://www.nyc.gov/site/finance/benefits/landlords-green-roof.page#:~:text=The%20tax%20abatement%20is%20equal,the%20building%20that%20tax%20year.'target='_blank'><sup>[2]</sup></a>"
w.innerHTML += "<br><font size='-1'><b>Environmental</b></font"
w.innerHTML += "<br>Helps mitigate the urban heat island effect<a href='https://www.epa.gov/heatislands/using-green-roofs-reduce-heat-islands'target='_blank'><sup>[3]</sup></a>"
w.innerHTML += "<br>Helps minimize impervious surfaces in cities to improve stormwater management and flooding resilience.<a href='https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-green-buildings/resource-library/integrative-strategies/green-roofs'target='_blank'><sup>[4]</sup></a>"
w.innerHTML += "<br> Creates Habitats for animals and plants, increasing biodiversity<a href='https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-green-buildings/resource-library/integrative-strategies/green-roofs'target='_blank'><sup>[4]</sup></a>"
w.innerHTML += "<br><font size='-1'><b>Human Health</b></font"
w.innerHTML += "<br>Green Roofs sequester carbon dioxide, and help improve air quality<a href='https://www.epa.gov/sites/default/files/2018-09/documents/greenroofs_casestudy_kansascity.pdf'target='_blank'><sup>[5]</sup></a>"
w.innerHTML += "<br>Access to green spaces has been shown to be beneficial to physical and mental health<a href='https://cnr.ncsu.edu/news/2022/04/parks-green-spaces-improve-health'target='_blank'><sup>[6]</sup></a>"
// Bar Chart Instructions
w.innerHTML += "<br><br><font size='+1'><b>Bar Chart</b></font"
w.innerHTML += "<br>The top graph is a <b>Bar Chart."
w.innerHTML += "<br> - Select the different variable above the graph to represent the different variables per borough"
w.innerHTML += "<br> - The axis will automatically adjust to the scale of the variable"
//Matrix Instructions
w.innerHTML += "<br><br><font size='+1'><b>Matrix Chart</b></font"
w.innerHTML += "<br>The bottom graph is a <b>Matrix Chart."
w.innerHTML += "<br> - The darker the color of the cell the higher the relative value"
w.innerHTML += "<br> - Hover over the cells to show the unit value of each attribute in relation to the borough you are analyzing"

// Map Instructions
w.innerHTML += "<br><br><font size='+1'><b>Map</b></font"
w.innerHTML += "<br> - To zoom in and out, use the control panel in the upper left corner. Double clicking on the map will also zoom in to that area."
w.innerHTML += "<br> - To zoom in on specific clusters, click on the clusters"
w.innerHTML += "<br> - Click on the green circles to open a pop-up to reveal information on each green roof such as  address, cost estimate, roof-height and income-bracket."
w.innerHTML += "<br> - You can reset the map to the default position and zoom level by clicking the 'Reset Map' button in the upper right corner.  "
w.innerHTML += "<br> - The map will highlight the entire burough when it is hovered over for users not familiar with the New York City area."

// Attribution: link to video
w.innerHTML += "<br><br> For more explanation about the app, check out this <a href= 'https://youtu.be/3S8f-cv-6DM' target='_blank'>video</a>."
w.innerHTML += "<br><a href= 'https://d3-graph-gallery.com/graph/barplot_button_data_csv.html' target='_blank'>Barchart</a> and <a href= 'https://d3-graph-gallery.com/graph/heatmap_style.html' target='_blank'>Heatmap</a> adapted from D3." 
w.innerHTML += "&nbsp;Custom map created using <a href= 'https://www.mapbox.com/' target='_blank'>Mapbox</a> using a <a href= 'https://leafletjs.com/' target='_blank'>Leaflet</a> map." 
w.innerHTML += "<br> Data Source: <a href= 'https://zenodo.org/record/1469674#.Y5GBHezMI-R' target='_blank'> Tregalia et. al. 2018</a>." 
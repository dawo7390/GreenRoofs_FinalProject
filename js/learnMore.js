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
w.innerHTML += "<br><b>Ben Woods, Caleb Shmitz, and Cameron McKeeby.</b> Final Project for <a href= 'https://www.colorado.edu/geography/morteza-karimzadeh' target='_blank'>Dr. Karimzadeh's</a> <a href='https://experts.colorado.edu/display/coursename_GEOG-4043' target='_blank'>GEOG 4043 Advanced Geovisualization</a>"

//Why is this Important?
w.innerHTML += "<br><br><font size='+1'><b>Why are Green Roofs Important?</b></font"
w.innerHTML += "<br>Greenroof development is becoming more popular in urban areas around the country and buildings that include green roofs have tangible benefits for the economy, environment, and physical health of individuals. As our population continues to increase, so will our urban areas and infrastructure. By incorporating green roof into urban environments, the city will see economic and environmental benefits. However, it is important to understand the pros and cons of what it means to implement a green roof in a new space."
w.innerHTML += "<br><font size='-1'><b>    Economy</b></font"
w.innerHTML += "<br>Improve property values"
w.innerHTML += "<br>Heavily sought after in the housing market."
w.innerHTML += "<br>Improve In New York, green roof tax abatement is implemented, so that each square foot of green roof can get a rebate of $5.23, up to $200,000 per project values"
w.innerHTML += "<br><font size='-1'><b>    Environmental</b></font"
w.innerHTML += "<br>Kilograms of CO2 per sq ft/ per year"
w.innerHTML += "<br>Help minimize impervious surfaces in cities, which helps mitigate the urban heat island effect and improve stormwater management and flooding resilience."
// Bar Chart Instructions
w.innerHTML += "<br><br><font size='+1'><b>Bar Chart</b></font"
w.innerHTML += "<br>The top graph is a <b>Bar Chart."
w.innerHTML += "<br> - Use the buttons to change the desired variable"
w.innerHTML += "<br> - The axis will automatically adjust to the scale of the variable"
//Matrix Instructions
w.innerHTML += "<br><br><font size='+1'><b>Heat Map</b></font"
w.innerHTML += "<br>The bottom graph is a <b>Heat Map."
w.innerHTML += "<br> - The darker the color of the cell the higher the relative value"
w.innerHTML += "<br> - Move your mouse over any of the cells to see its value"

// Map Instructions
w.innerHTML += "<br><br><font size='+1'><b>Map</b></font"
w.innerHTML += "<br> - To zoom in and out, use the control panel in the upper left corner."
w.innerHTML += "<br> - To zoom in on specific clusters, click on the clusters"
w.innerHTML += "<br> - To see information about specific green roofs, click on the green circles. "
w.innerHTML += "<br> - You can rest teh map to the default position and zoom level by clicking the 'Reset Map' button in the upper right corner.  "


// Attribution: link to video
w.innerHTML += "<br><br> For more explanation about the app, check out this <a href= 'https://youtu.be/3S8f-cv-6DM' target='_blank'>video</a>."
w.innerHTML += "<br><a href= 'https://d3-graph-gallery.com/graph/barplot_button_data_csv.html' target='_blank'>Barchart</a> and <a href= 'https://d3-graph-gallery.com/graph/heatmap_style.html' target='_blank'>Heatmap</a> adapted from D3." 
w.innerHTML += "<br> Data Source: <a href= 'https://zenodo.org/record/1469674#.Y5GBHezMI-R' target='_blank'> Tregalia et. al. 2018</a>." 
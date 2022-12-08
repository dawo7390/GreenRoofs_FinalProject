'use strict';

// Define our 3 elements as contant variables
const helpIcon = document.getElementById("helpIcon");
const helpWindow = document.getElementById("helpWindow");
const helpWindowClose = document.getElementById("helpWindowClose");

// Create bool to store if the help prompt is open, and set it to false
let isOpen = false;

// Create an event listener to check if the user has clicked on the help prompt icon
helpIcon.addEventListener("click", function () {
    // If the prompt was open, close it by changing the icon, 
    //      moving the promp below the background, and setting isOpen as false
    if (isOpen === true) {
        helpIcon.innerHTML = "Learn More"
        helpWindow.style.zIndex = (-1);
        isOpen = false;
    // If the prompt was closed, open it by changing the icon, 
    //      moving the promp above the rest of the site, and setting isOpen as true
    } else {
        helpIcon.innerHTML = "Exit"
        helpWindow.style.zIndex = (9999);
        isOpen = true;
    };
});

// // On mouse over, set the icon to reflect that
// helpIcon.addEventListener("mouseover", function () {
//     helpIcon.style.backgroundColor = "rgb(161,217,155);";
//     helpIcon.style.color = "black";
//     helpIcon.style.border = "medium solid rgba(0, 0, 0, 1)"

// });

// // On mouse out, set the icon back to normal
// helpIcon.addEventListener("mouseout", function () {
//     helpIcon.style.backgroundColor = "rgb(161,217,155);";
//     helpIcon.style.color = "white";
//     helpIcon.style.border = "medium solid rgba(255, 255, 255, 0.693)"
// });


// Add text to fill the help prompt here!
// Title
helpWindow.innerHTML = "<font size='+3'><b>Exploring Green Roof Development in New York City</b></font>"

helpWindow.innerHTML += "<br><b>Ben Woods, Caleb Shmitz, and Cameron McKeeby.</b> Final Project for <a href= 'https://www.colorado.edu/geography/morteza-karimzadeh' target='_blank'>Dr. Karimzadeh's</a> <a href='https://experts.colorado.edu/display/coursename_GEOG-4043' target='_blank'>GEOG 4043 Advanced Geovisualization</a>"
helpWindow.innerHTML += "<br>Special thank you to <a href= 'https://www.colorado.edu/geography/thomas-herrmann' target='_blank'>Thomas Herrmann</a> who helped us develop this app."

//Why is this Important?
helpWindow.innerHTML += "<br><br><font size='+1'><b>Why are Green Roofs Important?</b></font"
helpWindow.innerHTML += "<br>Greenroof development is becoming more popular in urban areas around the country and buildings that include green roofs have tangible benefits for the economy, environment, and physical health of individuals. As our population continues to increase, so will our urban areas and infrastructure. By incorporating green roof into urban environments, the city will see economic and environmental benefits. However, it is important to understand the pros and cons of what it means to implement a green roof in a new space."

helpWindow.innerHTML += "<br><font size='-1'><b>    Economy</b></font"
helpWindow.innerHTML += "<br>Improve property values"
helpWindow.innerHTML += "<br>Heavily sought after in the housing market."
helpWindow.innerHTML += "<br>Improve In New York, green roof tax abatement is implemented, so that each square foot of green roof can get a rebate of $5.23, up to $200,000 per project values"

helpWindow.innerHTML += "<br><font size='-1'><b>    Environmental</b></font"
helpWindow.innerHTML += "<br>Kilograms of CO2 per sq ft/ per year"
helpWindow.innerHTML += "<br>Help minimize impervious surfaces in cities, which helps mitigate the urban heat island effect and improve stormwater management and flooding resilience."

// Bar Chart Instructions
helpWindow.innerHTML += "<br><br><font size='+1'><b>Bar Chart</b></font"
helpWindow.innerHTML += "<br>The top graph is a <b>Bar Chart."
helpWindow.innerHTML += "<br> - Use the buttons to change the desired variable"
helpWindow.innerHTML += "<br> - The axis will automatically adjust to the scale of the variable"
//Matrix Instructions
helpWindow.innerHTML += "<br><br><font size='+1'><b>Heat Map</b></font"
helpWindow.innerHTML += "<br>The bottom graph is a <b>Heat Map."
helpWindow.innerHTML += "<br> The darker the color of the cell the higher the relative value"
helpWindow.innerHTML += "<br> - Move your mouse over any of the cells to see its value"

// Map Instructions
helpWindow.innerHTML += "<br><br><font size='+1'><b>Map</b></font"
helpWindow.innerHTML += "<br> - To zoom in and out, use the control panel in the upper left corner."
helpWindow.innerHTML += "<br> - To zoom in on specific clusters, click on the clusters"
helpWindow.innerHTML += "<br> - To see information about specific green roofs, click on the green circles. "
helpWindow.innerHTML += "<br> - You can rest teh map to the default position and zoom level by clicking the 'Reset Map' button in the upper right corner.  "


// Further help, link the video
helpWindow.innerHTML += "<br><br><a href= 'https://d3-graph-gallery.com/graph/barplot_button_data_csv.html' target='_blank'>Barchart</a> and <a href= 'https://d3-graph-gallery.com/graph/heatmap_style.html' target='_blank'>Heatmap</a> adapted from D3. For more explanation about the app, check out this <a href= 'https://www.colorado.edu/geography/morteza-karimzadeh' target='_blank'>video</a>."
// Data Used and further resources, link the data used (geology, topography, soils)
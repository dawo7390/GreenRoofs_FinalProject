// // //D3 MATRIX
// Assign a 2d array of correlating values.
// This each subarray will render as a row

/*

const data = [
  [78, 4, 0, 59, 6, 6, 11, 117047, 769, 2675, 3344, 29.4],
  [82, 34, 20, 85, 11, 6, 34, 1413030, 929, 3230, 4037, 21.5],
  [79, 99, 287, 158, 249, 4, 54, 117692, 774, 2690, 3363, 15.2],
  [3, 1, 0, 0, 3, 0, 1, 172065, 1130.7, 3932.8, 4916, 18],
  [41, 3, 6, 18, 6, 2, 24, 176520, 1160, 4035, 5043, 39.6]
];

let colorData = [ //calculating by precentage of total
    [258,28,0,184,16,333,89,59,161,162,161,238],
    [290,241,63,265,29,333,274,708,195,195,195,173],
    [279,702,917,493,664,222,435,59,162,162,162,123],
    [11,7,0,0,8,0,8,86,237,237,237,146],
    [145,21,4,56,16,111,193,88,244,244,244,320]
];


function colorDataConstruct(){
    let colorData_ = [];
    for (let i= 0; i < data.length; i++) {   
        let total = 0;
        for(let t=0; t<data[i].length; t++){
            total = total+data[i][t]; 
        }
        for(let f=0; f<data[i].length; f++){
            colorData_[i][f] = data[i][f]/total; 
        }
    }
}

//[   283,  141,  313,   320,  375,   18,  124, 1996354,  4762,  16563,  20703, 123.7 ]


// Add our labels as an array of strings
const rowLabelsData = ["Bronx", "Brooklyn", "Manhattan", "Staten Island ", "Queens"];
const columnLabelsData = [
  "Low Income",
  "Medium Income",
  "High Income",
  "Residential",
  "Commercial",
  "Public",
  "Industrial",
  "Average Cost",
  "Average Savings $",
  "Average Benefit $",
  "Average Area sq/ft",
  "Average Building Cover %",
];

function onMouseOverMatrix(e)
{

};
function onMouseOutMatrix(e){

};


function Matrix(options) {
  // Set some base properties.
  // Some come from an options object
  // pass when `Matrix` is called.
  const margin = { top: 0, right: 0, bottom: 150, left: 810 },
    width = 550,
    height = 230,
    container = options.container,
    startColor = options.start_color,
    endColor = options.end_color;

  // Find our max and min values
  const maxValue = d3.max(colorData, (layer) => {
    return d3.max(layer, (d) => {
      return d;
    });
  });
  const minValue = d3.min(colorData, (layer) => {
    return d3.min(layer, (d) => {
      return d;
    });
  });

  const numrows = data.length;
  // assume all subarrays have same length
  const numcols = data[0].length;

  // Create the SVG container
  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Add a background to the SVG
  const background = svg
    .append("rect")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("width", width)
    .attr("height", height);

  // Build some scales for us to use
  const x = d3.scale.ordinal().domain(d3.range(numcols)).rangeBands([20, width+10]);

  const y = d3.scale
    .ordinal()
    .domain(d3.range(numrows))
    .rangeBands([0, height+5]);

  // This scale in particular will
  // scale our colors from the start
  // color to the end color.
  const colorMap = d3.scale
    .linear()
    .domain([minValue, maxValue])
    .range([startColor, endColor]);

  // Generate rows and columns and add
  // color fills.
  const row = svg
    .selectAll(".row")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "row")
    .attr("transform", (d, i) => {
      return "translate(0," + y(i) + ")";
    });

  const cell = row
    .selectAll(".cell")
    .data((d) => {
      return d;
    })
    .enter()
    .append("g")
    .attr("class", "cell")
    .attr("transform", (d, i) => {
      return "translate(" + x(i) + ", 24)";
    })
    .attr("mouseover", onMouseOverMatrix)
    .attr("mouseout", onMouseOutMatrix);

  cell
    .append("circle")
    .attr("r", 13)
    // .attr("text", data) //this does not work

  row
    .selectAll(".cell")
    .data((d, i) => {
      return data[i];
    })
    .style("fill", colorMap);

  const labels = svg.append("g").attr("class", "labels");

  const columnLabels = labels
    .selectAll(".column-label")
    .data(columnLabelsData)
    .enter()
    .append("g")
    .attr("class", "column-label")
    .attr("transform", (d, i) => {
      return "translate(" + x(i) + "," + height + ")";
    });

  columnLabels
    .append("line")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .attr("x1", x.rangeBand() / 2)
    .attr("x2", x.rangeBand() / 2)
    .attr("y1", 0)
    .attr("y2", 5);

  columnLabels
    .append("text")
    .attr("x", -5)
    .attr("y", y.rangeBand() / 2 - 29)
    .attr("dy", ".82em")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-45)")
    .text((d, i) => {
      return d;
    });

  const rowLabels = labels
    .selectAll(".row-label")
    .data(rowLabelsData)
    .enter()
    .append("g")
    .attr("class", "row-label")
    .style("font-weight", "5")
    .attr("transform", (d, i) => {
      return "translate(" + 0 + "," + y(i) + ")";
    });

  rowLabels
    .append("line")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .attr("x1", 0)
    .attr("x2", -5)
    .attr("y1", y.rangeBand() / 2)
    .attr("y2", y.rangeBand() / 2);

  rowLabels
    .append("text")
    .attr("x", -8)
    .attr("y", y.rangeBand() / 2)
    .attr("dy", ".32em")
    .attr("text-anchor", "end")
    .text((d, i) => {
      return d;
    });
}

*/

//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW


// set the dimensions and margins of the graph
var marginM = {topM: 0, rightM: 0, bottomM: 30, leftM: 875},
  widthM = 1400 - marginM.leftM - marginM.rightM,
  heightM = 300 - marginM.topM - marginM.bottomM;

// append the svg object to the body of the page
var svgMatrix = d3.select("#matrix")
.append("svg")
  .attr("width", widthM + marginM.leftM + marginM.rightM)
  .attr("height", heightM + marginM.topM + marginM.bottomM)
.append("g")
  .attr("transform",
        "translate(" + marginM.leftM + "," + marginM.topM + ")");

// Labels of row and columns
var myGroups = ["Bronx", "Brooklyn", "Manhattan", "Staten Island ", "Queens"]
var myVars = ["Low Income", "Medium Income", "High Income", "Residential", "Commercial","Public", "Industrial", "Average Cost", "Average Savings $","Average Benefit $", "Average Area sq/ft", "Average Building Cover %",];

// Build X scales and axis:
var xM = d3.scaleBand()
  .range([ 0, widthM ])
  .domain(myGroups)
  .padding(0.01);
svgMatrix.append("g")
  .attr("transform", "translate(0," + heightM + ")")
  .call(d3.axisBottom(xM))

// Build X scales and axis:
var yM = d3.scaleBand()
  .range([ heightM, 0 ])
  .domain(myVars)
  .padding(0.01);
svgMatrix.append("g")
  .call(d3.axisLeft(yM));

// Build color scale
var myColorM = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,1000])

//Read the data
d3.csv("data/GreenRoofMatrixData.csv", function(data) {

  // create a tooltip
  var tooltip = d3.select("#matrix")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip.style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip
      .html("The exact value of<br>this cell is: " + d.value)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    tooltip.style("opacity", 0)
  }

  // add the squares
  svgMatrix.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return xM(d.group) })
      .attr("y", function(d) { return yM(d.variable) })
      .attr("width", xM.bandwidth() )
      .attr("height", yM.bandwidth() )
      .style("fill", function(d) { return myColorM(d.value)} )
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})
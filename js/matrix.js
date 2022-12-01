// // //D3 MATRIX
"use strict"
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

// set the dimensions and margins of the graph
const marginM = {topM: 0, rightM: 0, bottomM: 30, leftM: 875},
  widthM = 1300 - marginM.leftM - marginM.rightM,
  heightM = 300 - marginM.topM - marginM.bottomM;

// append the svg object to the body of the page
const svgMatrix = d3.select("#matrix")
.append("svg")
  .attr("width", widthM + marginM.leftM + marginM.rightM)
  .attr("height", heightM + marginM.topM + marginM.bottomM)
.append("g")
  .attr("transform",
        "translate(" + marginM.leftM + "," + marginM.topM + ")");

// Labels of row and columns
const myGroups = ["Bronx", "Brooklyn", "Manhattan", "Staten Island ", "Queens"]
const myVars = ["Low Income", "Medium Income", "High Income", "Residential", "Commercial","Public", "Industrial", "Average Cost", "Average Savings $","Average Benefit $", "Average Area sq/ft", "Average Building Cover %",];

// Build X scales and axis:
const xM = d3.scaleBand()
  .range([ 0, widthM ])
  .domain(myGroups)
  .padding(0.01);
svgMatrix.append("g")
  .attr("transform", "translate(0," + heightM + ")")
  .call(d3.axisBottom(xM))

// Build X scales and axis:
const yM = d3.scaleBand()
  .range([ heightM, 0 ])
  .domain(myVars)
  .padding(0.01);
svgMatrix.append("g")
  .call(d3.axisLeft(yM));

// Build color scale
const myColorM = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])

//Read the data
d3.csv("data/GreenRoofMatrixData.csv", function(data) {

  // create a tooltip
  const tooltip = d3.select("#matrix")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  const mouseover = function(d) {
    tooltip.style("opacity", 1)
  }
  const mousemove = function(d) {
    tooltip
      .html("The exact value of<br>this cell is: " + d.value)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  const mouseleave = function(d) {
    tooltip.style("opacity", 0)
  }

  // add the squares
  svgMatrix.selectAll()
    .data(data, function(d) {return d.Borough+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return xM(d.Borough) })
      .attr("y", function(d) { return yM(d.variable) })
      .attr("width", xM.bandwidth() )
      .attr("height", yM.bandwidth() )
    //   .attr("width", 90)
    //   .attr("height", 30 )

      .style("fill", function(d) { return myColorM(d.value)} )
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})
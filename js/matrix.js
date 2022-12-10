// // //D3 MATRIX
"use strict"

const marginM = {topM: 50, rightM: 30, bottomM: 20, leftM: 220}, //sets size of svg
  widthM = 750 - marginM.leftM - marginM.rightM,
  heightM = 350 - marginM.topM - marginM.bottomM;

var svgM = d3.select("#matrix") //selects id and positions the graph
.append("svg")
  .attr("width", widthM + marginM.leftM + marginM.rightM)
  .attr("height", heightM + marginM.topM + marginM.bottomM)
.append("g")
  .attr("transform",
        "translate(" + marginM.leftM + "," + marginM.topM + ")");

//Read the data
d3.csv("data/GreenRoofMatrixData.csv", function(data) {

  // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
  var myGroups = d3.map(data, function(d){return d.group;}).keys()
  var myVars = d3.map(data, function(d){return d.variable;}).keys()

  // Build X scales and axis:
  var xM = d3.scaleBand()
    .range([ 0, widthM ])
    .domain(myGroups)
    .padding(0.05);
  svgM.append("g")
    .style("font-size", 15)
    .attr("transform", "translate(0," + heightM + ")")
    .call(d3.axisBottom(xM).tickSize(0))
    .select(".domain").remove()

  // Build Y scales and axis:
  var yM = d3.scaleBand()
    .range([ heightM, 0 ])
    .domain(myVars)
    .padding(0.05);
  svgM.append("g")
    .style("font-size", 15)
    .call(d3.axisLeft(yM).tickSize(0))
    .select(".domain").remove()

  // Build color scale
  var myColor = d3.scaleSequential()
    .interpolator(d3.interpolateGreens)
    .domain([1,300])

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
    tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip
      .html("The exact value of<br>this cell is: " + d.value)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]+20) + "px")
  }
  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }
  // add the squares
  svgM.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return xM(d.group) })
      .attr("y", function(d) { return yM(d.variable) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", xM.bandwidth() )
      .attr("height", yM.bandwidth() )
      .style("fill", function(d) { return myColor(d.colorValue)} )
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})
// Add title to graph
svgM.append("text")
        .attr("x", 0)
        .attr("y", -10)
        .attr("text-anchor", "left")
        .style("font-size", "22px")
        .text("Green Roof Heat Map");
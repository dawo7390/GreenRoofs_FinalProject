// D3 BARCHART 

 // Set graph margins and dimensions

// set the dimensions and margins of the graph
const margin = {top: 150, right: 0, bottom: 30, left: 180},
    width = 750 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#barChart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
const x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
const xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
const y = d3.scaleLinear()
  .range([ height, 0]);
const yAxis = svg.append("g")
  .attr("class", "myYaxis")

function titleMaker(selectedB)
{
    if(selectedB == "greenroofs_per_million") {return "Green Roofs per Million People"}
    else if (selectedB == "average_cost") {return "Average Project Cost (USD)"}
    else if (selectedB == "average_year_construction") {return "Average Building Age (yrs)"}
    else if (selectedB == "avg_cover") {return "Average Cover (sqft)"}
    else if (selectedB == "avg_cover_percentile") {return "Average Roof Cover Percentage"}
    else{ return "error selected b not found"}
};
// A function that create / update the plot for a given variable:
function update(selectedVar) {
  // Parse the Data
    const bctitleremover = svg.selectAll("#barChartTitle").remove()
    
  d3.csv("data/DataBarchart.csv", function(data) {
    // X axis
    x.domain(data.map(function(d) { return d.group; }))
    xAxis.transition().duration(1000).call(d3.axisBottom(x))
    // Add Y axis
    y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));
    // variable u: map data to existing bars
    const u = svg.selectAll("rect")
      .data(data)
    // update bars
    u
      .enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
        .attr("x", function(d) { return x(d.group); })
        .attr("y", function(d) { return y(d[selectedVar]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[selectedVar]); })
        .attr("fill", "#31a354")
 })   
 const barChartTitle = svg.append("text") //add chart title
 .attr("id","barChartTitle")
//  .transition()
//  .duration(1000)
 .attr("x", 30)
 .attr("y", -10)
 .attr("text-anchor", "left")
 .style("font-size", "22px")
 .text(titleMaker(selectedVar))
}

// Initialize plot
update('greenroofs_per_million')

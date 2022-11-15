// D3 BARCHART 

 // Set graph margins and dimensions
var margin = { top: 20, right: 500, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
var y = d3.scaleLinear()
    .range([height, 0]);
var svg = d3.select("barChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")

var bars = chart.selectAll(".barChart")
    .data(mygeojson)
    .enter()
    .append("rect")
    .attr("class", function (d) {
        return "bars " + d.adm1_code;
    })
    .attr("width", chartWidth / mygeojson.length - 1)
    .attr("x", function (d, i) {
        return i * (chartWidth / mygeojson.length);
    })
    .attr("height", 460)
    .attr("y", 0);

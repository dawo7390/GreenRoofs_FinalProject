// //D3 MATRIX
// import {csvParse} from "https://cdn.skypack.dev/d3-dsv@3";
let matrixArray = d3.csv("data/GreenRoofMatrixData.csv", function(matrixData)
{
    console.log(matrixData);
});
   
  
  var tab_data = d3.csvParse(matrixArray);
  var traits = tab_data.columns.filter(x => !(x in {"Z":0, "Key Skill": 0, "Company":0, "Candidate":0}));
  var candidates = tab_data.map(r => r.Candidate);
    
  
  var row_data = [], row, prop;
  for (row of tab_data) {
    for (prop of traits) {
      row_data.push({
        name: row["Candidate"],
        prop: prop,
        value: row[prop]
      });
    }
  }
      
  
  var x_step = (w-pad-left_pad) / (traits.length + 1),
      y_step = ((h-pad*2) - pad) / (candidates.length + 1),
      x_range = traits.map((v,i) => c1w + c2w + c3w + left_pad + ((1+x_step) * i)), 
      y_range = candidates.map((v,i) => r1h + pad + ((1+y_step) * i)), 
      x = d3.scaleOrdinal().domain(traits).range(x_range),
      y = d3.scaleOrdinal().domain(candidates).range(y_range);
  
    var max_r = 5,
          r = d3.scaleLinear()
              .domain([0, max_r])
              .range([0, 16]);
    
    var onMouseOver = function(d) {
      var name = classinate(d["name"]);
      var prop = classinate(d["prop"]);
      svg.selectAll(`text.label.${prop}`)
        .attr("display", "block");
      svg.selectAll(`text.label.${name}`)
        .attr("display", "block");   
    };
  
    var onMouseOut = function(d) {
      var name = classinate(d["name"]);
      var prop = classinate(d["prop"]);    
      svg.selectAll(`text.label.${prop}`)
        .attr("display", "none");
      svg.selectAll(`text.label.${name}`)
        .attr("display", "none");    
    };  
    
    var circle_groups = svg.selectAll("g.cgroup")
          .data(row_data, (d,i) => `cgroup${i}`)
          .enter()
          .append("g")
          .attr("class", "cgroup")
          .attr("opacity", d => opacity(d["prop"]))
          .on("mouseleave", onMouseOut )
          .on("mouseenter", onMouseOver);  
    
    var circles = circle_groups.append("circle")
          .attr("class", d => "circle " + classinate(d["prop"]) + " " + classinate(d["name"]))
          .attr("cx", function (d) { return x(d["prop"]); })
          .attr("cy", function (d) { return y(d["name"]); });
  
    
    circle_groups.append("text")
            .attr("class", d => "label " + classinate(d["prop"]) + " " + classinate(d["name"]))  
            .attr("display", "none")
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("stroke", "black")
            .attr("fill", "black")  
            .attr("stroke-width", "1px")
            .attr("x", function (d) { return x(d["prop"]); })
            .attr("y", function (d) { return y(d["name"]); })  
            .text(function (d) { return d["value"]});
    
    var z_circle_groups = svg.selectAll("g.zcgroup")
          .data(tab_data, (d,i) => `zcgroup${i}`)
          .enter()
          .append("g")
          .attr("class","zcgroup")
          .on("mouseleave", d => {d["name"] = d["Candidate"]; d["prop"] = "Z"; onMouseOut(d)})
          .on("mouseenter", d => {d["name"] = d["Candidate"]; d["prop"] = "Z"; onMouseOver(d)});    
  
    var zx = c1w + (c2w/2);  
    var z_circles = z_circle_groups.append("circle")
          .attr("class", d => "zcircle " + "Z" + " " + classinate(d["Candidate"]))
          .attr("cx", function (d) { return zx; })
          .attr("cy", function (d) { return y(d["Candidate"]); });
  
    z_circle_groups.append("text")
            .attr("class", d => "label " + "Z" + " " + classinate(d["Candidate"]))  
            .attr("display", "none")
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("stroke", "black")
            .attr("fill", "black")  
            .attr("stroke-width", "1px")
            .attr("x", function (d) { return zx; })
            .attr("y", function (d) { return y(d["Candidate"]); })  
            .text(function (d) { return d["Z"]});
  
    var k_circle_groups = svg.selectAll("g.kcgroup")
          .data(tab_data, (d,i) => `kcgroup${i}`)
          .enter()
          .append("g")
          .attr("class","kcgroup")
          .on("mouseleave", d => {d["name"] = d["Candidate"]; d["prop"] = "Key Skill"; onMouseOut(d)})
          .on("mouseenter", d => {d["name"] = d["Candidate"]; d["prop"] = "Key Skill"; onMouseOver(d)});    
  
    var kx = c1w + c2w + (c3w/2);  
    var k_circles = k_circle_groups.append("circle")
          .attr("class", d => "kcircle " + classinate("Key Skill") + " " + classinate(d["Candidate"]))
          .attr("cx", function (d) { return kx; })
          .attr("cy", function (d) { return y(d["Candidate"]); });
  
    k_circle_groups.append("text")
            .attr("class", d => "label " + classinate("Key Skill") + " " + classinate(d["Candidate"]))  
            .attr("display", "none")
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("stroke", "black")
            .attr("fill", "black")  
            .attr("stroke-width", "1px")
            .attr("x", function (d) { return kx; })
            .attr("y", function (d) { return y(d["Candidate"]); })  
            .text(function (d) { return d["Key Skill"]});
      
    
     var trait_labels = svg.selectAll("text.trait")
        .data(traits)
        .enter()
        .append("text")
          .attr("class", "trait")
          .attr("x", d => x(d))
          .attr("y", r1h - 10)
          .attr("font-size", "14px")
          .attr("stroke", "black")
          .attr("fill", "black")  
          .attr("stroke-width", "1px")    
          .attr("opacity", d => opacity(d))
          .attr("transform", d => `rotate(-40 ${x(d)},${r1h-10})`)
          .text(d => d)
      svg.append("text")
          .attr("class", "trait")
          .attr("x", zx)
          .attr("y", r1h - 10)
          .attr("font-size", "14px")
          .attr("stroke", "black")
          .attr("fill", "black")  
          .attr("stroke-width", "1px")    
          .attr("opacity", d => opacity(d))
          .attr("transform", d => `rotate(-40 ${zx},${r1h-10})`)
          .text("Z-Score")
      svg.append("text")
          .attr("class", "trait")
          .attr("x", kx)
          .attr("y", r1h - 10)
          .attr("font-size", "14px")
          .attr("stroke", "black")
          .attr("fill", "black")  
          .attr("stroke-width", "1px")    
          .attr("opacity", d => opacity(d))
          .attr("transform", d => `rotate(-40 ${kx},${r1h-10})`)
          .text("Key SKill")   
    
      var candidate_labels = svg.selectAll("text.candidate")
        .data(candidates)
        .enter()
        .append("text")
          .attr("class", "candidate")
          .attr("x", 10)
          .attr("y", d => y(d))
          .attr("font-size", "14px")
          .attr("stroke", "black")
          .attr("fill", "black")  
          .attr("stroke-width", "1px")    
          .text(d => d)
  
        circles.transition()
          .duration(800)
          .attr("r", function (d) { return r(d["value"]); })
          .attr("fill", d => d3.interpolateRdYlGn(d["value"] / 7));
  
        k_circles.transition()
          .duration(1600)
          .attr("r", function (d) { return r(d["Key Skill"]); })
          .attr("fill", d => d3.interpolateRdYlGn(d["Key Skill"] / 7));
    
        z_circles.transition()
          .duration(2400)
          .attr("r", function (d) { return r(d["Z"]) / 2; })
          .attr("fill", d => d3.interpolateRdBu(d["Z"] / 12));
  
  
        
  




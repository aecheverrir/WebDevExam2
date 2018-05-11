import * as d3 from "d3";

export function linechart(dataRoutes) {

    var myData = [1, 2, 3, 4, 5], 
    margin = {top:10, bottom: 10, left:10, right:10}, 
    width = 300, 
    height= 200, 
    barHeight = 20;

var chart = d3.select("#chart")
    .attr("width", width)
    .attr("height", height)

var sel = chart.selectAll("rect")
    .data(myData);

//UPDATE


//NEW ITEMS
sel.enter()
    .append("rect")
    .style("fill", "darkblue")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", barHeight)
    .attr("width", function (d){
        return d;
    });

//REMOVE
sel.exit()
    .remove();



    
}
    



    
    
    
    

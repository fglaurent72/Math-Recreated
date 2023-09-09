//circle 1  
// Select container element and append an SVG with a height and width
const transitionChartElement = d3
  .select('#transition-easing')
  .append('svg')
  .attr('width',1000)
  .attr('height', 100)

// Create the circle1
const transitionChartSVG = transitionChartElement
  .append("circle")
  .attr("cx",250)
  .attr("cy", 50)
  .attr("r", 45)
  .style("fill", "coral")
  

// Animate the circle1
  transitionChartSVG
  .transition()
  .duration(10000)
  .attr("cx", 500)
  .style("fill", "black")

//transitionChartSVG / 2nd transition
  .transition()
  .duration(10000)
  .style("fill", "white")

  .transition()    //3rd
  .duration(4000)
  .style("fill", "blue")

  .transition()        //4th
  .duration(3000)
  .style("fill", "#20b2aa")

  .transition()      //5th
  .duration(3000)
  .style("fill", "white")



 


//circle 2

const transitionChart2Element = d3
  .select('#transition-easing')
  .append('svg')
  .attr('width',1000)
  .attr('height', 100)
  
// Create the circle2
const transitionChart2SVG = transitionChart2Element

  .append("circle")
  .attr("cx",500)
  .attr("cy",-100)
  .attr("r", 45)
  //.style("fill", "white")
  
// Animate the circle2
 transitionChart2SVG
  .transition()
  .duration(14000)
  .style("fill", "blue")
  .attr("cy",55)
   
  .transition()         // 2nd transition
  .duration(5000)
  .style("fill", "white" )
  
   //transitionChart2SVG / 23rd transition
  .transition()
  .duration(3000)
  .style("fill", "black" )

  .transition()      // 4thtransition
  .duration(5000)
  .style("fill", "#20b2aa" )

  .transition()    //5th transition
  .duration(3000)
  .style("fill", "#fd9068" )
  

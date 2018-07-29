console.log("Bubble chart START");

/*		*/

svg6 = d3.select(".viz6");
/*  
svg6.append("rect")
	.attr("x", 0).attr("y", 0)
	.attr("height", 550)
	.attr("width", 800)
	.attr("fill", "none")//.on("click",clickLegend(bi))
	.attr("stroke","blue").attr("stroke-width",2)
	;
*/

// title
svg6.append("text")     
  .attr("class", "viz1title")
  .attr("transform","translate(" + ((width+180)/2)  + " ," + (20) + ")")
  .style("text-anchor", "middle")
  .text("# of Road Accident Deaths grouped by Mode of Transportation");


  
////////////// ANNOTATIONS START   //#cecece 777777 969696 a5a4a4
viz6annot_x1 = 260;
viz6annot_y1 = 220;
viz6annot_x2 = 210;
viz6annot_y2 = 180;
	svg6.append("line")
	.transition().duration(500).delay(500)
		.attr("class", "anno603")
		.attr("stroke", "#cecece")
		.attr("x1", viz6annot_x1)
		.attr("y1", viz6annot_y1)
		.attr("x2", viz6annot_x2-10) 
		.attr("y2", viz6annot_y2)
		.attr("stroke-width",2)
		;		

	svg6.append("line")
	.transition()
      .duration(500)
	  .delay(500)
		.attr("class", "anno604")
		.attr("stroke", "#cecece")
		.attr("x1", viz6annot_x2-10) 
		.attr("y1", viz6annot_y2)
		.attr("x2", viz6annot_x2 - 40) 
		.attr("y2", viz6annot_y2)
		.attr("stroke-width",2)
		;			

	svg6.append("line")
	.transition()
      .duration(500)
	  .delay(500)
		.attr("class", "anno605")
		.attr("stroke", "#cecece")
		.attr("x1", viz6annot_x2 - 40) 
		.attr("y1", viz6annot_y2 - 17)
		.attr("x2", viz6annot_x2 - 40) 
		.attr("y2", viz6annot_y2 + 17)
		.attr("stroke-width",2)
		;	

  svg6.append("text")
  .transition()
      .duration(500)
	  .attr("class", "anno606")
      .attr("x", viz6annot_x2 - 40 - 3) 
      .attr("y", viz6annot_y2 - 15 + 6)
	  .style("fill", "#3f3b38")
      .style("text-anchor", "end")
      .text("HIGHEST road accident ");		

  svg6.append("text")
  .transition()
      .duration(500)
	  .attr("class", "anno607")
      .attr("x", viz6annot_x2 - 40 - 3) 
      .attr("y", viz6annot_y2 - 15 + 18)
	  .style("fill", "#3f3b38")
      .style("text-anchor", "end")
      .text("deaths were recoded ");	

  svg6.append("text")
  .transition()
      .duration(500)
	  .attr("class", "anno608")
      .attr("x", viz6annot_x2 - 40 - 3) 
      .attr("y", viz6annot_y2 - 15 + 30)
	  .style("fill", "#3f3b38")
      .style("text-anchor", "end")
      .text("with MOTOR CYCLES");	


/* 
HIGHEST road accident 
deaths were recoded 
with MOTOR CYLES
*/	  
//////////


viz60annot_x1 = 430;
viz60annot_y1 = 380;
viz60annot_x2 = viz60annot_x1 + 40;
viz60annot_y2 = viz60annot_y1 + 30;
viz60annoto22 = svg6.append("line").attr("class", "viz60annoto2").attr("stroke", "#cecece")
.attr("x1", viz60annot_x1).attr("y1", viz60annot_y1).attr("stroke-width",2)
.attr("x2", viz60annot_x2).attr("y2", viz60annot_y2);

viz60annot_x1 = viz60annot_x2;
viz60annot_y1 = viz60annot_y2;
viz60annot_x2 = viz60annot_x1 + 40;
viz60annot_y2 = viz60annot_y2;
viz60annoto33 = svg6.append("line").attr("class", "viz60annoto3").attr("stroke", "#cecece")
.attr("x1", viz60annot_x1).attr("y1", viz60annot_y1).attr("stroke-width",2)
.attr("x2", viz60annot_x2).attr("y2", viz60annot_y2);

viz60annot_x1 = viz60annot_x2;
viz60annot_y1 = viz60annot_y2 - 17;
viz60annot_x2 = viz60annot_x2;
viz60annot_y2 = viz60annot_y2 + 17;
viz60annoto44 = svg6.append("line").attr("class", "viz60annoto4").attr("stroke", "#cecece")
.attr("x1", viz60annot_x1).attr("y1", viz60annot_y1).attr("stroke-width",2)
.attr("x2", viz60annot_x2).attr("y2", viz60annot_y2);

viz60annot_x2 = viz60annot_x2 + 3;
viz60annot_y2 = viz60annot_y1 + 2;
viz60annoto55 = svg6.append("text").attr("class", "viz60annoto5")
	.attr("x", viz60annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz60annot_y2 + 6).text("SECOND highest road");

viz60annoto66 = svg6.append("text").attr("class", "viz60annoto6")
	.attr("x", viz60annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz60annot_y2 + 18).text("accident deaths were");
	
viz60annoto77 = svg6.append("text").attr("class", "viz60annoto7")
	.attr("x", viz60annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz60annot_y2 + 30).text("recoded with TRUCKS");
	  
/* 
SECOND highest road 
accident deaths were
recoded with TRUCKS

HIGHEST road accident 
deaths were recoded 
with MOTOR CYLES
*/		  
///////////////////



///////// SUB LABELS START
tmpOffset6Wx1 = 35;
tmpOffset6Hy1 = 140;
subLbl1 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

tmpOffset6Wx1 = 60;
tmpOffset6Hy1 = 160;
subLbl11 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

/////////
tmpOffset6Wx1 = 270;
tmpOffset6Hy1 = 140;
subLbl2 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

tmpOffset6Wx1 = 300;
tmpOffset6Hy1 = 160;
subLbl21 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

/////////
tmpOffset6Wx1 = 540;
tmpOffset6Hy1 = 140;
subLbl3 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

tmpOffset6Wx1 = 570;
tmpOffset6Hy1 = 160;
subLbl31 = svg6.append("text").attr("class", "subLbl1")  //505151
	.style("fill", "#777777").style("stroke-width", "40px")//.style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6Wx1).attr("y",tmpOffset6Hy1).text("")	;

	
///////// SUB LABELS END


var width4 = 600, height4 = 400;
var xCenter = [300, 500];
var colorScale = ['orange', 'lightblue', '#B19CD9'];
var colorsviz3 //= d3.scaleOrdinal(d3.schemeCategory10);
colorsviz3 = [
"#9a70c1", // purple
"#a56659", // brown
"#e377c2", // pink
"#7f7f7f", // grey
"#b1b22a", // green-yello
"#2bb6c4", // cyan
"#2d81bc", // blue
"#ed8123", // orange
"#4e964e", //green
"#db3f40" // red
];

var catgry = [""];
var md = ["Truck", "Bus", "6+ Wheeler", "Vans", "Jeep", "Car", 
		"3 Wheeler", "Motor Cycle", "Bicycle", "Pedestrian"],
ct  = [ 0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
yt0 = [ 28193, 10610, 8072, 8269, 9253, 15031, 6792, 34624, 3134, 12400],
yt1 = [ 30213, 8652, 8428, 7755, 8013, 17693, 6737, 38318, 3069, 11571],
yt2 = [ 27701, 8356, 8461, 7894, 8322, 20565, 9492, 40187, 2587, 12385],
mdFlg = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
yrFlg = [0,0,1],
xCenter = [200, 200, 200],
glblRunIt = 1,
ctFlg = "Grouped";

var vizBdata = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
var vizBradi = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var tooltip = d3.select("body")
				.append("div")
				.attr("class", "toolTip")
				.style("opacity", 0);
				
function setData(){
	for (var ai = 0; ai < vizBdata.length; ai++) {
		vizBdata[ai] = (mdFlg[ai] * yrFlg[0] * yt0[ai]) + 
					   (mdFlg[ai] * yrFlg[1] * yt1[ai]) +
					   (mdFlg[ai] * yrFlg[2] * yt2[ai]);
	}
}

var maxradi = Math.max.apply(null, vizBdata);
console.log("Max: " + maxradi);

var maxRadiusz = 100;
function getRadi(ip){
	var tmpmax;
	tmpmax = Math.max.apply(null, vizBdata);
	//tmpmax = 41000;
	return (ip / tmpmax) * maxRadiusz;
}
function getVal(ri){
	return (ri * Math.max.apply(null, vizBdata) ) / maxRadiusz ;
}


function drawBubbles(){
	setData();

	var numNodes = 10;
	var nodes = vizBdata.map(function(d, i) {
	  return { radius: getRadi(d), category: ct[i] }
	});

	console.log(nodes);

	//console.log(nodes);
	var simulation = d3.forceSimulation(nodes)
	.force('center', d3.forceCenter(350, 300))
	  .force('charge', d3.forceManyBody().strength(5))
	  .force('x', d3.forceX().x(function(d) { return xCenter[d.category]; }))
	  .force('y', d3.forceY().y(function(d) { return 200; }))
	  .force('collision', d3.forceCollide().radius(function(d) { return getRadi(vizBdata[d.index]); }))
	 .on('tick', ticked)
	  ;
	console.log(nodes);
	
	function ticked() {
		

		  /* *************************** 

	
		var nodeB = d3.select('.viz6').selectAll("circle")
    .data(nodes)
    .enter().append("g")//.call(simulation.drag)
	;
		
		nodeB.append("circle")
		.attr('class','bubblesViz6')
			.attr("r", function(d){return d.radius})
			.style('fill', function(d) { return	colorsviz3[d.index];})
			.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
			
			
			;
		
		//add text to the group    
		nodeB.append("text")
			.text(function (d) {
			return d.name;
		})
		.attr("dx", function(d) { return d.x; })
			.attr("dy", function(d) { return d.y; })
			.text(function (d) {
			return "hello";
		})
			.style("stroke", "gray")
			.style("text-anchor", "middle");		
		

				*************************** */

	
		
	  var u = d3.select('.viz6').selectAll('circle').data(nodes);

	  u.enter()
		.append('circle')
		.attr('class','bubblesViz6')
		.attr('r', function(d) { return d.radius; })
		.style('fill', function(d) { return	colorsviz3[d.index];})
		.merge(u)
		.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
		.attr("stroke","#cecece").attr("stroke-width",3) // #cecece
		.on("mouseover", function(d,i){
				//console.log(d);
				tooltip.transition().duration(200).style("opacity", .9);
				tooltip  
				  .html("<strong><span style='color:#4c4a4a'>Transport Mode:</span></strong> <span style='color:#7a3402'>" + md[d.index] + "</span><br>" + 
				  "<strong><span style='color:#4c4a4a'>Death Count: </span></strong> <span style='color:#7a3402'>" + d3.format(",")(vizBdata[d.index]) + "</span><br>")
				  .style("left", (d3.event.pageX + 3) + "px")
				  .style("top", (d3.event.pageY - 38) + "px")
				  .style("display", "inline-block")
				  ;  
				d3.select(this).transition().duration(200)
				.attr("r",function(d){return d.radius+10;})
				//.attr("stroke","grey").attr("stroke-width",3)
			})
			.on("mouseout", function(d){
				tooltip.transition().duration(1).style("opacity", 0);
				d3.select(this).transition().duration(200)
				.attr("r",function(d){return d.radius;})
				.attr("stroke","#cecece").attr("stroke-width",3) // #cecece
		})
				
				
				
		/*	.append("text")
			.attr("dy", ".3em")
			.text("hello")
			.attr('font-size',20)
			.style("text-anchor", "middle")
		    .style("fill", "white").style("stroke-width", "12px")
			*/
			;
		
		//u.exit().remove();
	/*	u.append("text")
	.attr('dx', 10)
	.attr('dy', ".35em")  
	.attr('font-size',20).style("text-anchor", "middle")
	.style("fill", "black").style("stroke-width", "100px")
	.text("hello");	


		
		{radius: 100, category: 2, index: 7, x: 319.6402887714007, y: 224.50934287893273, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 388.8407772791446, y: 378.62615342226877, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 469.11938629681663, y: 247.077108732225, …}

{radius: 100, category: 2, index: 7, x: 616.8792612737659, y: 284.2508035782597, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 379.69366963464256, y: 298.9112832682662, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 98.53084309055534, y: 297.0936709310974, …}
*/
		
	 /*
	u.append("text")
		//.attr("dy", ".3em")
		//.attr("dy",function(d) { return d.y})
		.attr("dx", function(d){ return d.x;})
		.attr("dy", function(d){ return d.y;})
		//.attr('x', function(d) { return d.x; })
		//.attr('y', function(d) { return d.y; })    
		.attr('font-size',20)
		//.style("text-anchor", "middle")
		//.style("fill", "white").style("stroke-width", "12px")
      .text("tmp");	
	  */

	  //var u1 = d3.select('.viz6').selectAll('text').data(nodes);
/*
		u.selectAll('circle')
		.enter()
		.append('text')
		.text(function(d,i){return md[i];})
		.attr('font-size',10)//font size
		.style("fill", "white")
		.attr('dx', function(d){return d.x})
		.attr('dy',function(d){return d.y});
		
		*/
		
		if(glblRunIt == 1) {
//console.log("am here");
svg6.selectAll('.cirLabels').remove();
	svg6.append("text")
	  .attr("class", "cirLabels")
      .attr("dx", 319).attr("dy", 224+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Motor Cycles");	
	  
	svg6.append("text")
	  .attr("class", "cirLabels")
      .attr("dx", 388).attr("dy", 378+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Trucks");

	svg6.append("text")
	  .attr("class", "cirLabels")
      .attr("dx", 469).attr("dy", 247+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Cars");



		}


	}




}

drawBubbles();
//glblRunIt = 0;
/*
svg6.selectAll('.cirLabels').remove();
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 319).attr("dy", 224+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Motor Cycles");	
	  
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 388).attr("dy", 378+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Trucks");

	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 469).attr("dy", 247+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Cars");
	*/

			
/*
{radius: 100, category: 2, index: 7, x: 319.6402887714007, y: 224.50934287893273, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 388.8407772791446, y: 378.62615342226877, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 469.11938629681663, y: 247.077108732225, …}

{radius: 100, category: 2, index: 7, x: 616.8792612737659, y: 284.2508035782597, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 379.69366963464256, y: 298.9112832682662, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 98.53084309055534, y: 297.0936709310974, …}
*/

			
// buttons START
tmpOffset6W = 160;
tmpOffset6H = 65;

btnAllMode = svg6.append("rect").attr("class","yearButtonviz6").attr("height",30).attr("width",200).attr("fill","#029bce")
	.attr("x",tmpOffset6W).attr("y",tmpOffset6H).attr("rx",6).attr('stroke', '#029bce').attr('stroke-width', 2)
	.on("mouseover",function(){
		d3.select(this).style("cursor","pointer");
	})
	.on("click",function(){
		d3.select(this).transition().duration(100).attr("fill","#029bce");  //017aa3
		lblAllMode.transition().duration(100).delay(100).style("fill", "white");
		btnBySize.transition().duration(100).delay(100).attr("fill","white");
		lblBySize.transition().duration(100).delay(100).style("fill", "#029bce");
		xCenter = [200, 200, 200]; 
			
	glblRunIt = 0;
	drawBubbles();
	
	svg6.selectAll('.cirLabels').remove();
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 319).attr("dy", 224+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Motor Cycles");	
	  
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 388).attr("dy", 378+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Trucks");

	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 469).attr("dy", 247+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Cars");


 			
/*
{radius: 100, category: 2, index: 7, x: 319.6402887714007, y: 224.50934287893273, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 388.8407772791446, y: 378.62615342226877, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 469.11938629681663, y: 247.077108732225, …}

{radius: 100, category: 2, index: 7, x: 616.8792612737659, y: 284.2508035782597, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 379.69366963464256, y: 298.9112832682662, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 98.53084309055534, y: 297.0936709310974, …}
*/

		subLbl1.text("")	;
		subLbl11.text("")	;
		subLbl2.text("")	;
		subLbl21.text("")	;
		subLbl3.text("")	;
		subLbl31.text("")	;	


		d3.selectAll(".anno603").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".anno604").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".anno605").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".anno606").transition().duration(400).delay(400).text("HIGHEST road accident ");
		d3.selectAll(".anno607").transition().duration(400).delay(400).text("deaths were recoded ");
		d3.selectAll(".anno608").transition().duration(400).delay(400).text("with MOTOR CYLES");
		/* 
		HIGHEST road accident 
		deaths were recoded 
		with MOTOR CYLES
		*/	

		d3.selectAll(".viz60annoto2").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".viz60annoto3").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".viz60annoto4").transition().duration(400).delay(400).attr("stroke-width",2);
		d3.selectAll(".viz60annoto5").transition().duration(400).delay(400).text("SECOND highest road ");
		d3.selectAll(".viz60annoto6").transition().duration(400).delay(400).text("accident deaths were");
		d3.selectAll(".viz60annoto7").transition().duration(400).delay(400).text("recoded with TRUCKS");

		/* 
		SECOND highest road 
		accident deaths were
		recoded with TRUCKS
		*/	
		
		})
	;

lblAllMode = svg6.append("text").attr("class", "yearButtonviz6Label")  //505151
	.style("fill", "white").style("stroke-width", "40px").style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6W+25).attr("y",tmpOffset6H+20).text("All Transport Modes")	;	

tmpOffset6W = tmpOffset6W + 250;
tmpOffset6H = tmpOffset6H;

btnBySize = svg6.append("rect").attr("class","yearButtonviz6").attr("height",30).attr("width",200).attr("fill","white")
	.attr("x",tmpOffset6W).attr("y",tmpOffset6H).attr("rx",6).attr('stroke', '#029bce').attr('stroke-width', 2)
	.on("mouseover",function(){  ///  007aa3
		d3.select(this).style("cursor","pointer");
		//d3.select(this).attr("x",function(d){console.log(d);});

		//d3.select(this).transition().duration(100).attr("fill","#efefef");  //017aa3
		//lblBySize.transition().duration(100).delay(100).style("fill", "white");
	})
	.on("mouseout",function(){
		//d3.select(this).style("cursor","pointer");
		//d3.select(this).transition().duration(100).attr("fill","white");  //017aa3
		//lblBySize.transition().duration(100).delay(100).style("fill", "#029bce");
	})
	.on("click",function(){
		d3.select(this).transition().duration(100).attr("fill","#029bce");  //017aa3
		lblBySize.transition().duration(100).delay(100).style("fill", "white");
		btnAllMode.transition().duration(100).delay(100).attr("fill","white");
		lblAllMode.transition().duration(100).delay(100).style("fill", "#029bce");
		xCenter = [300, 550, 800]; 
			drawBubbles();
		glblRunIt = 0;

svg6.selectAll('.cirLabels').remove();
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 616).attr("dy", 284+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Motor Cycles");	
	  
	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 379).attr("dy", 298+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Cars");

	svg6.append("text")
	  .transition()
      .duration(500)
	  .delay(600)	
	  .attr("class", "cirLabels")
      .attr("dx", 98).attr("dy", 297+5)
	  .style("stroke-width",8).style("fill", "white")
      .style("text-anchor", "middle")
      .text("Trucks");

 			
/*
{radius: 100, category: 2, index: 7, x: 319.6402887714007, y: 224.50934287893273, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 388.8407772791446, y: 378.62615342226877, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 469.11938629681663, y: 247.077108732225, …}

{radius: 100, category: 2, index: 7, x: 616.8792612737659, y: 284.2508035782597, …}
{radius: 51.17326498618956, category: 1, index: 5, x: 379.69366963464256, y: 298.9112832682662, …}
{radius: 68.93025107621867, category: 0, index: 0, x: 98.53084309055534, y: 297.0936709310974, …}
*/




		subLbl1.text("Large Sized Vehicles")	;
		subLbl11.text("(4+ wheeler)")	;
		subLbl2.text("Medium Sized Vehicles")	;
		subLbl21.text("(3-4 wheeler)")	;
		subLbl3.text("Small Sized Vehicles")	;
		subLbl31.text("(0-2 wheeler)")	;
		
		d3.selectAll(".anno603").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".anno604").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".anno605").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".anno606").transition().duration(100).delay(100).text("");
		d3.selectAll(".anno607").transition().duration(100).delay(100).text("");
		d3.selectAll(".anno608").transition().duration(100).delay(100).text("");
		/* 
		HIGHEST road accident 
		deaths were recoded 
		with MOTOR CYLES
		*/	

		d3.selectAll(".viz60annoto2").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".viz60annoto3").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".viz60annoto4").transition().duration(100).delay(100).attr("stroke-width",0);
		d3.selectAll(".viz60annoto5").transition().duration(100).delay(100).text("");
		d3.selectAll(".viz60annoto6").transition().duration(100).delay(100).text("");
		d3.selectAll(".viz60annoto7").transition().duration(100).delay(100).text("");

		/* 
		SECOND highest road 
		accident deaths were
		recoded with TRUCKS
		*/	
		
		})
	;

lblBySize = svg6.append("text").attr("class", "yearButtonviz6Label")  //505151
	.style("fill", "#029bce").style("stroke-width", "40px").style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffset6W+10).attr("y",tmpOffset6H+20).text("By Transport Mode Size")	;	

// buttons END




//md = ["Truck", "Bus", "6+ Wheeler", "Vans", "Jeep", "Car", "3 Wheeler", "Motor Cycle", "Bicycle", "Pedestrian"]
//////////////////////// Legend

rectOfMx = 160;
rectOfstx = rectOfMx;
rectOfsty = 470;
rectLgSz = 13;
rectLgSep = 7;
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty).attr("fill",colorsviz3[0]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz+rectLgSep).attr("fill",colorsviz3[1]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*2+rectLgSep*2).attr("fill",colorsviz3[2]);
//svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
//	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*3+rectLgSep*3).attr("fill","grey");

svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x", rectOfstx+18).attr("y", rectOfsty+12).text(md[0])	;	
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz+rectLgSep).text(md[1])	;
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*2+rectLgSep*2).text(md[2])	;
//svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
//	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*3+rectLgSep*3).text(md[0])	;	
//////

rectOfstx = rectOfMx + 150;
rectOfsty = 470;
rectLgSz = 13;
rectLgSep = 7;
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty).attr("fill",colorsviz3[3]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz+rectLgSep).attr("fill",colorsviz3[4]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*2+rectLgSep*2).attr("fill",colorsviz3[5]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*3+rectLgSep*3).attr("fill",colorsviz3[6]);

svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x", rectOfstx+18).attr("y", rectOfsty+12).text(md[3])	;	
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz+rectLgSep).text(md[4])	;
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*2+rectLgSep*2).text(md[5])	;
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*3+rectLgSep*3).text(md[6])	;	
//////

rectOfstx = rectOfMx + 300;;
rectOfsty = 470;
rectLgSz = 13;
rectLgSep = 7;
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty).attr("fill",colorsviz3[7]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz+rectLgSep).attr("fill",colorsviz3[8]);
svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*2+rectLgSep*2).attr("fill",colorsviz3[9]);
//svg6.append("rect").attr("height",rectLgSz).attr("width",rectLgSz)
//	.attr("x",rectOfstx).attr("y",rectOfsty+rectLgSz*3+rectLgSep*3).attr("fill","grey");

svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x", rectOfstx+18).attr("y", rectOfsty+12).text(md[7])	;	
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz+rectLgSep).text(md[8])	;
svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*2+rectLgSep*2).text(md[9])	;
//svg6.append("text").attr("class", "bublgnd").style("fill", "black").style("text-anchor", "start")
//	.attr("x",rectOfstx+18).attr("y",rectOfsty+12+rectLgSz*3+rectLgSep*3).text(md[0])	;	
		
//////////////////////// Legend

var v2d1 = [8091, 30082, 37329, 32906, 18436, 9014, 5651];
var v2d2 = [7821, 30125, 39721, 28081, 22612, 10691, 7082];
var v2d3 = [14622, 31775, 44076, 27558, 19174, 7814, 5766];
var ageGrp = ["Less than 18", "18 - 25", "26 - 35", "36 - 45", "46 - 60", "Above 60", "Age Unknown"];

var yearbool = [0,0,1];
var databool = [1,1,1,1,1,1,0];

function getData(){
	var d = [0,0,0,0,0,0,0];
	for (var ai = 0; ai < d.length; ai++) {
		d[ai] = (v2d1[ai] * yearbool[0] * databool[ai]) +
		(v2d2[ai] * yearbool[1] * databool[ai]) +
		(v2d3[ai] * yearbool[2] * databool[ai]) ;
		//console.log(d[ai]);
	}
	return d;
}

var svg = d3.select(".viz2");

var margin = {top: 100, right: 10, bottom: 80, left: 120},
	width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
	radius = Math.min(width, height) / 2;

/*
var v2color = [
"#2ec7c9", 
"#ffb980", 
"#d87a80", 
"#5ab1ef", 
"#97b552", 
"#e5cf0d", 
"#8d98b3"
];
*/

var v2color = [
"#2bb6c4", //cyan
"#ed8123", //orange
"#db3f40", //red
"#2d81bc", //blue
"#4e964e", //green
"#b1b22a", //geen-yellow
"#7f7f7f"  //grey
];


var arc = d3.arc()
    .outerRadius(radius - 75)
    .innerRadius(radius +10);

var pie = d3.pie()
    .sort(null)
    .value(function(d, i) { 
			return d; 
			});


/*
svg.append("rect")
	.attr("x",0)
	.attr("y",0)
	.attr("height",+svg.attr("height"))
	.attr("width",+svg.attr("width"))
	.attr("fill", "black")
	.style("opacity", 100)
	.attr('stroke', 'black')
	.attr('stroke-width', 10)
	;*/
	
var tooltip2 = d3.select("body")
					.append("div")
					.attr("class", "toolTip2")
					.style("opacity", 0)
				;

var arcOver = d3.arc()
    .innerRadius(radius +10 + 20)
    .outerRadius(radius - 75 - 7)
	;

// title
svg.append("text")     
  .attr("class", "viz1title")
  .attr("transform",
		"translate(" + ((width+120)/2)  + " ," + (20) + ")")
  .style("text-anchor", "middle")
  .text("# of Road Accident Deaths by Age Group");
  
// legends START 
var tmpOffsetW = 8;
var tmpOffsetH = +svg.attr("height")/2 - 25;

function getFillClr(ii){
	//console.log(ii);
	if (databool[ii] == 1) {return v2color[ii];}
	else {return "white";} 		
}

var bi = 0;
vizlegendca0 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb0 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt0 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);	

bi = 1;
vizlegendca1 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb1 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt1 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);	

bi = 2;
vizlegendca2 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb2 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt2 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);	


bi = 3;
vizlegendca3 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb3 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt3 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);	

bi = 4;
vizlegendca4 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb4 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt4 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);

bi = 5;
vizlegendca5 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb5 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt5 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);
	
bi = 6;
vizlegendca6 = svg.append("circle").attr("class", "vizlegendca")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 8)
	.attr("fill", v2color[bi])//.on("click",clickLegend(bi))
	;
vizlegendcb6 = svg.append("circle").attr("class", "vizlegendcb")
	.attr("cx", tmpOffsetW).attr("cy", tmpOffsetH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
vizlegendt6 = svg.append("text").attr("class", "vizlegendt")
	.attr("x", tmpOffsetW + 12).attr("y", tmpOffsetH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(ageGrp[bi]);	

// legends END 


// buttons START
//console.log(((+svg.attr("weight"))/2));
tmpOffsetW = 350-140;
tmpOffsetH = 70;

btn2014 = svg.append("rect").attr("class","yearButtonviz2").attr("height",30).attr("width",70).attr("fill","white")
	.attr("x",tmpOffsetW).attr("y",tmpOffsetH).attr("rx",6).attr('stroke', '#029bce').attr('stroke-width', 2)
	.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
		d3.select(this).transition().duration(300).attr("fill","#029bce");  //017aa3
		lbl2014.transition().duration(100).delay(100).style("fill", "white");
		btn2015.transition().duration(100).delay(100).attr("fill","white");
		lbl2015.transition().duration(100).delay(100).style("fill", "#029bce");
		btn2016.transition().duration(100).delay(100).attr("fill","white");
		lbl2016.transition().duration(100).delay(100).style("fill", "#029bce");			
		yearbool = [1,0,0];
		changeChart();
		})
	;

lbl2014 = svg.append("text").attr("class", "yearButtonviz2Label")  //505151
	.style("fill", "#029bce").style("stroke-width", "40px").style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffsetW+17).attr("y",tmpOffsetH+20).text("2014")	;	

tmpOffsetW = tmpOffsetW + 70 + 35;
tmpOffsetH = tmpOffsetH;

btn2015 = svg.append("rect").attr("class","yearButtonviz2").attr("height",30).attr("width",70).attr("fill","white")
	.attr("x",tmpOffsetW).attr("y",tmpOffsetH).attr("rx",6).attr('stroke', '#029bce').attr('stroke-width', 2)
	.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
		d3.select(this).transition().duration(300).attr("fill","#029bce");  //017aa3
		lbl2015.transition().duration(100).delay(100).style("fill", "white");
		btn2014.transition().duration(100).delay(100).attr("fill","white");
		lbl2014.transition().duration(100).delay(100).style("fill", "#029bce");
		btn2016.transition().duration(100).delay(100).attr("fill","white");
		lbl2016.transition().duration(100).delay(100).style("fill", "#029bce");	
		yearbool = [0,1,0];
		changeChart();
		})
	;

lbl2015 = svg.append("text").attr("class", "yearButtonviz2Label")  //505151
	.style("fill", "#029bce").style("stroke-width", "40px").style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffsetW+17).attr("y",tmpOffsetH+20).text("2015")	;	
	
	
tmpOffsetW = tmpOffsetW + 70 + 35;
tmpOffsetH = tmpOffsetH;

btn2016 = svg.append("rect").attr("class","yearButtonviz2").attr("height",30).attr("width",70).attr("fill","white")
	.attr("x",tmpOffsetW).attr("y",tmpOffsetH).attr("rx",6).attr('stroke', '#029bce').attr('stroke-width', 2)
	.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
		d3.select(this).transition().duration(300).attr("fill","#029bce");  //017aa3
		lbl2016.transition().duration(100).delay(100).style("fill", "white");
		btn2014.transition().duration(100).delay(100).attr("fill","white");
		lbl2014.transition().duration(100).delay(100).style("fill", "#029bce");
		btn2015.transition().duration(100).delay(100).attr("fill","white");
		lbl2015.transition().duration(100).delay(100).style("fill", "#029bce");	
		yearbool = [0,0,1];
		changeChart();
		})
	;

lbl2016 = svg.append("text").attr("class", "yearButtonviz2Label")  //505151
	.style("fill", "#029bce").style("stroke-width", "40px").style("font-weight","bold")
	.style("text-anchor", "start")
	.attr("x",tmpOffsetW+17).attr("y",tmpOffsetH+20).text("2016")	;	
// buttons END

////////////// ANNOTATIONS START   //#cecece 777777 969696 a5a4a4
viz2annot_x1 = +svg.attr("width")/2 + 80 + 9;
viz2annot_y1 = 151;
viz2annoto1 = svg.append("circle").attr("class", "viz2annoto1").attr("cx",viz2annot_x1)
.attr("cy",viz2annot_y1).attr("r",4).attr("fill", "#cecece");

viz2annot_x2 = +svg.attr("width")/2 + 80 + 20;
viz2annot_y2 = 170 - 30;
viz2annoto2 = svg.append("line").attr("class", "viz2annoto2").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x1 = viz2annot_x2;
viz2annot_y1 = viz2annot_y2;
viz2annot_x2 = viz2annot_x1 + 40;
viz2annot_y2 = viz2annot_y2;
viz2annoto3 = svg.append("line").attr("class", "viz2annoto3").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x1 = viz2annot_x2 ;
viz2annot_y1 = viz2annot_y2 - 17;
viz2annot_x2 = viz2annot_x2;
viz2annot_y2 = viz2annot_y2 + 17;
viz2annoto4 = svg.append("line").attr("class", "viz2annoto4").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x2 = viz2annot_x2 + 3;
viz2annot_y2 = viz2annot_y1 + 2;
viz2annoto5 = svg.append("text").attr("class", "viz2annoto5")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 6).text("Road accident deaths in 2016 for age");

viz2annoto6 = svg.append("text").attr("class", "viz2annoto6")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 18).text("group 'Less than 18' (kids / teens) is");

viz2annoto7 = svg.append("text").attr("class", "viz2annoto7")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 30).text("significant. Which is troubling!! ");

/*
Road accident deaths in 2016 for age
group 'Less than 18' (kids/teens) is
significant. Troubling!! 
*/

viz2annot_x1 = +svg.attr("width")/2 + 80 + 17;
viz2annot_y1 = 445 + 19;
viz2annoto11 = svg.append("circle").attr("class", "viz2annoto1").attr("cx",viz2annot_x1)
.attr("cy",viz2annot_y1).attr("r",4).attr("fill", "#cecece");

viz2annot_x1 = viz2annot_x1;
viz2annot_y1 = viz2annot_y1;
viz2annot_x2 = +svg.attr("width")/2 + 80 + 30;
viz2annot_y2 = 445 + 30;
viz2annoto22 = svg.append("line").attr("class", "viz2annoto2").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x1 = viz2annot_x2;
viz2annot_y1 = viz2annot_y2;
viz2annot_x2 = viz2annot_x1 + 40;
viz2annot_y2 = viz2annot_y2;
viz2annoto33 = svg.append("line").attr("class", "viz2annoto3").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x1 = viz2annot_x2;
viz2annot_y1 = viz2annot_y2 - 17;
viz2annot_x2 = viz2annot_x2;
viz2annot_y2 = viz2annot_y2 + 17;
viz2annoto44 = svg.append("line").attr("class", "viz2annoto4").attr("stroke", "#cecece")
.attr("x1", viz2annot_x1).attr("y1", viz2annot_y1).attr("stroke-width",2)
.attr("x2", viz2annot_x2).attr("y2", viz2annot_y2);

viz2annot_x2 = viz2annot_x2 + 3;
viz2annot_y2 = viz2annot_y1 + 2;
viz2annoto55 = svg.append("text").attr("class", "viz2annoto5")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 6).text("Age group '26 - 35' reported");

viz2annoto66 = svg.append("text").attr("class", "viz2annoto6")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 18).text("HIGHEST share in death tool ");
	
viz2annoto77 = svg.append("text").attr("class", "viz2annoto7")
	.attr("x", viz2annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz2annot_y2 + 30).text("from accidents in 2016");

//annotations reset   
/*
d3.selectAll(".viz2annoto1").attr("r",0);
d3.selectAll(".viz2annoto2").attr("stroke-width",0);
d3.selectAll(".viz2annoto3").attr("stroke-width",0);
d3.selectAll(".viz2annoto4").attr("stroke-width",0);
d3.selectAll(".viz2annoto5").text("");
d3.selectAll(".viz2annoto6").text("");
d3.selectAll(".viz2annoto7").text("");

d3.selectAll(".viz2annoto11").attr("r",0);
d3.selectAll(".viz2annoto22").attr("stroke-width",0);
d3.selectAll(".viz2annoto33").attr("stroke-width",0);
d3.selectAll(".viz2annoto44").attr("stroke-width",0);
d3.selectAll(".viz2annoto55").text("");
d3.selectAll(".viz2annoto66").text("");
d3.selectAll(".viz2annoto77").text("");
*/
/* 
Age group '26 - 35' reported
HIGHEST share in death tool 
from accidents in 2016
*/

////////////// ANNOTATIONS END



// function for change
function changeChart(){
	//annotations reset   
	d3.selectAll(".viz2annoto1").attr("r",0);
	d3.selectAll(".viz2annoto2").attr("stroke-width",0);
	d3.selectAll(".viz2annoto3").attr("stroke-width",0);
	d3.selectAll(".viz2annoto4").attr("stroke-width",0);
	d3.selectAll(".viz2annoto5").text("");
	d3.selectAll(".viz2annoto6").text("");
	d3.selectAll(".viz2annoto7").text("");

	d3.selectAll(".viz2annoto11").attr("r",0);
	d3.selectAll(".viz2annoto22").attr("stroke-width",0);
	d3.selectAll(".viz2annoto33").attr("stroke-width",0);
	d3.selectAll(".viz2annoto44").attr("stroke-width",0);
	d3.selectAll(".viz2annoto55").text("");
	d3.selectAll(".viz2annoto66").text("");
	d3.selectAll(".viz2annoto77").text("");
	
	d = getData();
	changhArcs(d);
	
	var tmpsum = 0;
	for (var ei = 0; ei < databool.length; ei++) {
		tmpsum = tmpsum + databool[ei];
	}
	//console.log("tmpsum:");
	//console.log(tmpsum);
	if(yearbool[2] == 1 && databool[6] == 0 &&  tmpsum == 6){
		viz2annoto1.transition().duration(200).delay(200).attr("r",4);
		viz2annoto2.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto3.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto4.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto5.transition().duration(200).delay(200).text("Road accident deaths in 2016 for age");
		viz2annoto6.transition().duration(200).delay(200).text("group 'Less than 18' (kids / teens) is");
		viz2annoto7.transition().duration(200).delay(200).text("significant. Which is troubling!!");	

		viz2annoto11.transition().duration(200).delay(200).attr("r",4);
		viz2annoto22.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto33.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto44.transition().duration(200).delay(200).attr("stroke-width",2);
		viz2annoto55.transition().duration(200).delay(200).text("Age group '26 - 35' reported");
		viz2annoto66.transition().duration(200).delay(200).text("HIGHEST share in death tool");
		viz2annoto77.transition().duration(200).delay(200).text("from accidents in 2016");	
		}	
}

function tooltiptext2(d,i) {
 var text = "<strong><span style='color:#4c4a4a'>Age Group:</span></strong> <span style='color:#7a3402'>" + ageGrp[i] + "</span><br>" + "<strong><span style='color:#4c4a4a'>Death Count: </span></strong> <span style='color:#7a3402'>" + d3.format(",")(d) + "</span><br>" ;
	return text;
}	

var path = svg.selectAll("path")
    .data(pie(getData()))
    .enter()
    .append("path");

path.transition()
    .duration(500)
    .attr("fill", function(d, i) {return v2color[i]; })
	.attr("transform", "translate(" + ((svg.attr("width") / 2) ) + "," + ((svg.attr("height") / 2) + 50) + ")")
    .attr("d", arc)
	.style("stroke","white").style("stroke-width",2)
    .each(function(d) {
        this._current = d;
    }); // store the initial angles

function changhArcs(data) {
	//console.log("changhArcs: "); 
	//console.log(data);
    path.data(pie(data));
    path.transition().duration(750).attrTween("d", arcTween); 
}

function arcTween(a) {
    var i = d3.interpolate(this._current, a);
    this._current = i(0);
    return function(t) {
        return arc(i(t));
    };
}

d3.selectAll("path")
    .on("mouseover", function(d, i){
	        tooltip2.transition().duration(200).style("opacity", .9);
			tooltip2.html(tooltiptext2(d.data, d.index)).style("left", (d3.event.pageX + 3) + "px")
              .style("top", (d3.event.pageY - 38) + "px").style("display", "inline-block");  // 
			d3.select(this).transition().attr("d", arcOver).duration(500);  
        })
    .on("mouseout", function(d){ 
			tooltip2.transition().duration(1).style("opacity", 0);
			d3.select(this).transition().attr("d", arc).duration(500);
			});

btn2016.attr("fill","#029bce");  //017aa3
lbl2016.style("fill", "white");



//////////////////// legend clicks START 
vizlegendca0.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[0] == 1) { databool[0] = 0;
								vizlegendcb0.attr("fill", "white");}
							else { databool[0] = 1;
								vizlegendcb0.attr("fill", v2color[0]); }
							changeChart(); });
vizlegendcb0.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[0] == 1) { databool[0] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[0] = 1;
								d3.select(this).attr("fill", v2color[0]); }
							changeChart(); });

vizlegendca1.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[1] == 1) { databool[1] = 0;
								vizlegendcb1.attr("fill", "white");}
							else { databool[1] = 1;
								vizlegendcb1.attr("fill", v2color[1]); }
							changeChart(); });
vizlegendcb1.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[1] == 1) { databool[1] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[1] = 1;
								d3.select(this).attr("fill", v2color[1]); }
							changeChart(); });		

vizlegendca2.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[2] == 1) { databool[2] = 0;
								vizlegendcb2.attr("fill", "white");}
							else { databool[2] = 1;
								vizlegendcb2.attr("fill", v2color[2]); }
							changeChart(); });
vizlegendcb2.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[2] == 1) { databool[2] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[2] = 1;
								d3.select(this).attr("fill", v2color[2]); }
							changeChart(); });	

vizlegendca3.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[3] == 1) { databool[3] = 0;
								vizlegendcb3.attr("fill", "white");}
							else { databool[3] = 1;
								vizlegendcb3.attr("fill", v2color[3]); }
							changeChart(); });
vizlegendcb3.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[3] == 1) { databool[3] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[3] = 1;
								d3.select(this).attr("fill", v2color[3]); }
							changeChart(); });	

vizlegendca4.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[4] == 1) { databool[4] = 0;
								vizlegendcb4.attr("fill", "white");}
							else { databool[4] = 1;
								vizlegendcb4.attr("fill", v2color[4]); }
							changeChart(); });
vizlegendcb4.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[4] == 1) { databool[4] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[4] = 1;
								d3.select(this).attr("fill", v2color[4]); }
							changeChart(); });

vizlegendca5.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[5] == 1) { databool[5] = 0;
								vizlegendcb5.attr("fill", "white");}
							else { databool[5] = 1;
								vizlegendcb5.attr("fill", v2color[5]); }
							changeChart(); });
vizlegendcb5.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[5] == 1) { databool[5] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[5] = 1;
								d3.select(this).attr("fill", v2color[5]); }
							changeChart(); });

vizlegendca6.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[6] == 1) { databool[6] = 0;
								vizlegendcb6.attr("fill", "white");}
							else { databool[6] = 1;
								vizlegendcb6.attr("fill", v2color[6]); }
							changeChart(); });
vizlegendcb6.on("mouseover", function(){d3.select(this).style("cursor","pointer");})
	.on("click",function(){
							if (databool[6] == 1) { databool[6] = 0;
								d3.select(this).attr("fill", "white");}
							else { databool[6] = 1;
								d3.select(this).attr("fill", v2color[6]); }
							changeChart(); });

//////////////////// legend clicks END 

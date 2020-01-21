
 /* TO DO */
/* 
1) randomize data in the graphs
2) bar graphs - rounded/ border-radius
3) Perfect RWD
4) Bar graphs legend - RectRot - make them smaller
5) Make sure the spacing between elements/divs/tags is accurate
6) add button to randomize data in the bar graphs
7) circle - try to recreate the ACTUAL circle graph
8) move bar graphs labels 
*/
 
//alert("Hey")
function MoreChartOptions(){} 
var ChartData = {
	labels : ["Avg. all","Cautious","Complacent","Confident"],
	datasets : [
		{
		data : [20,60,25,25],
		backgroundColor :'#0181D7',
		borderColor : '#0181D7',
        label:"Adherence"},
        
        {
		data : [20,8,15,10],
		backgroundColor :'#01D9AB',
    	/*borderColor : '#01D9AB',*/
        label:"Combination therapy"},
        
        {
		data : [20,8,5,4],
		backgroundColor :'#DAD661',
		borderColor : '#DAD661',
        label:"Dosing"},
        
        {
		data : [20,8,5,28],
    	backgroundColor :'#E35B44',
    	borderColor : '#E35B44',
        label:"Guidelines"},
        
        {
		data : [10,8,17,14],
		backgroundColor :'#8766CF',
		borderColor:'#8766CF',
        label:"Safety"},
        
        {
		data : [10,8,33,19],
		backgroundColor :'#D6D9D2',
		borderColor : '#D6D9D2',
    label:"Other"
    },

		
]
	};
ChartOptions= {

responsive:false,
	layout:{padding:{top:1,left:1,bottom:1,},},
	 scales: {
	xAxes:[{
		stacked: true,gridLines:{display:false},ticks:{display:false, fontFamily:"Lato"}
}],

	yAxes:[{
		stacked: true,
categoryPercentage:0.25,gridLines:{display:false},
}],
 },plugins:{
datalabels:{display:false},
},
legend:{
	labels:{
		usePointStyle:true,

		generateLabels: function(chart){
			 return  chart.data.datasets.map( function( dataset, i ){
				return{
					text:dataset.label,
					lineCap:dataset.borderCapStyle,
					lineDash:[],
					lineDashOffset: 0,
					lineJoin:dataset.borderJoinStyle,
					pointStyle:'rectRot',
					fillStyle:dataset.backgroundColor,
					strokeStyle:dataset.borderColor,
					lineWidth:dataset.pointBorderWidth,
					lineDash:dataset.borderDash,
				}
			})
		},

	},
},

elements: {
	arc: {
},
	line: {
},
},
tooltips:{
},
hover:{
	mode:'nearest',
	animationDuration:400,
},
};


/*RANDOMIZE DATA */


 
DrawTheChart(ChartData,ChartOptions,"chart-01","horizontalBar");


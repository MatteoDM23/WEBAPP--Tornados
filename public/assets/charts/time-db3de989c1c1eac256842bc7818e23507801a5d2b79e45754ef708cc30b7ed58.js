-1==window.location.pathname.indexOf("feed")&&$(document).ready(function(){for(var e=$("#items").data("url"),t=[],i=0;i<e.length;i++){var a=[],o=new Date(e[i].date);a.push(o.getTime()),a.push(parseFloat(e[i].closs)),t.push(a)}console.log(t),Highcharts.chart("container",{chart:{zoomType:"x",backgroundColor:"rgba(255, 255, 255, 0.4)"},credits:{enabled:!1},title:{text:"Million $ loss over time in 2016"},xAxis:{type:"datetime",title:{text:"Date"}},yAxis:{title:{text:"Loss in million $"},min:0},legend:{enabled:!1},tooltip:{formatter:function(){var e=this.point.index;console.log(t[e][2]);var i='<div class="tooltip-main">';return i+="<h3>"+t[e][2]+"</h3><br>",i+='<div class="label">Time: '+new Date(t[e][0])+"</div><br>",i+='<div class="label">Million$: '+t[e][1]+"</div><br>",i+="</div>"}},series:[{type:"area",name:"Magnitude",data:t}]})});
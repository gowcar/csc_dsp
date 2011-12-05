var GYS_Chart1_options = {
      chart: {
         renderTo: 'GYS_Chart1_Container',
         defaultSeriesType: 'spline'
      },
      title: {
         text: '中建股份供应商增长趋势表（2011年度）',
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月"]
      },
      yAxis: {
         title: {
            text: '个数'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      tooltip: {
         formatter: function() {
                   return this.x +': '+ this.y;
         }
      },
      legend: {
	 enabled : false,
      },
      plotOptions: {
         spline: {
            dataLabels: {
               enabled: true
            },
            enableMouseTracking: true
         }
      },
      series: [{
         data: [5339,6526,7975,8742,9641,10683,14362,15772,16484,17225]
      }]
   };
   
var GYS_Chart2_options = {
      chart: {
         renderTo: 'GYS_Chart2_Container'
      },
      title: {
         text: '中建股份全年度增长供应商占比图（2011年度）'
      },
      tooltip: {
         formatter: function() {
            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
         }
      },
      plotOptions: {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               color: '#000000',
               connectorColor:'#000000',
               formatter: function() {
                  return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
               }
            },
	    showInLegend: true
         }
      },
       series: [{
         type: 'pie',
         data: [
		['中建一局', 11],
		['中建二局', 12],
		['中建三局', 15],
		['中建四局', 22],
		['中建八局', 15],
		['中建八局', 5],
		['中建地产', 11],
		['中建装饰', 6],
		['中建筑港', 3]
         ]
      }]
   };

Ext.define('DataIntegration.view.GYS_Chart', {
           extend: 'Ext.Container',
           xtype:'gys_chartview',
           config: {
	       layout: 'fit',
               items: [{
            	   xtype:'carousel',
        	   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   title: '股份公司采购金额',
                	   html: '<div id="GYS_Chart1_Container"></div>'
                   },{
                	   title: '工程局采购金额',
                	   html: '<div id="GYS_Chart2_Container"></div>'
                   }]
               }]
           },
           refreshChart:function(toolbarHeight){
        	   setTimeout(function(){
        		   var chartWidth = Ext.getBody().getWidth()-270;
			   var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 100;
        		   $('#GYS_Chart1_Container').width(chartWidth);
        		   $('#GYS_Chart1_Container').height(chartHeight);
        		   
        		   $('#GYS_Chart2_Container').width(chartWidth);
        		   $('#GYS_Chart2_Container').height(chartHeight);
				   
				   var GYS_Chart1 = new Highcharts.Chart(GYS_Chart1_options);
				   var GYS_Chart2 = new Highcharts.Chart(GYS_Chart2_options);
					
				   //$('#caigoujine_container').orbit({timer: true,bullets: true});
        		    
        	   },1000); 

           }
});

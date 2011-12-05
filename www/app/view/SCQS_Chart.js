var SCQS_Chart1_options = {
      chart: {
         renderTo: 'SCQS_Chart1_Container'
      },
      title: {
         text: '中建股份上半年市场趋势表（2011年度）',
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月"]
      },
      yAxis: [{
         title: {
            text: '金额(万）'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },{
	 gridLineWidth: 0,
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#89A54E'
            }
         },
         title: {
            text: '单价(元）',
            style: {
               color: '#89A54E'
            }
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#8c8c8c'
         }],
	 opposite: true
      }],
      tooltip: {
         formatter: function() {
                   return this.x +': '+ this.y;
         }
      },
      legend: {
         layout: 'horizontal',
         align: 'center',
         verticalAlign: 'bottom',
         backgroundColor: '#FFFFFF'
      },
      plotOptions: {
         bar: {
            dataLabels: {
               enabled: true
            }
         },
         spline: {
            dataLabels: {
               enabled: true
            },
            enableMouseTracking: true
         }
      },
      series: [{
	 yAxis: 0,
	 type: 'spline',
         name: '网价',
         data:[8.2, 9.1, 10.1, 11, 11.5, 10.3]   
      }, {
	 yAxis: 1,
	 type: 'spline',
         name: '采购单价',
         data: [10.2, 11.1, 11.1, 12, 12.5, 9.3],
	 dashStyle: 'shortdot' 
      }, {
	 yAxis: 0,
	 type: 'spline',
         name: '信息价',
         data: [8.2, 8.1, 9.1, 9, 19.5, 9.3]
      }]
   };

Ext.define('DataIntegration.view.SCQS_Chart', {
           extend: 'Ext.Container',
           xtype:'scqs_chartview',
           config: {
	       layout: 'fit',
               items: [{
            	   xtype:'carousel',
        	   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   html: '<div id="SCQS_Chart1_Container"></div>'
                   }]
               }]
           },
           refreshChart:function(toolbarHeight){
        	   setTimeout(function(){
        		   var chartWidth = Ext.getBody().getWidth()-270;
			   var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 100;
        		   $('#SCQS_Chart1_Container').width(chartWidth);
        		   $('#SCQS_Chart1_Container').height(chartHeight);
				   
				   var SCQS_Chart1 = new Highcharts.Chart(SCQS_Chart1_options);
					
				   //$('#caigoujine_container').orbit({timer: true,bullets: true});
        		    
        	   },1000); 

           }
});

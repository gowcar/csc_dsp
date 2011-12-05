var PTYX_Chart1_options = {
      chart: {
         renderTo: 'PTYX_Chart1_Container'
      },
      title: {
         text: '中建股份上半年项目上线数目趋势表（2011年度）',
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月"]
      },
      yAxis: {
         title: {
            text: '数量(万）'
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
            enableMouseTracking: true
         }
      },
      series: [{
	 type: 'column',
         name: '中建一局',
         data:[8.2, 9.1, 10.1, 11, 11.5, 10.3]   
      }, {
	 type: 'column',
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 12, 12.5, 9.3]
      }, {
	 type: 'column',
         name: '中建三局',
         data: [8.2, 8.1, 9.1, 9, 19.5, 9.3]
      }, {
	 type: 'column',
         name: '中建四局',
         data: [12.5, 9.5, 13.2, 14.1, 14.6, 16]
      }, {
	 type: 'column',
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 12.9, 9.4]
      }, {
	 type: 'column',
         name: '中建地产',
         data: [3.8, 3.9, 8.3, 4, 4.9, 3.4]
      },{
         type: 'spline',
         name: '平均',
         data: [3, 2.67, 12, 6.33, 3.33,5.9]
      }]
   };
   
var PTYX_Chart2_options = {
      chart: {
         renderTo: 'PTYX_Chart2_Container'
      },
      title: {
         text: '中建股份上半年合同上线数目趋势表（2011年度）',
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月"]
      },
      yAxis: {
         title: {
            text: '数量(万）'
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
         }
      },
      series: [{
	 type: 'column',
         name: '中建一局',
         data:[8.2, 9.1, 10.1, 11, 6.5, 10.3]   
      }, {
	 type: 'column',
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 7, 12.5, 9.3]
      }, {
	 type: 'column',
         name: '中建三局',
         data: [11.2, 8.1, 9.1, 9, 9.5, 9.3]
      }, {
	 type: 'column',
         name: '中建四局',
         data: [12.5, 13.5, 13.2, 6.1, 8.6, 16]
      }, {
	 type: 'column',
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 12.9, 9.4]
      }, {
	 type: 'column',
         name: '中建地产',
         data: [3.8, 3.9, 4.3, 4, 4.9, 11.4]
      },{
         type: 'spline',
         name: '平均',
         data: [10, 2.67, 3, 6.33, 3.33,5.9]
      }]
   };
   
var PTYX_Chart3_options = {
      chart: {
         renderTo: 'PTYX_Chart3_Container'
      },
      title: {
         text: '中建股份上半年账号增长数目趋势表（2011年度）',
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月"]
      },
      yAxis: {
         title: {
            text: '数量(万）'
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
         }
      },
      series: [{
	 type: 'column',
         name: '中建一局',
         data:[8.2, 19.1, 10.1, 11, 11.5, 10.3]   
      }, {
	 type: 'column',
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 12, 12.5, 19.3]
      }, {
	 type: 'column',
         name: '中建三局',
         data: [8.2, 18.1, 9.1, 9, 9.5, 9.3]
      }, {
	 type: 'column',
         name: '中建四局',
         data: [12.5, 13.5, 23.2, 14.1, 14.6, 16]
      }, {
	 type: 'column',
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 9.9, 9.4]
      }, {
	 type: 'column',
         name: '中建地产',
         data: [3.8, 3.9, 4.3, 4, 4.9, 3.4]
      },{
         type: 'spline',
         name: '平均',
         data: [3, 12.67, 13, 6.33, 13.33,5.9]
      }]
   };

Ext.define('DataIntegration.view.PTYX_Chart', {
           extend: 'Ext.Container',
           xtype:'ptyx_chartview',
           config: {
	       layout: 'fit',
               items: [{
            	   xtype:'carousel',
        	   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   html: '<div id="PTYX_Chart1_Container"></div>'
                   },{
                	   html: '<div id="PTYX_Chart2_Container"></div>'
                   },{
                	   html: '<div id="PTYX_Chart3_Container"></div>'
                   }]
               }]
           },
           refreshChart:function(toolbarHeight){
        	   setTimeout(function(){
        		   var chartWidth = Ext.getBody().getWidth()-270;
			   var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 100;
        		   $('#PTYX_Chart1_Container').width(chartWidth);
        		   $('#PTYX_Chart1_Container').height(chartHeight);
        		   
        		   $('#PTYX_Chart2_Container').width(chartWidth);
        		   $('#PTYX_Chart2_Container').height(chartHeight);

        		   $('#PTYX_Chart3_Container').width(chartWidth);
        		   $('#PTYX_Chart3_Container').height(chartHeight);
				   
				   var PTYX_Chart1 = new Highcharts.Chart(PTYX_Chart1_options);
				   var PTYX_Chart2 = new Highcharts.Chart(PTYX_Chart2_options);
				   var PTYX_Chart3 = new Highcharts.Chart(PTYX_Chart3_options);
					
				   //$('#caigoujine_container').orbit({timer: true,bullets: true});
        		    
        	   },1000); 

           }
});

var CGJE_Chart1_options = {
      chart: {
         renderTo: 'CGJE_Chart_chartContainer1',
 	 defaultSeriesType: 'column'
      },
      title: {
         text: '中建股份下半年度采购金额趋势表（2011年度）'
      },
      xAxis: [{
         categories: ["五月","六月","七月","八月","九月","十月"]
      }],
      yAxis: {
         title: {
            text: '金额（千万）',
            style: {
               color: '#4572A7'
            }
         },
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#4572A7'
            }
         }
         
      },
      tooltip: {
         formatter: function() {
            return '<b>' + this.series.name + ' ' + this.x + '</b><br/>' + this.y + '千万';
         }
      },
      legend: {
         layout: 'horizontal',
         align: 'center',
         verticalAlign: 'bottom',
         backgroundColor: '#FFFFFF'
      },
      series: [{
         name: '中建一局',
         data:[8.2, 9.1, 10.1, 11, 11.5, 10.3]   
      
      }, {
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 12, 12.5, 9.3]
      }, {
         name: '中建三局',
         data: [8.2, 8.1, 9.1, 9, 9.5, 9.3]
      }, {
         name: '中建四局',
         data: [12.5, 13.5, 13.2, 14.1, 14.6, 16]
      }, {
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 9.9, 9.4]
      }, {
         name: '中建地产',
         data: [3.8, 3.9, 4.3, 4, 4.9, 3.4]
      }]
   }


var CGJE_Chart2_options = {
      chart: {
         renderTo: 'CGJE_Chart_chartContainer2',
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false
      },
      title: {
         text: '中建股份全年度采购占比图（2011年度）'
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
		['中建二局', 15],
		['中建三局', 15],
		['中建四局', 22],
		['中建八局', 15],
		['中建八局', 5],
		['中建地产', 8],
		['中建装饰', 6],
		['中建筑港', 3]
         ]
      }]
   };	

Ext.define('DataIntegration.view.CGJE_Chart', {
           extend: 'Ext.Container',
           xtype:'cgje_chartview',
           config: {
		       layout: 'fit',
               items: [{
            	   xtype:'carousel',
        	   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   html: '<div id="CGJE_Chart_chartContainer1"></div>'
                   },{
                	   html: '<div id="CGJE_Chart_chartContainer2"></div>'
                   }]
               }]
			},
           refreshChart:function(toolbarHeight){
        	   setTimeout(function(){
        		   var chartWidth = Ext.getBody().getWidth()-270;
			   var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 100;
        		   $('#CGJE_Chart_chartContainer1').width(chartWidth);
        		   $('#CGJE_Chart_chartContainer1').height(chartHeight);
        		   
        		   $('#CGJE_Chart_chartContainer2').width(chartWidth);
        		   $('#CGJE_Chart_chartContainer2').height(chartHeight);

				   var CGJE_Chart1 = new Highcharts.Chart(CGJE_Chart1_options);
				   var CGJE_Chart2 = new Highcharts.Chart(CGJE_Chart2_options);
					
					//$('#CGJE_Container').orbit({timer: false,bullets: true});
        	   },500); 

           }
});

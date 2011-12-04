var CGJE_Chart1_options = {
      chart: {
         renderTo: 'CGJE_Chart_chartContainer1'
      },
      title: {
         text: '中建股份采购金额年度报表'
      },
      xAxis: [{
         categories: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月"]
      }],
      yAxis: [ { // Secondary yAxis
         gridLineWidth: 0,
         title: {
            text: 'Amount',
            style: {
               color: '#4572A7'
            }
         },
         labels: {
            formatter: function() {
               return this.value +'元';
            },
            style: {
               color: '#4572A7'
            }
         }
         
      },{ // Primary yAxis
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#89A54E'
            }
         },
         title: {
            text: 'Quantity',
            style: {
               color: '#89A54E'
            }
         },
         opposite: true
      }],
      tooltip: {
         formatter: function() {
            var unit = {
               '预算金额': '元',
               '实际采购': ''
            }[this.series.name];
            
            return ''+
               this.x +': '+ this.y　+　unit;
         }
      },
      legend: {
         layout: 'vertical',
         align: 'left',
         x: 120,
         verticalAlign: 'top',
         y: 80,
         floating: true,
         backgroundColor: '#FFFFFF'
      },
      series: [{
         name: '预算金额',
         color: '#4572A7',
         type: 'column',
         yAxis: 0,
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]      
      
      }, {
         name: '实际采购',
         color: '#89A54E',
         type: 'spline',
		 yAxis: 1,
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
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
         text: '中建股份各局采购占比情况'
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
            }
         }
      },
       series: [{
         type: 'pie',
         data: [
            ['中建一局',   10],
            ['中建二局',   10],
            ['中建三局',   20],
            ['中建四局',   5],
            ['中建五局',   5],
            ['中建六局',   30],
            ['中建七局',   15],
            ['中建八局',   5]
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
                	   title: '中建股份采购金额年度报表',
                	   html: '<div id="CGJE_Chart_chartContainer1"></div>'
                   },{
                	   title: '中建股份各局采购占比情况',
                	   html: '<div id="CGJE_Chart_chartContainer2"></div>'
                   }]
               }]
			},
           refreshChart:function(){
        	   setTimeout(function(){
        		   
        		   $('#CGJE_Chart_chartContainer1').width(Ext.getBody().getWidth()-250);
        		   $('#CGJE_Chart_chartContainer1').height(550);
        		   
        		   $('#CGJE_Chart_chartContainer2').width(Ext.getBody().getWidth()-250);
        		   $('#CGJE_Chart_chartContainer2').height(550);

				   var CGJE_Chart1 = new Highcharts.Chart(CGJE_Chart1_options);
				   var CGJE_Chart2 = new Highcharts.Chart(CGJE_Chart2_options);
					
					//$('#CGJE_Container').orbit({timer: false,bullets: true});
        	   },1000); 

           }
});
var CGJE_Chart1_options = {
      chart: {
         renderTo: 'CGJE_Chart_chartContainer1',
         defaultSeriesType: 'column'
      },
      title: {
         text: '中建股份采购金额年度报表'
      },
      xAxis: {
         categories: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月"]
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Amount'
         }
      },
      tooltip: {
         formatter: function() {
            return '<b>'+ this.series.name +'</b><br/>'+ this.x +': '+ this.y;
         }
      },
      plotOptions: {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
	  legend: {
         layout: 'vertical',
         backgroundColor: '#FFFFFF',
         align: 'left',
         verticalAlign: 'top',
         x: 100,
         y: 70,
         floating: true,
         shadow: true
      },
      series: [{
				name: '预算金额',
				data: [134,240,275,152,267,192,134,133,246,162]
		},{
				name: '实际采购',
				data: [263,267,132,190,128,177,197,216,216,247]
		}]
};


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
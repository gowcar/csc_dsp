var cailiaojiage_gufengongsi_options = {
      chart: {
         renderTo: 'cailiaojiage_gufengongsi_chartContainer',
         defaultSeriesType: 'column'
      },
      title: {
         text: '股份公司材料价格'
      },
      xAxis: {
         categories: ["一局","二局","三局","四局","五局"]
      },
      yAxis: {
         min: 0,
         title: {
            text: '价格'
         }
      },
      legend: {
		 enabled : false,
      },
      tooltip: {
         formatter: function() {
            return ''+
               this.x +': '+ this.y;
         }
      },
      plotOptions: {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
           series: [{
				data: [32416,37677,32089,26389,40948]
		}]
   };
   
var cailiaojiage_gongchengju_options = {
      chart: {
         renderTo: 'cailiaojiage_gongchengju_chartContainer',
         defaultSeriesType: 'column'
      },
      title: {
         text: 'Business Results'
      },
      xAxis: {
         categories: ["一局","二局","三局","四局","五局"]
      },
      yAxis: {
         min: 0,
         title: {
            text: '价格'
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
				name: '2004',
				data: [213,238,138]
		},{
				name: '2005',
				data: [272,139,140]
		}]
}; 

Ext.define('DataIntegration.view.CailiaoJiage', {
           extend: 'Ext.Container',
           xtype:'cailiaojiageview',
           config: {
		       layout: 'fit',
               items: [{
            	   xtype:'carousel',
        		   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   title: '股份公司材料价格',
                	   html: '<div id="cailiaojiage_gufengongsi_chartContainer"></div>'
                   },{
                	   title: 'Business Results',
                	   html: '<div id="cailiaojiage_gongchengju_chartContainer"></div>'
                   }]
               }]
           },
           refreshChart:function(){
        	   setTimeout(function(){
			   
        		   $('#cailiaojiage_gufengongsi_chartContainer').width(Ext.getBody().getWidth()-250);
        		   $('#cailiaojiage_gufengongsi_chartContainer').height(550);
				   
			       $('#cailiaojiage_gongchengju_chartContainer').width(Ext.getBody().getWidth()-250);
        		   $('#cailiaojiage_gongchengju_chartContainer').height(550);				   
				   
				   var cailiaojiage_gufengongsi_chart = new Highcharts.Chart(cailiaojiage_gufengongsi_options);
				   var cailiaojiage_gongchengju_chart = new Highcharts.Chart(cailiaojiage_gongchengju_options);
					
					//$('#cailiaojiage_container').orbit({timer: false,bullets: true});
        	   },500); 

           }
});
var caigoujine_gufengongsi_options = {
      chart: {
         renderTo: 'caigoujine_gufengongsi_chartContainer',
         defaultSeriesType: 'line',
         marginRight: 130,
         marginBottom: 25
      },
      title: {
         text: '股份公司采购金额',
         x: -20 //center
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
         title: {
            text: 'Revenue'
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
      series: [{
         data: [533998,452642,797504,874254,764172,830683,354362,581772,606484,684225,743235,397108]
      }]
   };
   
var caigoujine_gongchengju_options = {
      chart: {
         renderTo: 'caigoujine_gongchengju_chartContainer',
         defaultSeriesType: 'line',
         marginRight: 130,
         marginBottom: 25
      },
      title: {
         text: '工程局采购金额折线图',
         x: -20 //center
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
         title: {
            text: 'Revenue'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      tooltip: {
         formatter: function() {
                   return '<b>'+ this.series.name +'</b><br/>'+
               this.x +': '+ this.y;
         }
      },
      legend: {
		 enabled : false,
      },
      series: [{
         data: [533998,452642,797504,874254,764172,830683,354362,581772,606484,684225,743235,397108]
      }]
   };

Ext.define('DataIntegration.view.CaigouJine', {
           extend: 'Ext.Container',
           xtype:'caigoujineview',
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
                	   html: '<div id="caigoujine_gufengongsi_chartContainer"></div>'
                   },{
                	   title: '工程局采购金额',
                	   html: '<div id="caigoujine_gongchengju_chartContainer"></div>'
                   }]
               }]
           },
           refreshChart:function(){
        	   setTimeout(function(){
        		   
        		   $('#caigoujine_gufengongsi_chartContainer').width(Ext.getBody().getWidth()-250);
        		   $('#caigoujine_gufengongsi_chartContainer').height(550);
        		   
        		   $('#caigoujine_gongchengju_chartContainer').width(Ext.getBody().getWidth()-250);
        		   $('#caigoujine_gongchengju_chartContainer').height(550);
				   
				   var caigoujine_gufengongsi_chart = new Highcharts.Chart(caigoujine_gufengongsi_options);
				   var caigoujine_gongchengju_chart = new Highcharts.Chart(caigoujine_gongchengju_options);
					
				   //$('#caigoujine_container').orbit({timer: true,bullets: true});
        		    
        	   },1000); 

           }
});